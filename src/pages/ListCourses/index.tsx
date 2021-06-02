import React, { useEffect, useState, FormEvent } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import Grid from '@material-ui/core/Grid';
import api from '../../services/api';

import { useToast } from '../../hooks/toasts';

import { Courses, Form, QtdSearch } from './styles';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import ListCard from '../../components/ListCard';
import Adsense from '../../components/Adsense';

interface Results {
  code: number;
  num_semester: number;
  shift: string;
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
  const [qtdResults, setQtdResults] = useState(false);
  const [searchCourse, setSearchCourse] = useState('');
  const [courses, setCourses] = useState<CourseInfos>({
    results: [],
    next: '',
    previous: '',
    count: 0,
  });
  const { addToast } = useToast();
  const [WindowCheck, setWindowCheck] = useState(false);
  const history = useHistory();

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

  useEffect(() => {
    setLoading(true);
    const getCourses = async () => {
      try {
        const response = await api.get<CourseInfos>(`courses/?format=json`);

        setCourses(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        addToast({
          type: 'error',
          title: 'Erro ao carregar os cursos',
          description: 'Tente novamente mais tarde',
        });
        history.push('/');
      }
    };

    getCourses();
  }, [addToast, history]);

  async function handlePagination(pag: string) {
    if (pag !== null) {
      setLoading(true);
      try {
        const route = `${pag.slice(0, 4)}s${pag.slice(4)}`;
        const response = await Axios.get<CourseInfos>(`${route}`);
        setCourses(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
        setLoading(false);
        addToast({
          type: 'error',
          title: 'Erro ao acessar novas páginas',
          description: 'Tente novamente mais tarde',
        });
      }
    }
  }

  async function handleSearchCourse(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await api.get<CourseInfos>(
        `courses/?search=${searchCourse}&format=json`,
      );
      setCourses(response.data);
      setQtdResults(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Falha na pesquisa',
        description: 'Tente novamente mais tarde',
      });
    }
    setSearchCourse('');
  }

  return (
    <>
      <Header transparent={false} />
      <Grid container justify="center">
        <Grid container item md={2} justify="center">
          <Adsense disposition="vertical" />
        </Grid>

        <Grid item md={8} xs={12}>
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

          {loading && <Loading />}

          {qtdResults && !loading && (
            <QtdSearch>
              <div className="text-container">
                <p>Foram encontrados {courses.count} resultados</p>
              </div>
            </QtdSearch>
          )}
          {!loading && (
            <Courses>
              {courses.results.map(course => (
                <ListCard 
                  window={WindowCheck}
                  id={course.code}
                  shift={course.shift}
                  name={course.name}
                  num_semester={course.num_semester}
                  type="C"
                />
              ))}

              {!loading && (
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
              )}
            </Courses>
          )}
        </Grid>

        <Grid container item md={2} justify="center">
          <Adsense disposition="vertical" />
        </Grid>
      </Grid>
    </>
  );
};

export default ListCourses;
