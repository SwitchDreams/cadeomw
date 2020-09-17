import React, { useState, useCallback, useEffect } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {
  InfosGeraisContainer,
  InfosGerais,
  InfoText,
  InfoSubText,
  CoordenadorText,
} from './styles';

interface InfoProps {
  informations: {
    cargaHoraria: {
      totalMinima: string;
      optativaMinima: string;
    };
    cargaHorariaObrigatoria: {
      total: string;
      praticos: string;
      teoricos: string;
    };
    periodoLetivo: {
      minimo: number;
      medio: number;
      maximo: number;
    };
    horasComplementares: string;
    coordenador: string;
  };
}

const Infos: React.FC<InfoProps> = ({ informations }: InfoProps) => {
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
        <strong>Coordenador do Curso:</strong> {informations.coordenador}
      </CoordenadorText>
      <InfosGerais window={windowCheck}>
        <InfoText>
          <ChevronRightIcon />
          Carga Horária:
          <InfoSubText window={windowCheck}>
            Total Mínima: {informations.cargaHoraria.totalMinima} <br />
            Optativa Mínima: {informations.cargaHoraria.optativaMinima}
            {informations.horasComplementares && (
              <>
                <br /> Horas Complementares: {informations.horasComplementares}
              </>
            )}
          </InfoSubText>
        </InfoText>
        <InfoText>
          <ChevronRightIcon />
          Carga Horária Obrigatória:
          <InfoSubText window={windowCheck}>
            Total: {informations.cargaHorariaObrigatoria.total}, Práticos:{' '}
            {informations.cargaHorariaObrigatoria.praticos}, Teóricos:{' '}
            {informations.cargaHorariaObrigatoria.teoricos}
          </InfoSubText>
        </InfoText>
        <InfoText>
          <ChevronRightIcon />
          Período (em semestres):
          <InfoSubText window={windowCheck}>
            Mínimo: {informations.periodoLetivo.minimo}, Médio:{' '}
            {informations.periodoLetivo.medio}, Máximo:{' '}
            {informations.periodoLetivo.maximo}
          </InfoSubText>
        </InfoText>
      </InfosGerais>
    </InfosGeraisContainer>
  );
};

export default Infos;
