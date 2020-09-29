import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Book } from '@material-ui/icons';

import Fade from '@material-ui/core/Fade';

import { Subject } from './index';

import {
  PrereqContainer,
  NoPrereq,
  FeatureCardContainer,
  CardTitleContainer,
  FeaturesContainer,
} from './styles';

/*
  Página de Disciplina - Bruna
*/

interface PrereqProps {
  subject: Subject;
  window: boolean;
}

const Equivalence: React.FC<PrereqProps> = ({
  subject,
  window,
}: PrereqProps) => {
  const [subjectFiltered, setSubjectFiltered] = useState<Subject | null>(null);

  const history = useHistory();

  const handleNewSubject = useCallback(
    (subject_code: number) => {
      history.push(`/subjects/${subject_code}/?format=json`);
    },
    [history],
  );

  useEffect(() => {
    const newList = subject.prerequisites.filter(prereq => {
      return prereq.length !== 0;
    });

    setSubjectFiltered({ ...subject, prerequisites: newList });
  }, [subject]);

  return (
    <FeaturesContainer window={window}>
      <div className="container">
        <h4>Pré-requisitos:</h4>

        {subject.prerequisites.length === 0 && (
          <NoPrereq window={window}>
            Disciplina não possui pré-requisitos ou não estão disponíveis em
            nosso banco de dados.
          </NoPrereq>
        )}

        {subjectFiltered &&
          subjectFiltered.prerequisites.map(prerequisite => (
            <div key={prerequisite[0].code}>
              <Fade in timeout={{ enter: 2000 }}>
                <PrereqContainer window={window}>
                  {prerequisite.map(subjectPrereq => (
                    <FeatureCardContainer
                      key={subjectPrereq.subject_name}
                      window={window}
                      onClick={() => handleNewSubject(subjectPrereq.code)}
                    >
                      <Book style={{ color: '#7c4fe0' }} />
                      <CardTitleContainer window={window}>
                        <h3>{subjectPrereq.subject_name}</h3>
                        <p>{`${subjectPrereq.credit} créditos`}</p>
                      </CardTitleContainer>
                    </FeatureCardContainer>
                  ))}
                </PrereqContainer>
              </Fade>
            </div>
          ))}
      </div>
    </FeaturesContainer>
  );
};

export default Equivalence;
