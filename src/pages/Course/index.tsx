import React, { useState, useCallback } from 'react';

import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Header from '../../components/Header';

import {
  useStyles,
  Container,
  TabContent,
  TabText,
  ContainerPage,
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

interface Tab {
  selected: boolean;
  name: string;
}

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
  const tabsInit = [
    {
      name: 'Informações Gerais',
      selected: false,
    },
    {
      name: 'Fluxo',
      selected: true,
    },
    {
      name: 'Grafo',
      selected: false,
    },
  ];

  const [showPeriod, setShowPeriod] = useState(0);
  const [togglePeriod, setTogglePeriod] = useState(false);

  const [tabs, setTabs] = useState<Tab[]>(tabsInit);
  const [info, setInfo] = useState(false);
  const [fluxo, setFluxo] = useState(true);
  const [grafo, setGrafo] = useState(false);

  const classes = useStyles();

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

  const handleSelectTab = useCallback(
    (name: string) => {
      const newTab = tabs.map(tab =>
        tab.name === name
          ? { name: tab.name, selected: true }
          : { name: tab.name, selected: false },
      );

      setTabs(newTab);

      if (name === 'Informações Gerais') {
        setInfo(true);
        setFluxo(false);
        setGrafo(false);
      } else if (name === 'Fluxo') {
        setInfo(false);
        setFluxo(true);
        setGrafo(false);
      } else {
        setInfo(false);
        setFluxo(false);
        setGrafo(true);
      }
    },
    [tabs],
  );

  return (
    <>
      <Header />

      <Container>

        {tabs.map(tab => (
          <TabContent
            selected={tab.selected}
            onClick={() => handleSelectTab(tab.name)}
          >
            <TabText selected={tab.selected}>{tab.name}</TabText>
          </TabContent>
        ))}

      </Container>

      {info && <ContainerPage />}
      {grafo && <ContainerPage />}

      {fluxo && (
        <Flux>
          {periods.map(period => {
            let materias: Materias[] = [];

            if (showPeriod === period.id) {
              materias = period.materias;
            }

            return (
              <>
                <div className={classes.root}>
                  <FormControlLabel
                    style={{ width: 850 }}
                    control={
                      <PeriodContainer
                        onClick={() => handleTogglePeriod(period.id)}
                      >
                        <PeriodText>Período:</PeriodText>
                        <PeriodText>{period.id}</PeriodText>
                        <PeriodText>Número de créditos:</PeriodText>
                        <PeriodText>{period.creditos}</PeriodText>
                      </PeriodContainer>
                    }
                    label=" "
                  />
                  <div className={classes.container}>
                    <Collapse in={showPeriod === period.id}>
                      {materias.map(materia => (
                        <ContentContainer>
                          <Content>
                            <ContentText>{materia.name}</ContentText>
                            <ContentCreditsContainer>
                              <ContentCredits>
                                {materia.creditos}
                              </ContentCredits>
                              <ContentCredits>créditos</ContentCredits>
                            </ContentCreditsContainer>
                          </Content>
                        </ContentContainer>
                      ))}
                    </Collapse>
                  </div>
                </div>
              </>
            );
          })}
        </Flux>
      )}
    </>
  );
};

export default Course;
