import React, { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';
import { FiChevronRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import Select from 'react-dropdown-select';
import api from '../../services/api';
import { useToast } from '../../hooks/toasts';

import { Subjects, Form, QtdSearch, SelectContainer } from './styles';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import departments from './departments';

interface Results {
  code: number;
  department_name: string;
  credit: number;
  name: string;
}

interface SubjectInfos {
  results: Results[];
  next: string;
  previous: string;
  count: number;
}

const ListSubjects: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [qtdResults, setQtdResults] = useState(false);
  const [searchSubject, setSearchSubject] = useState('');
  const [searchDepartment, setSearchDepartment] = useState('');
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
        const response = await api.get<SubjectInfos>(`subjects/?format=json&has_offer=true`);

        setSubjects(response.data);
        setLoading(false);
      } catch (err) {
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
        const route = `${pag.slice(0, 4)}s${pag.slice(4)}`;
        const response = await Axios.get<SubjectInfos>(`${route}`);
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

  const handleSearchSubject = useCallback(async () => {
    setLoading(true);
    try {
      const response = await api.get<SubjectInfos>(
        `subjects/?search=${searchSubject}&department_initial=${searchDepartment}&format=json&has_offer=true`,
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
  }, [addToast, searchDepartment, searchSubject]);

  useEffect(() => {
    handleSearchSubject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <head>
        <script data-ad-client="ca-pub-9432744401324317" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </head>
      <Header transparent={false} />

      <Form window={WindowCheck}>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSearchSubject();
          }}
        >
          <input
            value={searchSubject}
            onChange={e => setSearchSubject(e.target.value)}
            placeholder="Digite o nome da disciplina"
          />
          <button type="submit">Pesquisar</button>
        </form>
      </Form>

      <SelectContainer>
        <Select
          options={departments}
          values={[departments[0]]}
          labelField="name"
          valueField="initials"
          noDataLabel="Departamento não encontrado"
          placeholder="Selecione o departamento"
          addPlaceholder="Filtre por departamento"
          searchable
          searchBy="name"
          clearable={false}
          multi={false}
          onChange={value => {
            setSearchDepartment(value[0].initials);
          }}
        />
      </SelectContainer>

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
                <p>Código: {subject.code}</p>
                <p>Departamento: {subject.department_name}</p>
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
