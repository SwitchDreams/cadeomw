/*
  Retorna objeto de oferta parseado
*/

interface Oferta {
  name: string;
  semester: string;
  teachers: string[];
  total_vacancies: string;
  schedule: string[];
  place: string | undefined;
}

interface MapaDiasProps {
  [id: number]: string;
}

interface MapaHorariosProps {
  [id: string]: { inicio: string; fim: string };
}

const mapaDias: MapaDiasProps = {
  2: 'Segunda',
  3: 'Terça',
  4: 'Quarta',
  5: 'Quinta',
  6: 'Sexta',
  7: 'Sábado',
};
const mapaHorarios: MapaHorariosProps = {
  M1: { inicio: '08:00', fim: '09:00' },
  M2: { inicio: '09:00', fim: '10:00' },
  M3: { inicio: '10:00', fim: '11:00' },
  M4: { inicio: '11:00', fim: '12:00' },
  M5: { inicio: '12:00', fim: '13:00' },
  T1: { inicio: '13:00', fim: '14:00' },
  T2: { inicio: '14:00', fim: '15:00' },
  T3: { inicio: '15:00', fim: '16:00' },
  T4: { inicio: '16:00', fim: '17:00' },
  T5: { inicio: '17:00', fim: '18:00' },
  T6: { inicio: '18:00', fim: '19:00' },
  T7: { inicio: '19:00', fim: '20:00' },
  N1: { inicio: '19:00', fim: '20:00' },
  N2: { inicio: '20:00', fim: '21:00' },
  N3: { inicio: '21:00', fim: '22:00' },
  N4: { inicio: '21:40', fim: '22:30' },
};

export function parseHorario(horario: string): string {
  try {
    horario = horario.toUpperCase();
    let diaString = horario.charAt(0);

    for (let i = 1; i < 5; i += 1) {
      if ('0123456789'.includes(horario.charAt(i))) {
        diaString += horario.charAt(i);
      } else {
        i = 5;
      }
    }

    const periodo = horario.charAt(diaString.length);
    const inicio = horario.charAt(diaString.length + 1);
    const fim = horario.charAt(horario.length - 1);

    let horarioCompleto = '';
    let newDia = mapaDias[(diaString[0] as unknown) as number];

    if (!newDia) return 'Erro';

    if (diaString.length > 1) {
      for (let i = 1; i < diaString.length; i += 1) {
        newDia += ' e ';
        newDia += `${mapaDias[(diaString[i] as unknown) as number]}`;
      }
    }

    const newInicio = mapaHorarios[`${periodo}${inicio}`].inicio;
    const newFim = mapaHorarios[`${periodo}${fim}`].fim;

    horarioCompleto = `${newDia}: ${newInicio} - ${newFim}`;

    return horarioCompleto;
  } catch (error) {
    return 'Erro';
  }
}

export default function parseOferta(ofertas: Oferta[]): Oferta[] {
  const newOferta = ofertas.map(oferta => {
    const newHorarios = oferta.schedule.map(horario => {
      return parseHorario(horario);
    });

    return { ...oferta, schedule: newHorarios };
  });

  return newOferta;
}
