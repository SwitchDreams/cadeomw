import React, { useState, FormEvent, useCallback, useEffect } from 'react';

import { ContainerSubjects, Form, Pagination } from './styles';
import Loading from '../../components/Loading';

interface ListProps {
  materias: {
    nome: string;
    cargaHoraria: number;
    departamento: string;
  }[];
  window: boolean;
  status: string;
}

const Listagem: React.FC<ListProps> = ({
  materias,
  window,
  status,
}: ListProps) => {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState(materias);
  const [subjectsWithPagination, setSubjectsWithPagination] = useState(
    materias,
  );
  const [searchSubject, setSearchSubject] = useState('');
  const [oldSearchedSubject, setOldSearchedSubject] = useState(searchSubject);
  const [page, setPage] = useState(0);

  let counter = page * 20;

  useEffect(() => {
    const newSubjectsWithPagination = materias.slice(
      0,
      materias.length <= 20 ? materias.length : 20,
    );

    setSubjectsWithPagination(newSubjectsWithPagination);
  }, [materias]);

  const handleSearchSubject = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      let filteredSubjects = materias.filter(subject =>
        subject.nome
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            searchSubject
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, ''),
          ),
      );

      setOldSearchedSubject(searchSubject);

      if (searchSubject === '') {
        filteredSubjects = materias;
      }

      setSubjects(filteredSubjects);
      setSubjectsWithPagination(
        filteredSubjects.slice(
          0,
          filteredSubjects.length <= 20 ? filteredSubjects.length : 20,
        ),
      );
      setPage(0);

      setLoading(false);
      setSearchSubject('');
    },
    [searchSubject, materias],
  );

  const handlePagination = useCallback(
    (pagination: string) => {
      let nextPage = 0;

      if (pagination === 'previous') {
        nextPage = page - 1;
      } else if (pagination === 'next') {
        nextPage = page + 1;
      }

      setPage(nextPage);

      setSubjectsWithPagination(
        subjects.slice(
          nextPage * 20,
          subjects.length <= nextPage * 20 + 20
            ? subjects.length
            : nextPage * 20 + 20,
        ),
      );
    },
    [page, subjects],
  );

  return (
    <ContainerSubjects window={window}>
      <h2>Disciplinas {status}s</h2>

      <Form window={window}>
        <form onSubmit={handleSearchSubject}>
          <input
            value={searchSubject}
            onChange={e => setSearchSubject(e.target.value)}
            placeholder="Digite o nome da disciplina"
          />
          <button type="submit">Pesquisar</button>
        </form>
        <div className="results">
          {oldSearchedSubject !== '' && (
            <p>
              resultados para &apos;{oldSearchedSubject.toLowerCase()}&apos;
            </p>
          )}
          {oldSearchedSubject === '' && <p>Exibindo todos os resultados</p>}
          <p>{subjects.length} resultados</p>
        </div>
      </Form>

      {subjects.length === 0 && <h2>Nenhuma disciplina encontrada!</h2>}

      {subjectsWithPagination &&
        subjectsWithPagination.map(subject => {
          counter += 1;

          return (
            <div className="subject">
              <div className="name">
                {counter} - <strong>{subject.departamento}</strong> -{' '}
                {subject.nome} - {subject.cargaHoraria}h
              </div>
              {status === 'obrigatória' && (
                <div className="obr">obrigatória</div>
              )}
              {status === 'optativa' && <div className="opt">optativa</div>}
            </div>
          );
        })}

      {subjects && (
        <Pagination>
          <button
            type="button"
            disabled={
              materias[0] === subjectsWithPagination[0] ||
              subjectsWithPagination.length === 0
            }
            onClick={() => handlePagination('previous')}
          >
            Anterior
          </button>
          <button
            type="button"
            disabled={
              materias[materias.length - 1] ===
                subjectsWithPagination[subjectsWithPagination.length - 1] ||
              subjectsWithPagination.length === 0
            }
            onClick={() => handlePagination('next')}
          >
            Próximo
          </button>
        </Pagination>
      )}

      {loading && <Loading />}
    </ContainerSubjects>
  );
};

export default Listagem;
