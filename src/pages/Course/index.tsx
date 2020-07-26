import React, { useState, useCallback, useEffect } from 'react';

import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useRouteMatch } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonIcon from '@material-ui/icons/Person';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import api from '../../services/api';

import {
  useStyles,
  useStylesCard,
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
  CardFluxContainer,
  InfoContainerCard,
  SubjectCardStyle,
} from './styles';

import Header from '../../components/Header';

/*
  Página do curso - Bruna e Japa
*/

const InformationCard: React.FC = () => {
  const classes = useStylesCard();
  return (
    <Card elevation={7} className={classes.bullet}>
      <CardContent>
        <h3>Informações gerais</h3>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
                <CollectionsBookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Créditos: 256" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Permanencia minima: 8 semestres" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Permanencia máxima: 18 semestres " />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

const EstatisticsCard: React.FC = () => {
  const classes = useStylesCard();
  return (
    <Card elevation={7} className={classes.bullet}>
      <CardContent>
        <h3>Estatísticas</h3>
        <Divider />
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="vazão: 100%" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary="Permanencia média: 10 anos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Quantidade de alunos ativos: 32 " />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Quantidade média de créditos/periodo: 24 " />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

/*interface SubjectCardProps {
  title: string,
  subject_name: string,
  approval_rate?: string,
  status?: string,
  credits?: string,
}*/

export interface Props {
  title: string,
  subject_name: string,
  pass_percent?: string,
  status?: string,
  credits?: string,
}

function SubjectCard ({ title, subject_name, pass_percent, status, credits }: Props){
  const classes = useStylesCard();
  if(title != null && subject_name != null && pass_percent != null && status != null && credits != null){
    return (
      <Card elevation={7} className={classes.bullet}>
        <CardContent>
          <h3>{title}</h3>
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={subject_name} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary={pass_percent} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={status} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CollectionsBookmarkIcon />
              </ListItemIcon>
              <ListItemText primary={credits} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }

};

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

interface Course {
  name: string;
  flow: Period[];
  hardest_subject: {
    subject_name: string,
    status: string,
    credit: BigInteger,
    pass_percent: string,
  },
  easiest_subject: {
    subject_name: string,
    status: string,
    credit: BigInteger,
    pass_percent: string,
  },
}

interface URLParams {
  course: string;
}

const Course: React.FC = () => {
  const tabsInit = [
    {
      name: 'Fluxo',
      selected: true,
    },
    {
      name: 'Grafo',
      selected: false,
    },
  ];
  const { params } = useRouteMatch<URLParams>();

  const [course, setCourse] = useState<Course | null>(null);

  const [showPeriod, setShowPeriod] = useState(0);
  const [togglePeriod, setTogglePeriod] = useState(false);

  const [tabs, setTabs] = useState<Tab[]>(tabsInit);
  const [fluxo, setFluxo] = useState(true);
  const [grafo, setGrafo] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    api.get(`https://mw-melhorado-app.herokuapp.com/courses/1741/?format=json `).then(response => {
      console.log(response.data);
      setCourse(response.data);
    });
  }, []);

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
    {
      id: 4,
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
    {
      id: 5,
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
    {
      id: 6,
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
    {
      id: 7,
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
    {
      id: 8,
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
    {
      id: 9,
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
    {
      id: 10,
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

      if (name === 'Fluxo') {
        setFluxo(true);
        setGrafo(false);
      } else {
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

      {grafo && <ContainerPage />}

      {fluxo && (
        <CardFluxContainer>
          <InfoContainerCard>
            <InformationCard />
            <EstatisticsCard />
          </InfoContainerCard>

          {course && 
            <SubjectCardStyle>
              {<SubjectCard
                title="Materia mais dificil"
                subject_name={course.hardest_subject.subject_name}
                pass_percent={course.hardest_subject.pass_percent}
                status={course.hardest_subject.status}
                credits={course.hardest_subject.credits}
              />}
              <SubjectCard
                title="Materia mais dificil"
                subject_name={course.easiest_subject.subject_name}
                pass_percent={course.easiest_subject.pass_percent}
                status={course.easiest_subject.status}
                credits={course.easiest_subject.credits}
              />
            </SubjectCardStyle>
          }

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
        </CardFluxContainer>
      )}
    </>
  );
};

export default Course;
