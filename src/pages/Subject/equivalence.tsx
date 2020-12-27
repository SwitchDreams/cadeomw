import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Zoom from '@material-ui/core/Zoom';

import { Subject } from './index';

import {
  EquivalencesContainer,
  EquivalenceBox,
  NoEquivalences,
  CardFeatureContainer,
} from './styles';

/*
  Página de Disciplina - Bruna
*/

interface EquivalenceProps {
  subject: Subject;
  window: boolean;
}

const Equivalence: React.FC<EquivalenceProps> = ({
  subject,
  window,
}: EquivalenceProps) => {
  const history = useHistory();

  const handleNewSubject = useCallback(
    (subject_code: number) => {
      history.push(`/subjects/${subject_code}/?format=json`);
    },
    [history],
  );

  let { equivalences } = subject;
  let equivalences2 = null;
  const count = subject.equivalences.length;

  if (count >= 6) {
    equivalences = subject.equivalences.slice(0, 6);
    equivalences2 = subject.equivalences.slice(7, count);
  }

  return (
    <CardFeatureContainer window={window}>
      <h4>Equivalências</h4>

      <EquivalencesContainer window={window}>
        {subject.equivalences.length === 0 && (
          <NoEquivalences window={window}>
            Disciplina não possui equivalências.
          </NoEquivalences>
        )}

        {equivalences.map(equivalence => (
          <Zoom
            in
            style={{ transitionDelay: '500ms' }}
            key={equivalence.subject.code}
          >
            <EquivalenceBox
              window={window}
              onClick={() => handleNewSubject(equivalence.destination.code)}
            >
              <h5>{equivalence.destination.subject_name}</h5>
              <p>{`${equivalence.destination.credit} horas`}</p>
              <p>{`Código: ${equivalence.destination.code}`}</p>
            </EquivalenceBox>
          </Zoom>
        ))}
      </EquivalencesContainer>
      <EquivalencesContainer window={window}>
        {equivalences2 &&
          equivalences2.map(equivalence => (
            <Zoom
              in
              style={{ transitionDelay: '500ms' }}
              key={equivalence.subject.code}
            >
              <EquivalenceBox
                window={window}
                onClick={() => handleNewSubject(equivalence.destination.code)}
              >
                <h5>{equivalence.destination.subject_name}</h5>
                <p>{`${equivalence.destination.credit} horas`}</p>
                <p>{`Código: ${equivalence.destination.code}`}</p>
              </EquivalenceBox>
            </Zoom>
          ))}
      </EquivalencesContainer>
    </CardFeatureContainer>
  );
};

export default Equivalence;
