import React, { useState, useCallback } from 'react';

import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Period, Materias } from './index';

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

interface FluxProps {
  periods: Period[] | null;
}

const Flux: React.FC<FluxProps> = ({ periods }: FluxProps) => {
  const classes = useStyles();

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

  return (
    <FluxContainer>
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
                      onClick={() => handleTogglePeriod(period.semester)}
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
                          <ContentText>{subject.subject_name}</ContentText>
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
    </FluxContainer>
  );
};

export default Flux;
