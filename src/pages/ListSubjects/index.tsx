import React, { useEffect, useState, FormEvent } from 'react';
import Axios from 'axios';
import { FiChevronRight } from 'react-icons/fi';
import Downshift from 'downshift';
import { apiCourses } from '../../services/api';

import { useToast } from '../../hooks/toasts';

import { Subjects, Form, QtdSearch } from './styles';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

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
      try {
        const response = await apiCourses.get<SubjectInfos>(
          `subjects/?format=json`,
        );

        setSubjects(response.data);
        setLoading(false);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao carregar os cursos',
          description: 'Tente novamente mais tarde',
        });
      }
    };

    getSubjects();
  }, [addToast]);

  async function handlePagination(pag: string) {
    if (pag !== null) {
      setLoading(true);
      try {
        const response = await Axios.get<SubjectInfos>(`${pag}`);
        setSubjects(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
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
      const response = await apiCourses.get<SubjectInfos>(
        `subjects/?search=${searchSubject}&format=json`,
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
    setSearchSubject('');
  }

  const data: string[] = subjects.results.map(subject => {
    return subject.department;
  });

  // const data = ['CIC', 'MAT', 'ENE', 'FT', 'EPR'];

  return (
    <>
      <Header transparent={false} />

      <Form>
        <form onSubmit={handleSearchSubject}>
          <input
            value={searchSubject}
            onChange={e => setSearchSubject(e.target.value)}
            placeholder="Digite o nome do curso"
          />
          <button type="submit">Pesquisar</button>
        </form>
        <Downshift itemToString={department => department || ''}>
          {({
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            <div>
              <input
                {...getInputProps({ placeholder: 'Escolha um departamento' })}
              />
              {isOpen ? (
                <div className="downshift-dropdown">
                  {data
                    .filter(
                      item =>
                        !inputValue ||
                        item.toLowerCase().includes(inputValue.toLowerCase()),
                    )
                    .map((item: any, index: any) => (
                      <div
                        className="dropdown-item"
                        {...getItemProps({ key: item, index, item })}
                        style={{
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        }}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              ) : null}
            </div>
          )}
        </Downshift>
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
            <a key={subject.code} href={`/${subject.code}`}>
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
