import React, { useEffect, useState, FormEvent } from 'react';
import Axios from 'axios';
import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { useToast } from '../../hooks/toasts';

import { Subjects, Form, QtdSearch, Select } from './styles';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import departments from './departments';

/*
  Página de listagem de cursos - Waliff
*/

type Inputs = {
  subject: string;
};

interface Results {
  code: number;
  department: string;
  credit: number;
  name: string;
}

interface SubjectInfos {
  results: Results[];
  next: string;
  previous: string;
  count: number;
}

interface Book {
  name: string;
}

const ListSubjects: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [qtdResults, setQtdResults] = useState(false);
  const [searchSubject, setSearchSubject] = useState('');
  const [subjects, setSubjects] = useState<SubjectInfos>({
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
    const getSubjects = async () => {
      setLoading(true);
      try {
        const response = await api.get<SubjectInfos>(`subjects/?format=json`);

        setSubjects(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        addToast({
          type: 'error',
          title: 'Erro ao carregar as disciplinas',
          description: 'Tente novamente mais tarde',
        });
        history.push('/');
      }
    };

    getSubjects();
  }, [addToast, history]);

  async function handlePagination(pag: string) {
    if (pag !== null) {
      setLoading(true);
      try {
        const response = await Axios.get<SubjectInfos>(`${pag}`);
        setSubjects(response.data);
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

  async function handleSearchSubject(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await api.get<SubjectInfos>(
        `subjects/?search=${searchSubject}&format=json`,
      );
      setSubjects(response.data);
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
    setSearchSubject('');
  }

  async function handleFilterSubject(e: any) {
    setLoading(true);
    try {
      const response = await api.get<SubjectInfos>(
        `subjects/?search=${e.target.value}&format=json&department_only=true`,
      );
      setSubjects(response.data);
      setQtdResults(true);
      setLoading(false);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha na pesquisa',
        description: 'Tente novamente mais tarde',
      });
    }
  }

  return (
    <>
      <Header transparent={false} />

      <Form window={WindowCheck}>
        <form onSubmit={handleSearchSubject}>
          <input
            value={searchSubject}
            onChange={e => setSearchSubject(e.target.value)}
            placeholder="Digite o nome do curso"
          />
          <button type="submit">Pesquisar</button>
        </form>

        <Select>
          <p>Departamentos:</p>
          <select onChange={handleFilterSubject}>
            <option selected value="" />
            {departments.map(department => {
              return (
                <option value={department.initials}>{department.name}</option>
              );
            })}
          </select>
        </Select>
      </Form>

      {loading && <Loading />}

      {qtdResults && !loading && (
        <QtdSearch>
          <div className="text-container">
            <p>Foram encontrados {subjects.count} resultados</p>
          </div>
        </QtdSearch>
      )}
      {!loading && (
        <Subjects window={WindowCheck}>
          {subjects.results.map(subject => (
            <a key={subject.code} href={`subjects/${subject.code}`}>
              <div>
                <strong>
                  {subject.name.charAt(0).toUpperCase() +
                    subject.name.slice(1).toLowerCase()}
                </strong>
                <p>
                  Código:
                  {subject.code}
                </p>
                <p>
                  Departamento:
                  {subject.department}
                </p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}

          {!loading && (
            <div className="actions">
              <button
                type="button"
                disabled={subjects.previous == null}
                onClick={() => handlePagination(subjects.previous)}
              >
                Anterior
              </button>
              <button
                type="button"
                disabled={subjects.next == null}
                onClick={() => handlePagination(subjects.next)}
              >
                Próximo
              </button>
            </div>
          )}
        </Subjects>
      )}
    </>
  );
};

export default ListSubjects;
