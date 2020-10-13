import React, { useEffect, useState } from 'react';

import parseOferta from '../../utils/parseOferta';

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
  const [subjectParse, setSubjectParse] = useState(subject);

  useEffect(() => {
    const newOferta = parseOferta(subject.oferta);

    const newSubjectParse = { ...subject, oferta: newOferta };
    setSubjectParse(newSubjectParse);
  }, [subject]);

  return (
    <OfertaContainer window={window}>
      <h4>Oferta</h4>

      <table>
        <tbody>
          <tr>
            <th>Turma</th>
            <th>Professor</th>
            <th>Horário</th>
            <th>Vagas</th>
            <th>Local</th>
          </tr>
          {subjectParse &&
            subjectParse.oferta.map(oferta => (
              <tr key={oferta.turma}>
                <td>{oferta.turma}</td>
                <td className="professores">
                  {oferta.teachers.map(prof => {
                    let professor = `${prof} e `;
                    if (prof === oferta.teachers[oferta.teachers.length - 1]) {
                      professor = prof;
                    }
                    return professor;
                  })}
                </td>
                <td className="horario">
                  {oferta.horario.map(horario => {
                    return <div key={horario}>{horario}</div>;
                  })}
                </td>
                <td>{oferta.vagasOfertadas}</td>
                <td>{oferta.local !== '' ? oferta.local : '-'}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </OfertaContainer>
  );
};

export default Oferta;
