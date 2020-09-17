import React, { useState, FormEvent, useCallback } from 'react';

import { useToast } from '../../hooks/toasts';
import { ContainerSubjects, Form } from './styles';
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
  const [searchSubject, setSearchSubject] = useState('');
  const { addToast } = useToast();

  let counter = 0;

  const handleSearchSubject = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      let filteredSubjects = materias.filter(subject =>
        subject.nome.toLowerCase().includes(searchSubject.toLowerCase()),
      );

      if (searchSubject === '') {
        filteredSubjects = materias;
      }

      setSubjects(filteredSubjects);

      setLoading(false);
      setSearchSubject('');
    },
    [searchSubject, materias],
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
      </Form>

      {subjects.map(subject => {
        counter += 1;

        return (
          <div className="subject">
            <div className="name">
              {counter} - <strong>{subject.departamento}</strong> -{' '}
              {subject.nome} - {subject.cargaHoraria}h
            </div>
            {status === 'obrigatória' && <div className="obr">obrigatória</div>}
            {status === 'optativa' && <div className="opt">optativa</div>}
          </div>
        );
      })}

      {loading && <Loading />}
    </ContainerSubjects>
  );
};

export default Listagem;
