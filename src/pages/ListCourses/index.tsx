import React, { useEffect, useState, FormEvent } from 'react';
import Axios from 'axios';
import { FiChevronRight } from 'react-icons/fi';
import { apiCourses } from '../../services/api';

import { Courses, Form } from './styles';
import Header from '../../components/Header';

/*
  Página de listagem de cursos - Waliff
*/

type Inputs = {
  course: string;
};

interface Results {
  code: number;
  num_semester: number;
  name: string;
}

interface CourseInfos {
  results: Results[];
  next: string;
  previous: string;
}

const ListCourses: React.FC = () => {
  const [searchCourse, setSearchCourse] = useState('');
  const [courses, setCourses] = useState<CourseInfos>({
    results: [],
    next: '',
    previous: '',
  });

  function getCourses() {
    apiCourses.get<CourseInfos>(`courses/?format=json`).then(response => {
      console.log(response.data);
      setCourses(response.data);
    });
  }

  useEffect(() => {
    getCourses();
  }, []);

  function handlePagination(pag: string) {
    if (pag !== null) {
      Axios.get<CourseInfos>(`${pag}`).then(response => {
        console.log(response.data);
        setCourses(response.data);
      });
    }
  }

  function handleSearchCourse(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(event);
    apiCourses
      .get<CourseInfos>(`courses/?search=${searchCourse}&format=json`)
      .then(response => {
        console.log(response.data);
        setCourses(response.data);
      });
    setSearchCourse('');
  }

  return (
    <>
      <Header />

      <Form>
        <form onSubmit={handleSearchCourse}>
          <input
            value={searchCourse}
            onChange={e => setSearchCourse(e.target.value)}
            placeholder="Digite o nome do curso"
          />
          <button type="submit">Pesquisar</button>
        </form>
      </Form>

      <Courses>
        {courses.results.map(course => (
          <a key={course.code} href={`courses/${course.code}`}>
            <div>
              <strong>{course.name}</strong>
              <p>Código: {course.code}</p>
              <p>Quantidade de períodos: {course.num_semester}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}

        <div className="actions">
          <button
            type="button"
            disabled={courses.previous == null}
            onClick={() => handlePagination(courses.previous)}
          >
            Anterior
          </button>
          <button
            type="button"
            disabled={courses.next == null}
            onClick={() => handlePagination(courses.next)}
          >
            Próximo
          </button>
        </div>
      </Courses>
    </>
  );
};

export default ListCourses;
