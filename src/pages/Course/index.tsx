import React, { useState, useCallback, useEffect } from 'react';

import { useParams, useHistory } from 'react-router-dom';
import { Graphviz } from 'graphviz-react';

import api from '../../services/api';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import Flux from './flux';
import HardestEasiest from '../../components/SubjectCard';

import { useToast } from '../../hooks/toasts';

import {
  AllContainer,
  CourseNameContainer,
  CourseName,
  Container,
  TabContent,
  TabText,
  CardFluxContainer,
  CardSubjectsContainer,
} from './styles';

/*
  Página do curso - Bruna e Japa
*/

interface Tab {
  selected: boolean;
  name: string;
}

export interface Materias {
  subject_name: string;
  credit: number;
  code: number;
  status: string | undefined;
  pass_percent: number;
}

export interface Period {
  semester: number;
  credits: number | null;
  subjects: Materias[];
}

export interface Course {
  name: string;
  flow: Period[];
  hardest_subject: Materias;
  easiest_subject: Materias;
  flow_graph: string;
}

interface RouteParams {
  id: string;
}

const Course: React.FC = () => {
  const tabsInit = [
    {
      name: 'Fluxo',
      selected: true,
    },
    {
      name: 'Grafo',
      selected: false,
    },
  ];

  const [windowCheck, setWindowCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  const [course, setCourse] = useState<Course | null>(null);
  const [periods, setPeriods] = useState<Period[] | null>(null);

  const [tabs, setTabs] = useState<Tab[]>(tabsInit);
  const [fluxo, setFluxo] = useState(true);
  const [grafo, setGrafo] = useState(false);
  const params = useParams<RouteParams>();
  const history = useHistory();

  const { addToast } = useToast();

  useEffect(() => {
    api
      .get<Course>(`courses/${params.id}?format=json`)
      .then(response => {
        let newCourse = response.data;
        let statusHardest = newCourse.hardest_subject.status;
        let statusEasiest = newCourse.easiest_subject.status;

        if (statusHardest === 'OBR' || statusHardest === 'OBS') {
          statusHardest = 'obrigatória';
        } else if (statusHardest === 'OPT') {
          statusHardest = 'optativa';
        } else {
          statusHardest = 'módulo livre';
        }

        if (statusEasiest === 'OBR' || statusEasiest === 'OBS') {
          statusEasiest = 'obrigatória';
        } else if (statusEasiest === 'OPT') {
          statusEasiest = 'optativa';
        } else {
          statusEasiest = 'módulo livre';
        }

        newCourse = {
          ...newCourse,
          hardest_subject: {
            ...newCourse.hardest_subject,
            status: statusHardest,
          },
          easiest_subject: {
            ...newCourse.easiest_subject,
            status: statusEasiest,
          },
        };

        setCourse(newCourse);

        const periodList = response.data.flow.map(
          (period: Period): Period => {
            let sumCredits = 0;

            const newSubjects = period.subjects.map((subject: Materias) => {
              sumCredits += subject.credit;

              const newSubjectName =
                subject.subject_name.charAt(0).toUpperCase() +
                subject.subject_name.slice(1).toLowerCase();

              let newStatus;

              if (subject.status === 'OBR' || subject.status === 'OBS') {
                newStatus = 'obrigatória';
              } else if (subject.status === 'OPT') {
                newStatus = 'optativa';
              } else if (subject.status === 'ML') {
                newStatus = 'módulo livre';
              }

              return {
                credit: subject.credit,
                subject_name: newSubjectName,
                status: newStatus,
                pass_percent: subject.pass_percent,
                code: subject.code,
              };
            });

            setLoading(false);

            return { ...period, credits: sumCredits, subjects: newSubjects };
          },
        );

        setPeriods(periodList);
      })
      .catch(() => {
        setLoading(false);
        addToast({
          type: 'error',
          title: 'Erro ao carregar o curso desejado',
          description: 'Tente novamente mais tarde',
        });
        history.push('/list-courses');
      });
  }, [params.id, addToast, history]);

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

  const handleSelectTab = useCallback(
    (name: string) => {
      const newTab = tabs.map(tab =>
        tab.name === name
          ? { name: tab.name, selected: true }
          : { name: tab.name, selected: false },
      );

      setTabs(newTab);

      if (name === 'Fluxo') {
        setFluxo(true);
        setGrafo(false);
      } else {
        setFluxo(false);
        setGrafo(true);
      }
    },
    [tabs],
  );

  return (
    <>
      <Header transparent={false} />

      <Container>
        {tabs.map(tab => (
          <TabContent
            key={tab.name}
            selected={tab.selected}
            onClick={() => handleSelectTab(tab.name)}
            window={windowCheck}
          >
            <TabText window={windowCheck} selected={tab.selected}>
              {tab.name}
            </TabText>
          </TabContent>
        ))}
      </Container>

      <AllContainer window={windowCheck}>
        {loading && <Loading />}

        {grafo && course && (
          <Graphviz
            dot={course?.flow_graph}
            options={{ fit: true, height: '100%', width: '100%', zoom: true }}
          />
        )}

        {fluxo && course && (
          <AllContainer window={windowCheck}>
            <CourseNameContainer>
              <CourseName>{course?.name}</CourseName>
            </CourseNameContainer>

            <CardFluxContainer window={windowCheck}>
              <CardSubjectsContainer window={windowCheck}>
                <HardestEasiest
                  title="Matéria Mais Difícil"
                  subject={course.hardest_subject}
                />
              </CardSubjectsContainer>

              <Flux window={windowCheck} periods={periods} />

              <CardSubjectsContainer window={windowCheck}>
                <HardestEasiest
                  title="Matéria Mais Fácil"
                  subject={course.easiest_subject}
                />
              </CardSubjectsContainer>
            </CardFluxContainer>
          </AllContainer>
        )}
      </AllContainer>
    </>
  );
};

export default Course;
