import React, { useState, useCallback } from 'react';

import Header from '../../components/Header';

import {
  PeriodContainer,
  PeriodText,
  Flux,
  ContentContainer,
  Content,
  ContentText,
  ContentCredits,
  ContentCreditsContainer,
} from './styles';

/*
  Página do curso - Bruna e Japa
*/

interface Materias {
  name: string;
  creditos: number;
}

interface Period {
  id: number;
  creditos: number;
  materias: Materias[];
}

const Course: React.FC = () => {
  const [showPeriod, setShowPeriod] = useState(0);
  const [togglePeriod, setTogglePeriod] = useState(false);

  const handleTogglePeriod = useCallback(
    (period: number) => {
      if (togglePeriod === true) {
        if (showPeriod !== period) {
          setShowPeriod(period);
        } else {
          setTogglePeriod(!togglePeriod);
          setShowPeriod(0);
        }
        return;
      }

      setTogglePeriod(true);
      setShowPeriod(period);
    },
    [togglePeriod, showPeriod],
  );

  const periods: Period[] = [
    {
      id: 1,
      creditos: 24,
      materias: [
        {
          name: 'Física 1',
          creditos: 4,
        },
        {
          name: 'Cálculo 1',
          creditos: 6,
        },
        {
          name: 'Física Experimental 1',
          creditos: 2,
        },
        {
          name: 'Algoritmo e Programação de Computadores',
          creditos: 6,
        },
        {
          name: 'Introdução à Engenharia da Computação',
          creditos: 2,
        },
        {
          name: 'Introdução à Álgebra Linear',
          creditos: 4,
        },
      ],
    },
    {
      id: 2,
      creditos: 20,
      materias: [
        {
          name: 'Física 1',
          creditos: 4,
        },
        {
          name: 'Cálculo 1',
          creditos: 6,
        },
        {
          name: 'Física Experimental 1',
          creditos: 2,
        },
        {
          name: 'Algoritmo e Programação de Computadores',
          creditos: 6,
        },
        {
          name: 'Introdução à Engenharia da Computação',
          creditos: 2,
        },
        {
          name: 'Introdução à Álgebra Linear',
          creditos: 4,
        },
      ],
    },
    {
      id: 3,
      creditos: 28,
      materias: [
        {
          name: 'Física 1',
          creditos: 4,
        },
        {
          name: 'Cálculo 1',
          creditos: 6,
        },
        {
          name: 'Física Experimental 1',
          creditos: 2,
        },
        {
          name: 'Algoritmo e Programação de Computadores',
          creditos: 6,
        },
        {
          name: 'Introdução à Engenharia da Computação',
          creditos: 2,
        },
        {
          name: 'Introdução à Álgebra Linear',
          creditos: 4,
        },
      ],
    },
  ];

  return (
    <>
      <Header />

      <Flux>
        {periods.map(period => {
          let materias: Materias[] = [];

          if (showPeriod === period.id) {
            materias = period.materias;
          }

          return (
            <>
              <PeriodContainer onClick={() => handleTogglePeriod(period.id)}>
                <PeriodText>Período:</PeriodText>
                <PeriodText>{period.id}</PeriodText>
                <PeriodText>Número de créditos:</PeriodText>
                <PeriodText>{period.creditos}</PeriodText>
              </PeriodContainer>

              {materias.map(materia => (
                <ContentContainer>
                  <Content>
                    <ContentText>{materia.name}</ContentText>
                    <ContentCreditsContainer>
                      <ContentCredits>{materia.creditos}</ContentCredits>
                      <ContentCredits>créditos</ContentCredits>
                    </ContentCreditsContainer>
                  </Content>
                </ContentContainer>
              ))}
            </>
          );
        })}
      </Flux>
    </>
  );
};

export default Course;
