import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { MenuItem, Select, Button, FormControl } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Form as BootForm } from 'react-bootstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import TextField from '@material-ui/core/TextField';
import { useToast } from '../../hooks/toasts';
import api from '../../services/api';

import Header from '../../components/Header';
import { Subjects } from '../../services/timetable/example';
import Generator from '../../services/timetable/generator';
import {
  SubjectChip,
  Form,
  CalendarContainer,
  SlotContainer,
  ListSubjects,
  SubjectCard,
} from './styles';
import { classToEvent, randomColor } from './utils';

interface Subject {
  code: string;
  department: string;
  department_name: string;
  name: string;
  credit: number;
  pass_percent: number;
  prerequisites: null;
  grade_infos: null;
  equivalences: null;
  get_offer: {
    name: string;
    semester: string;
    teachers: string[];
    total_vacancies: string;
    schedule: string[];
    place: string;
  }[];
}

const initialDate = '2020-09-20';

function renderEventContent(eventInfo: any) {
  const [subjectName, className, teacher, place] = eventInfo.event.id.split(
    '-',
  ) as string[];
  return (
    <>
      <SlotContainer>
        <div className="title">
          {subjectName} - {className}
          <hr />
        </div>
        <div className="info">
          {teacher} <br />
          {place}
        </div>
      </SlotContainer>
    </>
  );
}

const subjects = Subjects;

