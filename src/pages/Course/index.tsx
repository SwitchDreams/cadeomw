import React, { useState, useCallback, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import createServer from '../../services/mock';
import api from '../../services/api';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import Flux from './flux';
import Listagem from './listSubjects';
import Infos from './infos';
import HardestEasiest from '../../components/SubjectCard';

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
  Página do curso - Bruna
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
  optativas: {
    nome: string;
    cargaHoraria: number;
    departamento: string;
  }[];
  obrigatorias: {
    nome: string;
    cargaHoraria: number;
    departamento: string;
  }[];
  informations: {
    cargaHoraria: {
      totalMinima: string;
      optativaMinima: string;
    };
    cargaHorariaObrigatoria: {
      total: string;
      praticos: string;
      teoricos: string;
    };
    periodoLetivo: {
      minimo: number;
      medio: number;
      maximo: number;
    };
    horasComplementares: string;
    coordenador: string;
  };
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
      name: 'Obrigatórias',
      selected: false,
    },
    {
      name: 'Optativas',
      selected: false,
    },
  ];

  createServer();

  const [windowCheck, setWindowCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  const [course, setCourse] = useState<Course | null>(null);
  const [periods, setPeriods] = useState<Period[] | null>(null);

  const [tabs, setTabs] = useState<Tab[]>(tabsInit);

  const [fluxo, setFluxo] = useState(true);
  const [optativas, setOptativas] = useState(false);
  const [obrigatorias, setObrigatorias] = useState(false);
  // const [grafo, setGrafo] = useState(false);

  const params = useParams<RouteParams>();

  useEffect(() => {
    api.get(`courses/${params.id}?format=json`).then(response => {
      const newCourse = response.data[0];
      setCourse(newCourse);
      setPeriods(newCourse.flow);
      setLoading(false);
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
        setOptativas(false);
        setObrigatorias(false);
      } else if (name === 'Optativas') {
        setFluxo(false);
        setOptativas(true);
        setObrigatorias(false);
      } else if (name === 'Obrigatórias') {
        setFluxo(false);
        setOptativas(false);
        setObrigatorias(true);
      }
    },
    [tabs],
  );

  return (
    <>
      <Header transparent={false} />

      <Container window={windowCheck}>
        {tabs.map(tab => (
          <TabContent
            key={tab.name}
            selected={tab.selected}
            onClick={() => handleSelectTab(tab.name)}
            window={windowCheck}
          >
            <TabText>{tab.name}</TabText>
          </TabContent>
        ))}
      </Container>

      <AllContainer window={windowCheck}>
        {loading && <Loading />}

        {/* {grafo && course && (
          <Graphviz
            dot={course?.flow_graph}
            options={{ fit: true, height: '100%', width: '100%', zoom: true }}
          />
        )} */}

        {fluxo && course && (
          <AllContainer window={windowCheck}>
            <CourseNameContainer>
              <CourseName>{course?.name}</CourseName>
            </CourseNameContainer>

            <Infos informations={course.informations} />

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

        {optativas && course && (
          <>
            <CourseNameContainer>
              <CourseName>{course?.name}</CourseName>
            </CourseNameContainer>

            <Listagem
              status="optativa"
              window={windowCheck}
              materias={course?.optativas}
            />
          </>
        )}

        {obrigatorias && course && (
          <>
            <CourseNameContainer>
              <CourseName>{course?.name}</CourseName>
            </CourseNameContainer>

            <Listagem
              status="obrigatória"
              window={windowCheck}
              materias={course?.obrigatorias}
            />
          </>
        )}
      </AllContainer>
    </>
  );
};

export default Course;
