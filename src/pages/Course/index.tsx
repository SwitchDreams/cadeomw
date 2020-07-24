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
import List from '@material-ui/core/List';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import api from '../../services/api';

import {
  ContentStatus,
  CourseNameContainer,
  CourseName,
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
  Credit,
  CreditText,
  InfoContainerCard,
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

interface Tab {
  selected: boolean;
  name: string;
}

interface Materias {
  subject_name: string;
  credit: number;
  status: string | undefined;
}

interface Period {
  semester: number;
  credits: number | null;
  subjects: Materias[];
}

interface Course {
  name: string;
  flow: Period[];
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
  // const { params } = useRouteMatch<URLParams>();

  const [course, setCourse] = useState<Course | null>(null);
  const [periods, setPeriods] = useState<Period[] | null>(null);

  const [showPeriod, setShowPeriod] = useState(0);
  const [togglePeriod, setTogglePeriod] = useState(false);

  const [tabs, setTabs] = useState<Tab[]>(tabsInit);
  const [fluxo, setFluxo] = useState(true);
  const [grafo, setGrafo] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    api
      .get(`https://mw-melhorado-app.herokuapp.com/courses/1741?format=json`)
      .then(response => {
        setCourse(response.data);

        const periodList = response.data.flow.map(
          (period: Period): Period => {
            let sumCredits = 0;

            const newSubjects = period.subjects.map((subject: Materias) => {
              sumCredits += subject.credit;

              const newSubjectName =
                subject.subject_name.charAt(0).toUpperCase() +
                subject.subject_name.slice(1).toLowerCase();

              let newStatus;

              if (subject.status === 'OBR' || subject.status === 'OBS') {
                newStatus = 'obrigatória';
              } else if (subject.status === 'OPT') {
                newStatus = 'optativa';
              } else if (subject.status === 'ML') {
                newStatus = 'módulo livre';
              }

              return {
                credit: subject.credit,
                subject_name: newSubjectName,
                status: newStatus,
              };
            });

            console.log(newSubjects);

            return { ...period, credits: sumCredits, subjects: newSubjects };
          },
        );

        setPeriods(periodList);
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
            key={tab.name}
            selected={tab.selected}
            onClick={() => handleSelectTab(tab.name)}
          >
            <TabText selected={tab.selected}>{tab.name}</TabText>
          </TabContent>
        ))}
      </Container>

      {grafo && <ContainerPage />}

      {fluxo && (
        <>
          <CourseNameContainer>
            <CourseName>{course?.name}</CourseName>
          </CourseNameContainer>

          <CardFluxContainer>
            <InfoContainerCard>
              <InformationCard />
              <EstatisticsCard />
            </InfoContainerCard>

            <Flux>
              {periods &&
                periods.map(period => {
                  let subjects: Materias[] = [];

                  if (showPeriod === period.semester) {
                    subjects = period.subjects;
                  }

                  return (
                    <>
                      <div className={classes.root} key={period.semester}>
                        <FormControlLabel
                          style={{ width: 850 }}
                          control={
                            <PeriodContainer
                              onClick={() =>
                                handleTogglePeriod(period.semester)
                              }
                            >
                              <PeriodText>Período:</PeriodText>
                              <PeriodText>{period.semester}</PeriodText>
                              <PeriodText>Número de créditos:</PeriodText>
                              <PeriodText>{period.credits}</PeriodText>
                            </PeriodContainer>
                          }
                          label=" "
                        />
                        <div className={classes.container}>
                          <Collapse in={showPeriod === period.semester}>
                            {subjects.map(subject => (
                              <ContentContainer key={subject.subject_name}>
                                <Content>
                                  <ContentText>
                                    {subject.subject_name}
                                  </ContentText>
                                  <ContentCreditsContainer>
                                    <ContentStatus
                                      status={subject.status === 'obrigatória'}
                                    >
                                      {subject.status}
                                    </ContentStatus>
                                    <ContentCredits>
                                      <Credit>{subject.credit}</Credit>
                                      <CreditText>créditos</CreditText>
                                    </ContentCredits>
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
        </>
      )}
    </>
  );
};

export default Course;
