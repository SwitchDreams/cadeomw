import React, { useState, useCallback, useEffect } from 'react';

import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useRouteMatch } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BallotIcon from '@material-ui/icons/Ballot';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PersonIcon from '@material-ui/icons/Person';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';

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

const HandleShowSubjectCard: React.FC<ClickCards> = ({
  subject,
  status,
  credits,
}) => {
  const classes = useStylesCard();
  return (
    <>
      <Card elevation={7} className={classes.bullet}>
        <CardContent>
          <CardTitle>Matéria Selecionada</CardTitle>
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={subject || 'a definir'} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary={status || 'a definir'} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CollectionsBookmarkIcon />
              </ListItemIcon>
              <ListItemText primary={`${credits || 'a definir'} créditos`} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </>

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
  pass_percent: number;
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
    subject_name: string;
    status: string;
    credit: BigInteger;
    pass_percent: string;
  };
  easiest_subject: {
    subject_name: string;
    status: string;
    credit: BigInteger;
    pass_percent: string;
  };
}

interface ClickCards {
  subject?: string;
  status?: string;
  credits?: number | BigInteger;
}

interface SelectCard {
  subject: string;
  credits: BigInteger;
  status: string | undefined;
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

  const [slide_card, setSlideCard] = useState<Materias | null>(null);
  const [popcards, setPopCards] = useState<Materias | null>(null);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    api
      .get(`https://mw-melhorado-app.herokuapp.com/courses/1741/?format=json `)
      .then(response => {

        let newCourse = response.data;
        let statusHardest = newCourse.hardest_subject.status;
        let statusEasiest = newCourse.easiest_subject.status;

        if (statusHardest === 'OBR' || statusHardest === 'OBS') {
          statusHardest = 'obrigatória';
        } else if (statusHardest === 'OPT') {
          statusHardest = 'optativa';
        } else {
          statusHardest = 'módulo livre';
        }

        if (statusEasiest === 'OBR' || statusEasiest === 'OBS') {
          statusEasiest = 'obrigatória';
        } else if (statusEasiest === 'OPT') {
          statusEasiest = 'optativa';
        } else {
          statusEasiest = 'módulo livre';
        }

        newCourse = {
          ...newCourse,
          hardest_subject: {
            ...newCourse.hardest_subject,
            status: statusHardest,
          },
          easiest_subject: {
            ...newCourse.easiest_subject,
            status: statusEasiest,
          },
        };

        setCourse(newCourse);

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
                pass_percent: subject.pass_percent,
              };
            });

            return { ...period, credits: sumCredits, subjects: newSubjects };
          },
        );

        setPeriods(periodList);

      });
  }, []);

  const handleChange = (data: Materias) => {
    setChecked(prev => !prev);
    setChecked(true);
    setSlideCard(data);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  interface HandleNameChangeInterface {
    target: HTMLInputElement;
  }

  const handlePopoverOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const HandleSetPopOver = (subject: Materias) => {
    setPopCards(subject);
    console.log(subject);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
            selected={tab.selected}
            onClick={() => handleSelectTab(tab.name)}
          >
            <TabText selected={tab.selected}>{tab.name}</TabText>
          </TabContent>
        ))}
      </Container>

      {grafo && <ContainerPage />}

      {fluxo && course && (
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
                              <ContentContainer
                                key={subject.subject_name}
                                onClick={() => handleChange(subject)}
                                onMouseEnter={() => HandleSetPopOver(subject)}
                              >
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

                                  <Popover
                                    id="mouse-over-popover"
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                      vertical: 'top',
                                      horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                  >
                                    <HandleShowSubjectCard
                                      subject={popcards?.subject_name}
                                      status={popcards?.status}
                                      credits={popcards?.credit}
                                    />
                                  </Popover>
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

            <CardSubjectsContainer>
              <SubjectCardStyle>
                <Card elevation={7} className={classesCard.bullet}>
                  <CardContent>
                    <CardTitle>Matéria Mais Difícil</CardTitle>
                    <Divider />
                    <List component="nav" aria-label="main mailbox folders">
                      <ListItem>
                        <ListItemIcon>
                          <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={course.hardest_subject.subject_name}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Porcentagem de aprovação: ${
                            course.hardest_subject.pass_percent * 100
                          }%`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText primary={course.hardest_subject.status} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CollectionsBookmarkIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${course.hardest_subject.credit} créditos`}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </SubjectCardStyle>

              <SubjectCardStyle>
                <Card elevation={7} className={classesCard.bullet}>
                  <CardContent>
                    <CardTitle>Matéria Mais Fácil</CardTitle>
                    <Divider />
                    <List component="nav" aria-label="main mailbox folders">
                      <ListItem>
                        <ListItemIcon>
                          <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={course.easiest_subject.subject_name}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Porcentagem de aprovação: ${
                            course.easiest_subject.pass_percent * 100
                          }%`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText primary={course.easiest_subject.status} />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CollectionsBookmarkIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${course.easiest_subject.credit} créditos`}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </SubjectCardStyle>

              {slide_card && (
                <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                  <SubjectCardStyle>
                    <Card elevation={7} className={classesCard.bullet}>
                      <CardContent>
                        <CardTitle>Matéria Selecionada</CardTitle>
                        <Divider />
                        <List component="nav" aria-label="main mailbox folders">
                          <ListItem>
                            <ListItemIcon>
                              <AssessmentIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={slide_card.subject_name || 'a definir'}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <AssessmentIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={slide_card.status || 'a definir'}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <CollectionsBookmarkIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={`${
                                slide_card.credit || 'a definir'
                              } créditos`}
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <AssessmentIcon />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                `Porcentagem de aprovação: ${
                                  slide_card.pass_percent * 100
                                }%` || 'a definir'
                              }
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </SubjectCardStyle>
                </Slide>
              )}
            </CardSubjectsContainer>
          </CardFluxContainer>
        </>
      )}
    </>
  );
};

export default Course;
