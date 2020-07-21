import React, { useState, useCallback } from 'react';

import Header from '../../components/Header';

import {
  Container,
  TabContainer,
  TabText,
  PeriodContainer,
  PeriodText,
  Flux,
  ContentContainer,
  Content,
  ContentText,
  ContentCredits,
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

  const handleTogglePeriod = useCallback((period: number) => {
    setTogglePeriod(!togglePeriod);
    if (togglePeriod) {
      setShowPeriod(period);
    }
  }, []);

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
  ];

  return (
    <>
      <Header />
      {/* <Container>
        <TabContainer>
          <Link to="/course/info">
            <TabText>Informações Gerais</TabText>
          </Link>
          <Link to="/course/graph">
            <TabText>Fluxograma</TabText>
          </Link>
          <Link to="/course/flux">
            <TabText>Fluxo</TabText>
          </Link>
        </TabContainer>
      </Container> */}

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
                    <ContentCredits>
                      {materia.creditos}
                      créditos
                    </ContentCredits>
                  </Content>
                </ContentContainer>
              ))}
            </>
          );
        })}

        {/*
        {showPeriod && (
          <ContentContainer>
            <Content>
              <ContentText>Física 1</ContentText>
              <ContentCredits>4 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Física Experimental 1</ContentText>
              <ContentCredits>2 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Cálculo 1</ContentText>
              <ContentCredits>6 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Algoritmo e Programação de Computadores</ContentText>
              <ContentCredits>6 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Introdução à Engenharia da Computação</ContentText>
              <ContentCredits>2 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Introdução à Álgebra Linear</ContentText>
              <ContentCredits>4 créditos</ContentCredits>
            </Content>
          </ContentContainer>
        )}

        <PeriodContainer onClick={handleTogglePeriod}>
          <PeriodText>Período: 1</PeriodText>
          <PeriodText>Número de créditos: 24</PeriodText>
        </PeriodContainer>

        {showPeriod && (
          <ContentContainer>
            <Content>
              <ContentText>Física 1</ContentText>
              <ContentCredits>4 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Física Experimental 1</ContentText>
              <ContentCredits>2 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Cálculo 1</ContentText>
              <ContentCredits>6 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Algoritmo e Programação de Computadores</ContentText>
              <ContentCredits>6 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Introdução à Engenharia da Computação</ContentText>
              <ContentCredits>2 créditos</ContentCredits>
            </Content>
            <Content>
              <ContentText>Introdução à Álgebra Linear</ContentText>
              <ContentCredits>4 créditos</ContentCredits>
            </Content>
          </ContentContainer>
        )}

        <PeriodContainer>
          <PeriodText>Período: 2</PeriodText>
          <PeriodText>Número de créditos: 20</PeriodText>
        </PeriodContainer>

        <ContentContainer>
          <Content>
            <ContentText>Física 1</ContentText>
            <ContentCredits>4 créditos</ContentCredits>
          </Content>
          <Content>
            <ContentText>Física Experimental 1</ContentText>
            <ContentCredits>2 créditos</ContentCredits>
          </Content>
          <Content>
            <ContentText>Cálculo 1</ContentText>
            <ContentCredits>6 créditos</ContentCredits>
          </Content>
          <Content>
            <ContentText>Algoritmo e Programação de Computadores</ContentText>
            <ContentCredits>6 créditos</ContentCredits>
          </Content>
          <Content>
            <ContentText>Introdução à Engenharia da Computação</ContentText>
            <ContentCredits>2 créditos</ContentCredits>
          </Content>
          <Content>
            <ContentText>Introdução à Álgebra Linear</ContentText>
            <ContentCredits>4 créditos</ContentCredits>
          </Content>
        </ContentContainer> */}
      </Flux>
    </>
  );
};

export default Course;
