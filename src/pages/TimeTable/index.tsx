import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Form as BootForm, Modal } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { FaCheck } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Header from '../../components/Header';
import Generator from '../../services/timetable/generator';
import {
  Form,
  CalendarContainer,
  SlotContainer,
  ListSubjects,
  SubjectCard,
  ModalSubjectsContainer,
  MontarGrade,
  HowToUse,
  ModalBusyHoursContainer,
  NoCalendarMessage,
} from './styles';
import {
  classToEvent,
  randomColor,
  Subject,
  ParsedSubjectTimetable,
  SearchResponse,
  ModalSubject,
  parseSchedule,
  checkboxes,
  hours,
} from './utils';
import api from '../../services/api';
import { useToast } from '../../hooks/toasts';

const initialDate = '2020-09-20';

function renderEventContent(eventInfo: any) {
  const [subjectName, className, teacher] = eventInfo.event.id.split(
    '-',
  ) as string[];
  return (
    <>
      <SlotContainer>
        <div className="title">
          {subjectName[0]}
          {subjectName.slice(1).toLowerCase()} - {className}
          <hr />
        </div>
        <div className="info">{teacher}</div>
      </SlotContainer>
    </>
  );
}

const TimeTable: React.FC = () => {
  let hourCounter = -5;

  const [selectedClasses, setSelectedClasses] = useState<Array<any>>([]);
  const [tryGenerate, setTryGenerate] = useState(false);

  const [windowCheck, setWindowCheck] = useState(false);

  const [search, setSearch] = useState('');
  const [subjectsSearched, setSubjectsSearched] = useState<Subject[]>([]);
  const [modalSubjects, setModalSubjects] = useState<ModalSubject[]>([]);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [checked, setChecked] = useState(checkboxes);
  const [busyHourSelected, setBusyHourSelected] = useState(false);

  const { addToast } = useToast();

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    } else {
      setWindowCheck(false);
    }
  });

  const handleDeleteSubject = useCallback(
    (subj: Subject) => {
      const newSubjs = subjectsSearched.filter(
        subjSearched => subj !== subjSearched,
      );

      setSubjectsSearched(newSubjs);
    },
    [subjectsSearched],
  );

  async function handleAddModalSubject(subj: ModalSubject) {
    try {
      const response = await api.get(`subjects/${subj.code}`);
      const newSubj = {
        code: response.data.code,
        department: response.data.department,
        department_name: response.data.department_name,
        name: response.data.name,
        credit: response.data.credit,
        pass_percent: response.data.pass_percent,
        prerequisites: null,
        grade_infos: null,
        equivalences: null,
        class: null,
        offer: response.data.offer,
      };
      setSubjectsSearched([...subjectsSearched, newSubj]);
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro inesperado',
        description: 'Não foi possível adicionar essa disciplina',
      });
    }
  }

  function handleChangeClass(props: { class: string; subj: Subject }): void {
    const newSubjectsList = subjectsSearched.map(subject => {
      if (props.subj.name === subject.name)
        return { ...props.subj, class: props.class };
      return subject;
    });
    setSubjectsSearched(newSubjectsList);
  }

  async function handleInputSearch(event: any): Promise<void> {
    event.preventDefault();

    try {
      const response = await api.get<SearchResponse>(
        `subjects?search=${search}&format=json`,
      );
      if (response.data.results.length > 0) {
        setModalSubjects(response.data.results);
        setShow(true);
      } else {
        addToast({
          type: 'info',
          title: 'Disciplinas não encontradas',
          description:
            'Não foram encontradas disciplinas que se encaixem com a pesquisa, tente mudar um pouco!',
        });
      }
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha na pesquisa',
        description: 'Tente novamente mais tarde',
      });
    }
  }

  const handleGenerateTable = useCallback(
    (subjects: ParsedSubjectTimetable[], chosenClasses: any) => {
      const filteredSubjects = subjects
        .map(subject => {
          const randColor = randomColor();
          return {
            classes: subject.classes.map(schoolClass => {
              return {
                ...schoolClass,
                color: randColor,
                subjectName: subject.name,
              };
            }),
            color: randColor,
            name: subject.name,
          };
        })
        .filter(({ name }) => {
          return subjectsSearched.find(subj => subj.name === name);
        });
      try {
        const busyHours: string[] = [];
        checked.forEach(check => {
          if (check.checked) busyHours.push(check.name);
        });
        const generator = new Generator(
          filteredSubjects,
          busyHours,
          chosenClasses,
        );
        generator.bestSubjectsClasses();
        const formattedEvents: any[] = [];
        generator.selectedClasses.forEach(selectedClass => {
          classToEvent(selectedClass).forEach(formattedEvent =>
            formattedEvents.push(formattedEvent),
          );
        });
        setSelectedClasses(formattedEvents);
      } catch (e) {
        addToast({
          type: 'error',
          title: 'Erro montar grade',
          description: e.message,
        });
      }
    },
    [subjectsSearched, checked, addToast],
  );

  const handleParseSubjects = useCallback(() => {
    setTryGenerate(true);

    const parsedSubjects = subjectsSearched
      .filter(subj => subj.class === null || subj.class === 'turma')
      .map(subj => {
        return {
          name: subj.name,
          classes: subj.offer.map(offer => {
            const schedule = parseSchedule(offer.schedule);
            return {
              name: offer.name,
              teacher: offer.teachers[0],
              time: schedule,
              place: offer.place,
            };
          }),
        };
      });

    const parsedChosenClasses = subjectsSearched
      .filter(subj => subj.class !== null && subj.class !== 'turma')
      .map(subj => {
        const chosenClass = subj.offer.find(c => c.name === subj.class);
        const schedule = chosenClass
          ? parseSchedule(chosenClass.schedule)
          : null;
        return {
          name: chosenClass?.name,
          teacher: chosenClass?.teachers,
          time: schedule,
          place: chosenClass?.place,
          subjectName: subj.name,
          color: randomColor(),
        };
      });

    handleGenerateTable(parsedSubjects, parsedChosenClasses);
  }, [subjectsSearched, handleGenerateTable]);

  const handleChangeCheckbox = useCallback(
    (name: string) => {
      const checkedNewState = checked.map(state => {
        if (state.name === name) return { name, checked: !state.checked };
        return state;
      });
      setChecked(checkedNewState);
      setBusyHourSelected(true);
    },
    [checked],
  );

  return (
    <>
      <div className="text-center">
        <Header transparent={false} />

        <HowToUse window={windowCheck}>
          <h3>Gerador de Grade Automática</h3>
          <p>
            Finalmente chegou o nosso tão esperado, xuxuzinho, gerador de grade
            automática! <br /> E para facilitar seu uso, preparamos um pequeno
            passo a passo para vocês.
          </p>
          <p>
            Primeiro, pesquise o nome da matéria que deseja adicionar na sua
            grade, nós mostraremos uma série de possibilidades que são
            compatíveis com a sua pesquisa, portanto tente ser específico.
            Depois de adicionada a disciplina em sua lista, você pode ou não
            especificar a turma na qual deseja cursar. Caso não especificada,
            nós pegaremos a turma que melhor se encaixa nos seus horários.
          </p>
          <p>
            Caso alguma turma ou disciplina especificada tenha conflito de
            horário com outra, uma das duas matérias não irá ser adicionada à
            sua grade.
          </p>
        </HowToUse>

        <Form>
          <Button
            className="button"
            variant="outlined"
            color="primary"
            onClick={() => setShow2(true)}
          >
            {busyHourSelected
              ? 'Horário Ocupado Adicionado!'
              : 'Adicionar Horário Ocupado'}
          </Button>
          <TextField
            id="filled-basic"
            variant="filled"
            label="Pesquise as disciplinas"
            onChange={e => setSearch(e.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            className="button"
            onClick={handleInputSearch}
          >
            Pesquisar Disciplina
          </Button>
        </Form>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <ModalSubjectsContainer>
            <Modal.Header closeButton>
              <Modal.Title id="title">
                Selecione as disciplinas que deseja adicionar à sua grade
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                {modalSubjects.map(subject => (
                  <li key={subject.code}>
                    <div className="subjectName">
                      <span className="bold">{subject.name} </span>-
                      <span className="grey"> {subject.code}</span>
                      <span>
                        {subjectsSearched.find(
                          subj => subj.code === subject.code,
                        ) && (
                          <FaCheck
                            style={{
                              marginLeft: '10px',
                              color: '#5cb85c',
                              fontSize: windowCheck ? 20 : '1vw',
                            }}
                          />
                        )}
                      </span>
                    </div>
                    <div className="addButton">
                      <IconButton
                        aria-label="add"
                        style={{
                          marginLeft: '0.9vw',
                          marginBottom: '0.8vh',
                        }}
                        onClick={() => handleAddModalSubject(subject)}
                      >
                        <AddIcon
                          style={{
                            fontSize: windowCheck ? 20 : '1.5vw',
                            color: '#4e3388',
                          }}
                        />
                      </IconButton>
                    </div>
                  </li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              Não encontrou sua disciplina? Tente pesquisar de outra forma!
            </Modal.Footer>
          </ModalSubjectsContainer>
        </Modal>

        <Modal
          show={show2}
          onHide={() => setShow2(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <ModalBusyHoursContainer>
            <Modal.Header closeButton>
              <Modal.Title id="title">
                Selecione os horários em que não deseja ter aulas
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <table>
                <thead>
                  <tr>
                    <th>Horários</th>
                    <th>Segunda</th>
                    <th>Terça</th>
                    <th>Quarta</th>
                    <th>Quinta</th>
                    <th>Sexta</th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map(hour => {
                    hourCounter += 5;
                    return (
                      <tr key={hour}>
                        <td>{hour}</td>
                        {checked
                          .slice(hourCounter, hourCounter + 5)
                          .map(checkbox => (
                            <td key={checkbox.name}>
                              <Checkbox
                                color="default"
                                onChange={() =>
                                  handleChangeCheckbox(checkbox.name)
                                }
                                inputProps={{
                                  'aria-label': 'checkbox with default color',
                                }}
                                checked={checkbox.checked}
                              />
                            </td>
                          ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Modal.Body>
          </ModalBusyHoursContainer>
        </Modal>

        {subjectsSearched && (
          <ListSubjects window={windowCheck}>
            {subjectsSearched.map(subj => (
              <div key={subj.name} className="subjectShow">
                <SubjectCard window={windowCheck}>
                  <h3>{subj.name}</h3>
                  <div className="left">
                    <BootForm.Group controlId="exampleForm.ControlSelect1">
                      <BootForm.Control
                        as="select"
                        onChange={e =>
                          handleChangeClass({
                            class: e.target.value,
                            subj,
                          })
                        }
                      >
                        <option>turma</option>
                        {subj.offer.map(offer => (
                          <option key={offer.name}>{offer.name}</option>
                        ))}
                      </BootForm.Control>
                    </BootForm.Group>
                    <IconButton
                      aria-label="delete"
                      style={{
                        marginLeft: windowCheck ? 0 : '0.9vw',
                        marginBottom: '0.8vh',
                      }}
                      onClick={() => handleDeleteSubject(subj)}
                    >
                      <DeleteIcon
                        style={{
                          fontSize: windowCheck ? 20 : '1.5vw',
                          color: '#4e3388',
                        }}
                      />
                    </IconButton>
                  </div>
                </SubjectCard>
              </div>
            ))}
          </ListSubjects>
        )}

        {subjectsSearched.length !== 0 && (
          <MontarGrade>
            <Button
              variant="outlined"
              color="primary"
              className="button"
              onClick={handleParseSubjects}
            >
              Montar Grade Horária
            </Button>
          </MontarGrade>
        )}

        {selectedClasses.length !== 0 && (
          <CalendarContainer window={windowCheck}>
            <FullCalendar
              plugins={[timeGridPlugin, dayGridPlugin]}
              initialView="timeGridWeek"
              weekText="ddd"
              height="auto"
              weekends={false}
              aspectRatio={1}
              eventConstraint={{
                start: '08:00:00',
                end: '24:00:00',
              }}
              initialDate={initialDate}
              allDaySlot={false}
              eventContent={renderEventContent}
              slotMinTime="08:00:00"
              slotMaxTime="24:00:00"
              slotDuration="1:00:00"
              slotLabelInterval={{ hours: 1 }}
              events={selectedClasses}
              dayHeaderFormat={{ weekday: 'short' }}
              headerToolbar={false}
            />
          </CalendarContainer>
        )}
        {selectedClasses.length === 0 && tryGenerate && (
          <NoCalendarMessage>
            Não foi possível criar uma grade horária com as disciplinas e
            horários selecionados, tente uma nova combinação.
          </NoCalendarMessage>
        )}
      </div>
    </>
  );
};

export default TimeTable;
