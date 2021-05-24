import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Header from '../../components/Header';
import Generator from '../../services/timetable/generator';
import { HowUse, Fullcalendar, Listsubjects } from './helpers';
import { Form, MontarGrade } from './styles';
import {
  classToEvent,
  randomColor,
  Subject,
  ParsedSubjectTimetable,
  SearchResponse,
  ModalSubject,
  parseSchedule,
  checkboxes,
} from './utils';
import api from '../../services/api';
import { useToast } from '../../hooks/toasts';
import { Modais } from './modais';
import Adsense from "../../components/Adsense";


const TimeTable: React.FC = () => {
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
        `subjects?search=${search}&format=json&has_offer=true`,
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

        <HowUse window={windowCheck} />
        <Adsense className="my-3" disposition="leaderboard" />
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
            style={{ background: '#FFF' }}
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

        <Modais
          modalSubjects={modalSubjects}
          subjectsSearched={subjectsSearched}
          show={show}
          show2={show2}
          windowCheck={windowCheck}
          handleAddModalSubject={handleAddModalSubject}
          handleChangeCheckbox={handleChangeCheckbox}
          checked={checked}
          hide1={() => setShow(false)}
          hide2={() => setShow2(false)}
        />

        <Listsubjects
          subjectsSearched={subjectsSearched}
          window={windowCheck}
          handleChangeClass={handleChangeClass}
          handleDeleteSubject={handleDeleteSubject}
        />

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

        <Fullcalendar
          selectedClasses={selectedClasses}
          window={windowCheck}
          tryGenerate={tryGenerate}
        />
      </div>

    </>
  );
};

export default TimeTable;
