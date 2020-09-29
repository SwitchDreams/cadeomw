import React, { useState, FormEvent, useCallback, useEffect } from 'react';

import { ContainerSubjects, Form, Pagination } from './styles';

interface ListProps {
  materias: {
    nome: string;
    cargaHoraria: number;
    departamento: string;
  }[];
  windowCheck: boolean;
  status: string;
}

const Listagem: React.FC<ListProps> = ({
  materias,
  windowCheck,
  status,
}: ListProps) => {
  const [subjects, setSubjects] = useState(materias);
  const [subjectsWithPagination, setSubjectsWithPagination] = useState(
    materias,
  );
  const [searchSubject, setSearchSubject] = useState('');
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
    (search: string) => {
      setSearchSubject(search);

      let filteredSubjects = materias.filter(subject =>
        subject.nome
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            search
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, ''),
          ),
      );

      if (search === '') {
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
    },
    [materias],
  );

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

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

      window.scrollTo(150, 150);
    },
    [page, subjects],
  );

  return (
    <ContainerSubjects window={windowCheck}>
      <h2>Disciplinas {status}s</h2>

      <Form window={windowCheck}>
        <form onSubmit={handleSubmit}>
          <input
            value={searchSubject}
            onChange={event => {
              handleSearchSubject(event.target.value);
            }}
            placeholder="Digite o nome da disciplina"
          />
        </form>
        <div className="results">
          {searchSubject !== '' && (
            <p>Resultados para &apos;{searchSubject.toLowerCase()}&apos;:</p>
          )}
          {searchSubject === '' && <p>Exibindo todos os resultados: </p>}
          <p>{subjects.length} resultados</p>
        </div>
      </Form>

      {subjects.length === 0 && <h2>Nenhuma disciplina encontrada!</h2>}

      {subjectsWithPagination &&
        subjectsWithPagination.map(subject => {
          counter += 1;

          return (
            <div key={subject.nome} className="subject">
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
              subjects[0] === subjectsWithPagination[0] ||
              subjectsWithPagination.length === 0
            }
            onClick={() => handlePagination('previous')}
          >
            Anterior
          </button>
          <button
            type="button"
            disabled={
              subjects[subjects.length - 1] ===
                subjectsWithPagination[subjectsWithPagination.length - 1] ||
              subjectsWithPagination.length === 0
            }
            onClick={() => handlePagination('next')}
          >
            Próximo
          </button>
        </Pagination>
      )}
    </ContainerSubjects>
  );
};

export default Listagem;
