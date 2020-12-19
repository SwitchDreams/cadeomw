import React, { useState, useCallback, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import api from '../../services/api';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import Flux from './flux';
import Listagem from './listSubjects';
import Infos from './infos';

import {
  AllContainer,
  CourseNameContainer,
  CourseName,
  Container,
  TabContent,
  TabText,
  CardFluxContainer,
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
}

export interface Period {
  semester: number;
  subjects: Materias[];
}

export interface Course {
  code: number;
  name: string;
  details: {
    workload: {
      total: number;
      optional: number;
      mandatory: number;
    };
    num_semester: number;
    academic_degree: string;
    shift: string;
    coordinator_name: string;
  };
  department: string;
  flow: Period[];
  flow_graph: null;
  curriculum: {
    optional: {
      code: string;
      credit: number;
      subject_name: string;
    }[];
    mandatory: {
      code: string;
      credit: number;
      subject_name: string;
    }[];
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
      console.log(response.data);
      const newCourse = response.data;

      const newFlow = newCourse.flow.map((period: Period) => {
        const newSubjects = period.subjects.map((subj: Materias) => {
          return {
            ...subj,
            subject_name:
              subj.subject_name[0] + subj.subject_name.slice(1).toLowerCase(),
            status: subj.status === 'OBR' ? 'obrigatória' : 'optativa',
          };
        });

        return { ...period, subjects: newSubjects };
      });

      setCourse(newCourse);
      setPeriods(newFlow);
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

            {course.details && <Infos details={course.details} />}

            <CardFluxContainer window={windowCheck}>
              <Flux window={windowCheck} periods={periods} />
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
              windowCheck={windowCheck}
              materias={course?.curriculum.optional}
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
              windowCheck={windowCheck}
              materias={course?.curriculum.mandatory}
            />
          </>
        )}
      </AllContainer>
    </>
  );
};

export default Course;
