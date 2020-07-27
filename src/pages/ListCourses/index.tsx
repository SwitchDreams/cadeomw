import React, { useEffect, useState, FormEvent } from 'react';
import Axios from 'axios';
import { FiChevronRight } from 'react-icons/fi';
import { apiCourses } from '../../services/api';
import Spinner from '../../assets/spinner-icon.gif'

import { Courses, Form, QtdSearch, Loading } from './styles';
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
  count: number;
}

const ListCourses: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [qtdResults, setqtdResults] = useState(false);
  const [searchCourse, setSearchCourse] = useState('');
  const [courses, setCourses] = useState<CourseInfos>({
    results: [],
    next: '',
    previous: '',
    count: 0,
  });

  async function getCourses() {
    try {
      const response = await apiCourses.get<CourseInfos>(`courses/?format=json`)
      console.log(response.data);
      setCourses(response.data);
      setLoading(false);
    } catch(err) {

    }
    
  }

  useEffect(() => {
    getCourses();
  }, []);

  async function handlePagination(pag: string) {
    if (pag !== null) {
      setLoading(true);
      try{
      const response = await Axios.get<CourseInfos>(`${pag}`)
        console.log(response.data);
        setCourses(response.data);
        setLoading(false);
        window.scrollTo(0,0);
      } catch(err) {

      }
    }
  }

  async function handleSearchCourse(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    console.log(event);
    setLoading(true);
    try {
      const response = await apiCourses.get<CourseInfos>(`courses/?search=${searchCourse}&format=json`)
      console.log("search: ", response.data);
      setCourses(response.data);
      setqtdResults(true);
      setLoading(false);
    }catch(err){

    }
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

      { loading && 
      <Loading> 
        <div>
          <img src={Spinner} alt="loading"></img> 
          <h1> Carregando </h1>
        </div>
      </Loading> }

      { qtdResults && !loading &&
        <QtdSearch> 
          <p>Foram encontrados {courses.count} resultados</p> 
        </QtdSearch> } 
      { !loading &&
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

          { !loading && 
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
          </div> }
        </Courses> }
    </>
  );
};

export default ListCourses;
