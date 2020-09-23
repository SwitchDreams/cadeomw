import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Zoom from '@material-ui/core/Zoom';

import { Subject } from './index';

import { OfertaContainer } from './styles';

/*
  Página de Disciplina - Bruna
*/

interface OfertaProps {
  subject: Subject;
  window: boolean;
}

const Oferta: React.FC<OfertaProps> = ({ subject, window }: OfertaProps) => {
  return (
    <OfertaContainer window={window}>
      <h4>Oferta</h4>

      <table>
        <tr>
          <th>Turma</th>
          <th>Professor</th>
          <th>Horário</th>
        </tr>
        {subject.oferta.map(oferta => (
          <tr>
            <td>{oferta.turma}</td>
            <td>{oferta.professor}</td>
            <td>{oferta.horario}</td>
          </tr>
        ))}
      </table>
    </OfertaContainer>
  );
};

export default Oferta;