// Variáveis de tamanho para Multiple Select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const TimeTable: React.FC = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<Array<string>>([]);
  const [selectedClasses, setSelectedClasses] = useState<Array<any>>([]);
  const [windowCheck, setWindowCheck] = useState(false);
  const [search, setSearch] = useState('');
  const [subjectsSearched, setSubjectsSearched] = useState<Subject[]>([]);

  const subjectsList = [
    {
      code: 'ADM0322',
      department: 'http://localhost:8000/department/1/',
      department_name: 'DEPTO ADMINISTRAÇÃO',
      name: 'CRIATIVIDADE E INOVAÇÃO NAS ORGANIZAÇÕES',
      credit: 15,
      pass_percent: 0.0,
      prerequisites: null,
      grade_infos: null,
      equivalences: null,
      get_offer: [
        {
          name: 'A',
          semester: '2020.1',
          teachers: ['SIEGRID GUILLAUMON DECHANDT'],
          total_vacancies: '50',
          schedule: ['6M1234'],
          place: 'PJC BT 005',
        },
      ],
    },
    {
      code: 'PCL0105',
      department: 'http://localhost:8000/department/41/',
      department_name: 'INSTITUTO DE PSICOLOGIA',
      name: 'PESQUISA EM PSICOLOGIA DA SAÚDE',
      credit: 15,
      pass_percent: 0.0,
      prerequisites: null,
      grade_infos: null,
      equivalences: null,
      get_offer: [
        {
          name: '02A',
          semester: '2020.1',
          teachers: ['ADERSON LUIZ COSTA JUNIOR'],
          total_vacancies: '10',
          schedule: ['7M1234'],
          place: 'A definir',
        },
        {
          name: '03A',
          semester: '2020.1',
          teachers: ['ELIZABETH QUEIROZ'],
          total_vacancies: '10',
          schedule: ['7M1234'],
          place: 'A definir',
        },
        {
          name: '04A',
          semester: '2020.1',
          teachers: ['ELIANE MARIA FLEURY SEIDL'],
          total_vacancies: '10',
          schedule: ['7M1234'],
          place: 'A definir',
        },
        {
          name: '05A',
          semester: '2020.1',
          teachers: ['LARISSA POLEJACK BRAMBATTI'],
          total_vacancies: '10',
          schedule: ['7M1234'],
          place: 'A definir',
        },
        {
          name: '06A',
          semester: '2020.1',
          teachers: ['TEREZA CRISTINA CAVALCANTI FERREIRA DE ARAUJO'],
          total_vacancies: '10',
          schedule: ['7M1234'],
          place: 'A definir',
        },
      ],
    },
    {
      code: 'MUS0702',
      department: 'http://127.0.0.1:8000/department/49/?format=api',
      department_name: 'DEPTO MÚSICA',
      name: 'TROMBONE 3',
      credit: 7,
      pass_percent: 0.0,
      prerequisites: null,
      grade_infos: null,
      equivalences: null,
      get_offer: [
        {
          name: 'A',
          semester: '2020.1',
          teachers: ['CARLOS EDUARDO VIANNA DE MELLO'],
          total_vacancies: '0',
          schedule: ['4M5', '4T1'],
          place: '',
        },
        {
          name: 'B',
          semester: '2020.1',
          teachers: ['ALCIOMAR OLIVEIRA DOS SANTOS'],
          total_vacancies: '2',
          schedule: ['4M5', '4T1'],
          place: '',
        },
      ],
    },
    {
      code: 'CIC0104',
      department: 'http://127.0.0.1:8000/department/5/?format=api',
      department_name: 'DEPTO CIÊNCIAS DA COMPUTAÇÃO',
      name: 'SOFTWARE BASICO',
      credit: 15,
      pass_percent: 0.0,
      prerequisites: null,
      grade_infos: null,
      equivalences: null,
      get_offer: [
        {
          name: 'A',
          semester: '2020.1',
          teachers: ['MARCELO LADEIRA'],
          total_vacancies: '50',
          schedule: ['2M34', '4M34'],
          place: 'PAT AT 093',
        },
        {
          name: 'B',
          semester: '2020.1',
          teachers: ['BRUNO LUIGGI MACCHIAVELLO ESPINOZA'],
          total_vacancies: '50',
          schedule: ['4M34', '6M34'],
          place: 'PAT AT 117',
        },
      ],
    },
  ];

  const { addToast } = useToast();

  function handleChange(event: any): void {
    setSelectedSubjects(event.target.value);
  }

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

  const searchContainsSubj = useCallback(
    (subj: Subject): boolean => {
      let contains = false;
      subjectsSearched.forEach(subject => {
        if (subj.code === subject.code) contains = true;
      });

      return contains;
    },
    [subjectsSearched],
  );

  async function handleInputSearch(event: any): Promise<void> {
    event.preventDefault();
    subjectsList.forEach(subj => {
      if (subj.name.includes(search) && !searchContainsSubj(subj))
        setSubjectsSearched([...subjectsSearched, subj]);
    });

    // try {
    //   const response = await api.get<SubjectInfos>(
    //     `subjects/?search=${search}&format=json`,
    //   );
    //   console.log(response.data);
    //   // setSubjectsSearched(response.data);
    // } catch (err) {
    //   addToast({
    //     type: 'error',
    //     title: 'Falha na pesquisa',
    //     description: 'Tente novamente mais tarde',
    //   });
    // }
  }

  function handleGenerateTable(): void {
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
        return selectedSubjects.includes(name);
      });
    const generator = new Generator(filteredSubjects, []);
    generator.bestSubjectsClasses();
    const formattedEvents: any[] = [];
    generator.selectedClasses.forEach(selectedClass => {
      classToEvent(selectedClass).forEach(formattedEvent =>
        formattedEvents.push(formattedEvent),
      );
    });
    setSelectedClasses(formattedEvents);
  }

  return (
    <>
      <div className="text-center">
        <Header transparent={false} />

        <Form>
          <TextField
            id="filled-basic"
            variant="filled"
            label="Pesquise as disciplinas"
            onChange={e => setSearch(e.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={handleInputSearch}
          >
            Montar Grade
          </Button>
        </Form>

        {subjectsSearched && (
          <ListSubjects>
            {subjectsSearched.map(subj => (
              <div key={subj.name} className="subjectShow">
                <SubjectCard>
                  <h3>{subj.name}</h3>
                  <div className="left">
                    <BootForm.Group controlId="exampleForm.ControlSelect1">
                      <BootForm.Control as="select">
                        <option>turma</option>
                        {subj.get_offer.map(offer => (
                          <option key={offer.name}>{offer.name}</option>
                        ))}
                      </BootForm.Control>
                    </BootForm.Group>
                    <IconButton
                      aria-label="delete"
                      style={{
                        marginLeft: '0.9vw',
                        marginBottom: '0.8vh',
                      }}
                      onClick={() => handleDeleteSubject(subj)}
                    >
                      <DeleteIcon
                        style={{
                          fontSize: '1.5vw',
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
                end: '22:00:00',
              }}
              initialDate={initialDate}
              allDaySlot={false}
              eventContent={renderEventContent}
              slotMinTime="08:00:00"
              slotMaxTime="22:00:00"
              slotDuration="1:00:00"
              slotLabelInterval={{ hours: 1 }}
              events={selectedClasses}
              dayHeaderFormat={{ weekday: 'short' }}
              headerToolbar={false}
            />
          </CalendarContainer>
        )}
      </div>
    </>
  );
};

export default TimeTable;
