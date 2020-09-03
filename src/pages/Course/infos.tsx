import React, { useState, useCallback, useEffect } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import {
  InfosGeraisContainer,
  InfosGerais,
  InfoText,
  InfoSubText,
  CoordenadorText,
} from './styles';

const informations = {
  cargaHoraria: {
    totalMinima: '3810h',
    optativaMinima: '1770h',
  },
  cargaHorariaObrigatoria: {
    total: '2040h',
    praticos: '855h',
    teoricos: '1185h',
  },
  periodoLetivo: {
    minimo: 8,
    medio: 13,
    maximo: 18,
  },
  coordenador: 'João Gondim da Silva Costa',
};

const Infos: React.FC = () => {
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
