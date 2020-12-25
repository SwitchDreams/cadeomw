import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ErrorIcon from '@material-ui/icons/Error';

import {
  useStyles,
  FluxContainer,
  PeriodContainer,
  PeriodText,
  ContentContainer,
  Content,
  ContentText,
  ContentCreditsContainer,
  ContentStatus,
  ContentCredits,
  Credit,
  CreditText,
} from './styles';
import { Period, Materias } from './index';

interface FluxProps {
  periods: Period[] | null;
  window: boolean;
}

interface TootlipInfo {
  subject_name: string;
  credit: number;
  status: string | undefined;
}

const TootlipText: React.FC<TootlipInfo> = ({
  subject_name,
  credit,
  status,
}) => {
  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemIcon>
          <ArrowForwardIosIcon />
        </ListItemIcon>
        <ListItemText primary={subject_name} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CollectionsBookmarkIcon />
        </ListItemIcon>
        <ListItemText primary={`Creditos: ${credit}`} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ErrorIcon />
        </ListItemIcon>
        <ListItemText primary={`Status: ${status}`} />
      </ListItem>
    </List>
  );
};

const Flux: React.FC<FluxProps> = ({ periods, window }: FluxProps) => {
  const classes = useStyles();

  const history = useHistory();

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

  const handleGoToSubjectPage = useCallback(
    (code: number) => {
      history.push(`/subjects/${code}/?format=json`);
    },
    [history],
  );

  return (
    <FluxContainer window={window}>
      <strong>
        Clique no período para ver as informações daquele período, e na
        disciplina para ver seus dados completos.
      </strong>
      {periods &&
        periods.map(period => {
          let subjects: Materias[] = [];

          if (showPeriod === period.semester) {
            subjects = period.subjects;
          }

          return (
            <div key={period.semester}>
              <div className={classes.root} key={period.semester}>
                <FormControlLabel
                  style={{ width: '100%' }}
                  control={
                    <PeriodContainer
                      onClick={() => handleTogglePeriod(period.semester)}
                    >
                      <PeriodText window={window}>Período:</PeriodText>
                      <PeriodText window={window}>{period.semester}</PeriodText>
                    </PeriodContainer>
                  }
                  label=" "
                />
                <div className={classes.container}>
                  <Collapse in={showPeriod === period.semester}>
                    {subjects.map(subject => (
                      <ContentContainer
                        onClick={() => handleGoToSubjectPage(subject.code)}
                        key={subject.code}
                        window={window}
                      >
                        <Tooltip
                          title={
                            <TootlipText
                              subject_name={subject.subject_name}
                              credit={subject.credit}
                              status={subject.status}
                            />
                          }
                          arrow
                        >
                          <Content>
                            <ContentText window={window}>
                              {subject.subject_name}
                            </ContentText>
                            <ContentCreditsContainer window={window}>
                              <ContentStatus
                                status={subject.status === 'obrigatória'}
                              >
                                {subject.status}
                              </ContentStatus>
                              <ContentCredits>
                                <Credit>{subject.credit}</Credit>
                                <CreditText>horas</CreditText>
                              </ContentCredits>
                            </ContentCreditsContainer>
                          </Content>
                        </Tooltip>
                      </ContentContainer>
                    ))}
                  </Collapse>
                </div>
              </div>
            </div>
          );
        })}
    </FluxContainer>
  );
};

export default Flux;
