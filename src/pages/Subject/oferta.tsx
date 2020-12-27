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
    const newOferta = parseOferta(subject.offer);

    const newSubjectParse = { ...subject, offer: newOferta };
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
            subjectParse.offer.map(oferta => (
              <tr key={oferta.name}>
                <td>{oferta.name}</td>
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
                  {oferta.schedule.map(horario => {
                    return (
                      <div key={horario}>
                        {horario === 'Erro' ? '' : horario}
                      </div>
                    );
                  })}
                </td>
                <td>{oferta.total_vacancies}</td>
                <td>{oferta.place !== '' ? oferta.place : '-'}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </OfertaContainer>
  );
};

export default Oferta;
