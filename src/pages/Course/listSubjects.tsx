import React, { useState, FormEvent, useCallback, useEffect } from 'react';

import { ContainerSubjects, Form, Pagination, Subject } from './styles';

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
      // Função irá filtrar (ignorando acentos, em lowercase) a lista completa
      // de matérias (parâmetro do componente - materias) e setar o novo conjunto
      // de dados (filteredSubjects - no estado setSubjects) que será usado para
      // renderizar a página, ou seja, a página renderizada conterá apenas
      // aquelas matérias que possuem a string 'search' contidas em si.

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

      // Caso o valor de search esteja vazio (início de execução ou apagado
      // pelo usuário), o conjunto de dados é setado para os dados completos

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

  // Esta função é necessária apenas para que quando o usuário dê Enter
  // não aconteça efetivamente nada, pois a pesquisa da matéria é dinâmica
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
            <Subject key={subject.nome} window={windowCheck}>
              <div className="name">
                {counter} - <strong>{subject.departamento}</strong> -{' '}
                {subject.nome} - {subject.cargaHoraria}h
              </div>
              <div className={status.slice(0, 3)}>{status}</div>
            </Subject>
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
