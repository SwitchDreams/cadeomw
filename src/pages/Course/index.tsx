import React, { useState, useCallback, useEffect } from 'react';

import Spinner from '../../assets/spinner-icon.gif';

import api from '../../services/api';
import Header from '../../components/Header';
import Flux from './flux';
import InfoCards from './infoCards';
import HardestEasiest from '../../components/SubjectCard';
import {useParams} from 'react-router'


import {
  AllContainer,
  CourseNameContainer,
  CourseName,
  Container,
  TabContent,
  TabText,
  ContainerPage,
  CardFluxContainer,
  InfoContainerCard,
  CardSubjectsContainer,
  Loading,
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
}

interface RouteParams {
  id: string
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
  // const { params } = useRouteMatch<URLParams>();

  const [windowCheck, setWindowCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  const [course, setCourse] = useState<Course | null>(null);
  const [periods, setPeriods] = useState<Period[] | null>(null);

  const [tabs, setTabs] = useState<Tab[]>(tabsInit);
  const [fluxo, setFluxo] = useState(true);
  const [grafo, setGrafo] = useState(false);
  const params = useParams<RouteParams>();

  useEffect(() => {
    api
      .get(`https://mw-melhorado-app.herokuapp.com/courses/${params.id}?format=json`)
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
              };
            });

            setLoading(false);

            return { ...period, credits: sumCredits, subjects: newSubjects };
          },
        );

        setPeriods(periodList);
      });
  }, [params.id]);

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
        <h1>{params.id}</h1>
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
        {loading && (
          <Loading>
            <div>
              <img src={Spinner} alt="loading" />
              <h1> Carregando </h1>
            </div>
          </Loading>
        )}

        {grafo && <ContainerPage />}

        {fluxo && course && (
          <AllContainer window={windowCheck}>
            <CourseNameContainer>
              <CourseName>{course?.name}</CourseName>
            </CourseNameContainer>

            <CardFluxContainer window={windowCheck}>
              <InfoContainerCard window={windowCheck}>
                <InfoCards />
              </InfoContainerCard>

              <Flux window={windowCheck} periods={periods} />

              <CardSubjectsContainer window={windowCheck}>
                <HardestEasiest
                  title="Matéria Mais Difícil"
                  subject={course.hardest_subject}
                />
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
