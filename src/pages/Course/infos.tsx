import React, { useState, useEffect } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {
  InfosGeraisContainer,
  InfosGerais,
  InfoText,
  InfoSubText,
  CoordenadorText,
} from './styles';

interface InfoProps {
  details: {
    workload: {
      total: number;
      optional: number;
      mandatory: number;
    };
    num_semester: number;
    academic_degree: string;
    shift: string;
    coordinator_name: string;
  };
}

const Infos: React.FC<InfoProps> = ({ details }: InfoProps) => {
  const [windowCheck, setWindowCheck] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    } else {
      setWindowCheck(false);
    }
  });

  return (
    <InfosGeraisContainer>
      <CoordenadorText>
        <strong>Coordenador do Curso:</strong> {details.coordinator_name}
      </CoordenadorText>
      <InfosGerais window={windowCheck}>
        <InfoText>
          <ChevronRightIcon />
          Carga Horária:
          <InfoSubText window={windowCheck}>
            Total Mínima: {details.workload.total} <br />
            Optativa Mínima: {details.workload.optional}
          </InfoSubText>
        </InfoText>
        <InfoText>
          <ChevronRightIcon />
          Carga Horária Obrigatória:
          <InfoSubText window={windowCheck}>
            Total: {details.workload.mandatory}
          </InfoSubText>
        </InfoText>
        <InfoText>
          <ChevronRightIcon />
          Período (em semestres):
          <InfoSubText window={windowCheck}>{details.num_semester}</InfoSubText>
        </InfoText>
        <InfoText>
          <ChevronRightIcon />
          Turno:
          <InfoSubText window={windowCheck}>
            {details.shift === 'N' ? 'Noturno' : 'Diurno'}
          </InfoSubText>
        </InfoText>
      </InfosGerais>
    </InfosGeraisContainer>
  );
};

export default Infos;
