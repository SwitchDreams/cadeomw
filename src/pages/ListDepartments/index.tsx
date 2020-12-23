import React, { useEffect, useState, FormEvent } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import { useToast } from '../../hooks/toasts';

import { Courses, Form, QtdSearch } from '../../pages/ListCourses/styles';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

type Inputs = {
  course: string;
};

interface Results {
  id: number;
  name: string;
  initials: string; 
}

interface DepartmentInfos {
  results: Results[];
  next: string;
  previous: string;
  count: number;
}

const ListDepartments: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [qtdResults, setQtdResults] = useState(false);
  const [searchDepartment, setSearchDepartment] = useState('');
  const [departments, setDepartments] = useState<DepartmentInfos>({
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
    const getDepartments = async () => {
      try {
        const response = await Axios.get<DepartmentInfos>('https://back.cadeomw.com.br/department/?format=json');
        console.log(response);
        setDepartments(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        addToast({
          type: 'error',
          title: 'Erro ao carregar os departamentos',
          description: 'Tente novamente mais tarde',
        });
        history.push('/');
      }
    };

    getDepartments();
  }, [addToast, history]);

  async function handlePagination(pag: string) {
    if (pag !== null) {
      setLoading(true);
      try {
        var route = pag.slice(0, 4) + "s" + pag.slice(4);
        console.log(route)
        const response = await Axios.get<DepartmentInfos>(`${route}`);
        setDepartments(response.data);
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

  async function handleSearchDepartment(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.get<DepartmentInfos>(
        `https://back.cadeomw.com.br/department/?search=${searchDepartment}&format=json`,
      );
      setDepartments(response.data);
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
    setSearchDepartment('');
  }

  return (
    <>
      <Header transparent={false} />

      <Form>
        <form onSubmit={handleSearchDepartment}>
          <input
            value={searchDepartment}
            onChange={e => setSearchDepartment(e.target.value)}
            placeholder="Digite o nome do departamento ou sigla"
          />
          <button type="submit">Pesquisar</button>
        </form>
      </Form>

      {loading && <Loading />}

      {qtdResults && !loading && (
        <QtdSearch>
          <div className="text-container">
            <p>Foram encontrados {departments.count} resultados</p>
          </div>
        </QtdSearch>
      )}
      {!loading && (
        <Courses window={WindowCheck}>
          {departments.results.map(department => (
            <a key={department.id} href={`department/${department.id}`}>
              <div>
                <strong>
                  {department.name.charAt(0).toUpperCase() +
                    department.name.slice(1).toLowerCase()}
                </strong>
                <p>
                  Sigla:
                  {' ' + department.initials}
                </p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}

          {!loading && (
            <div className="actions">
              <button
                type="button"
                disabled={departments.previous == null}
                onClick={() => handlePagination(departments.previous)}
              >
                Anterior
              </button>
              <button
                type="button"
                disabled={departments.next == null}
                onClick={() => handlePagination(departments.next)}
              >
                Próximo
              </button>
            </div>
          )}
        </Courses>
      )}
    </>
  );
};

export default ListDepartments;
