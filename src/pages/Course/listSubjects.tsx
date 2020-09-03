import React, { useState, useCallback, useEffect } from 'react';

import {
  ContainerSubjects,
  Content,
  ContentText,
  ContentCreditsContainer,
  ContentStatus,
  Credit,
  ContentCredits,
  CreditText,
} from './styles';

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
  let counter = 0;
  return (
    <ContainerSubjects window={window}>
      <h2>Disciplinas {status}s</h2>
      {materias.map(subject => {
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
    </ContainerSubjects>
  );
};

export default Listagem;
