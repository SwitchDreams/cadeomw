import React, { useState, useCallback, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { TableContainer } from './styles';
import {
  Container,
  TabContent,
  TabText,
  AllContainer,
  CourseNameContainer,
  CourseName,
} from '../Course/styles';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

interface Tab {
  selected: boolean;
  name: string;
}

interface Course {
  code: number;
  name: string;
  shift: string;
  num_semester: string;
  academic_degree: string;
}

interface Subject {
  code: number;
  subject_name: string;
  credit: number;
}

interface Department {
  name: string;
  initials: string;
  courses_list: Course[];
  subjects_list: Subject[];
}

interface RouteParams {
  id: string;
}

const DepartmentPage: React.FC = () => {
  const tabsInit = [
    {
      name: 'Materias',
      selected: true,
    },
    {
      name: 'Cursos',
      selected: false,
    },
  ];

  const history = useHistory();
  const params = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const [tabs, setTabs] = useState<Tab[]>(tabsInit);
  const [materias, setMaterias] = useState(true);
  const [cursos, setCursos] = useState(false);
  const [department, setDepartment] = useState<Department | null>(null);
  const [windowCheck, setWindowCheck] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getDepartment = async () => {
      try {
        const response = await Axios.get<Department>(
          `https://back.cadeomw.com.br/department/${params.id}?format=json`,
        );
        setDepartment(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        history.push('/');
      }
    };

    getDepartment();
  }, [history, params.id]);

  const handleSelectTab = useCallback(
    (name: string) => {
      const newTab = tabs.map(tab =>
        tab.name === name
          ? { name: tab.name, selected: true }
          : { name: tab.name, selected: false },
      );

      setTabs(newTab);

      if (name === 'Materias') {
        setMaterias(true);
        setCursos(false);
      } else if (name === 'Cursos') {
        setMaterias(false);
        setCursos(true);
      }
    },
    [tabs],
  );

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

  return (
    <>
      <Header transparent={false} />

      {loading && <Loading />}

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
        {department && !loading && (
          <CourseNameContainer>
            <CourseName>{department.name}</CourseName>
          </CourseNameContainer>
        )}

        {materias && department && !loading && (
          <TableContainer window={windowCheck}>
            <Table responsive="xl">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Matéria</th>
                  <th>Carga Horária</th>
                </tr>
              </thead>
              <tbody>
                {department.subjects_list.map(subject => (
                  <tr key={subject.code}>
                    <td>{subject.code}</td>
                    <td>{subject.subject_name}</td>
                    <td>{subject.credit}</td>
                  </tr>
                ))}
                {}
              </tbody>
            </Table>
          </TableContainer>
        )}

        {cursos && department && !loading && (
          <TableContainer window={windowCheck}>
            <Table responsive="xl">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Curso</th>
                  <th>Turno</th>
                  <th>Qt semestres</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {department.courses_list.map(course => (
                  <tr key={course.code}>
                    <td>{course.code}</td>
                    <td>{course.name}</td>
                    <td>{course.shift}</td>
                    <td>{course.num_semester}</td>
                    <td>{course.academic_degree}</td>
                  </tr>
                ))}
                {}
              </tbody>
            </Table>
          </TableContainer>
        )}
      </AllContainer>
    </>
  );
};

export default DepartmentPage;
