import React, { useEffect, useState } from 'react';

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
    const newOferta = subject.oferta.map(oferta => {
      const newHorarios = oferta.horario.map(horario => {
        const dia = horario.charAt(0);
        const periodo = horario.charAt(1);
        const inicio = horario.charAt(2);
        const fim = horario.charAt(horario.length - 1);

        let horarioCompleto = '';

        switch (dia) {
          case '2':
            horarioCompleto = horarioCompleto.concat('Segunda: ');
            break;
          case '3':
            horarioCompleto = horarioCompleto.concat('Terça: ');
            break;
          case '4':
            horarioCompleto = horarioCompleto.concat('Quarta: ');
            break;
          case '5':
            horarioCompleto = horarioCompleto.concat('Quinta: ');
            break;
          case '6':
            horarioCompleto = horarioCompleto.concat('Sexta: ');
            break;
          case '7':
            horarioCompleto = horarioCompleto.concat('Sábado: ');
            break;
          default:
            horarioCompleto = horarioCompleto.concat(dia);
        }

        switch (inicio) {
          case '1':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('08h - ');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('13h - ');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('19h - ');
            }
            break;
          case '2':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('09h - ');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('14h - ');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('20h - ');
            }
            break;
          case '3':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('10h - ');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('15h - ');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('21h - ');
            }
            break;
          case '4':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('11h - ');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('16h - ');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('22h - ');
            }
            break;
          case '5':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('12h - ');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('17h - ');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('23h - ');
            }
            break;
          default:
            horarioCompleto = horarioCompleto.concat(inicio);
        }

        switch (fim) {
          case '1':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('09h');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('14h');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('20h');
            }
            break;
          case '2':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('10h');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('15h');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('21h');
            }
            break;
          case '3':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('11h');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('16h');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('22h');
            }
            break;
          case '4':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('12h');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('17h');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('23h');
            }
            break;
          case '5':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('13h');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('18h');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('24h');
            }
            break;
          case '6':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('14h');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('19h');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('01h');
            }
            break;
          case '7':
            if (periodo === 'M') {
              horarioCompleto = horarioCompleto.concat('15h');
            } else if (periodo === 'T') {
              horarioCompleto = horarioCompleto.concat('20h');
            } else if (periodo === 'N') {
              horarioCompleto = horarioCompleto.concat('02h');
            }
            break;
          default:
            horarioCompleto = horarioCompleto.concat(inicio);
        }

        return horarioCompleto;
      });
      return { ...oferta, horario: newHorarios };
    });

    const newSubjectParse = { ...subject, oferta: newOferta };
    setSubjectParse(newSubjectParse);
  }, [subject]);

  return (
    <OfertaContainer window={window}>
      <h4>Oferta</h4>

      <table>
        <tr>
          <th>Turma</th>
          <th>Professor</th>
          <th>Horário</th>
        </tr>
        {subjectParse &&
          subjectParse.oferta.map(oferta => (
            <tr>
              <td>{oferta.turma}</td>
              <td>{oferta.professor}</td>
              <td>
                {oferta.horario.map(horario => {
                  return <div>{horario}</div>;
                })}
              </td>
            </tr>
          ))}
      </table>
    </OfertaContainer>
  );
};

export default Oferta;
