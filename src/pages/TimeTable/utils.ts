import { GeneratorClass } from '../../services/timetable/generator';

export interface Subject {
  code: string;
  department: string;
  department_name: string;
  name: string;
  credit: number;
  pass_percent: number;
  prerequisites: null;
  grade_infos: null;
  equivalences: null;
  class: string | null;
  offer: {
    name: string;
    semester: string;
    teachers: string[];
    total_vacancies: string;
    schedule: string[];
    place: string;
  }[];
}

export interface ParsedSubjectTimetable {
  name: string;
  classes: {
    name: string;
    teacher: string;
    time: string[];
    place: string;
  }[];
}

export interface SearchResponse {
  results: ModalSubject[];
}

export interface ModalSubject {
  code: string;
  department: string;
  name: string;
}

export function shiftToHour(shift: string): number {
  switch (shift) {
    case 'T':
      return 13;
    case 'M':
      return 8;
    case 'N':
      return 19;
    default:
      return 0;
  }
}

export function randomColor(): string {
  return '#000000'.replace(/0/g, () => {
    // eslint-disable-next-line no-bitwise
    return (~~(Math.random() * 16)).toString(16);
  });
}

export function timeToEvent(time: string, classRoom: GeneratorClass) {
  const [week, shift, start, ...end] = time.split('');
  return {
    id: `${classRoom.subjectName}-${classRoom.name}-${classRoom.teacher}-${time}`,
    // Dia 20 é segunda feira, portanto somando com o número da semana, conseguimos a data correspondente
    start: `2020-09-${20 + parseInt(week, 10) - 1}T${String(
      shiftToHour(shift) + parseInt(start, 10) - 1,
    ).padStart(2, '0')}:00:00`,
    end: `2020-09-${20 + parseInt(week, 10) - 1}T${String(
      shiftToHour(shift) + parseInt(end[end.length - 1], 10),
    ).padStart(2, '0')}:00:00`,
    color: classRoom.color,
  };
}

export function classToEvent(classRoom: GeneratorClass): any[] {
  const times = classRoom.time;
  const events: any = [];
  times.map((time: string) => events.push(timeToEvent(time, classRoom)));
  return events;
}

export function parseSchedule(schedule: string[]): string[] {
  const response = [];

  for (let i = 0; i < schedule.length; i += 1) {
    let diaString = schedule[i].charAt(0);
    let hourString;

    for (let j = 1; j < 5; j += 1) {
      if ('0123456789'.includes(schedule[i].charAt(j))) {
        diaString += schedule[i].charAt(j);
      } else {
        hourString = schedule[i].slice(j);
        j = 5;
      }
    }

    for (let j = 0; j < diaString.length; j += 1) {
      response.push(diaString[j] + hourString);
    }
  }

  return response;
}

const checkboxesInitial = [];
const turno = ['M', 'T', 'N'];

for (let i = 0; i < 3; i += 1) {
  // turno --> i

  if (turno[i] === 'M') {
    for (let k = 1; k < 6; k += 1) {
      // horário --> k
      for (let j = 2; j < 8; j += 1) {
        // dia --> j
        checkboxesInitial.push({
          name: `${j}${turno[i]}${k}`,
          checked: false,
        });
      }
    }
  } else if (turno[i] === 'T') {
    for (let k = 1; k < 7; k += 1) {
      // horário --> k
      for (let j = 2; j < 8; j += 1) {
        // dia --> j
        checkboxesInitial.push({
          name: `${j}${turno[i]}${k}`,
          checked: false,
        });
      }
    }
  } else if (turno[i] === 'N') {
    for (let k = 1; k < 5; k += 1) {
      // horário --> k
      for (let j = 2; j < 8; j += 1) {
        // dia --> j
        checkboxesInitial.push({
          name: `${j}${turno[i]}${k}`,
          checked: false,
        });
      }
    }
  }
}

export const checkboxes = checkboxesInitial;

export const hours = [
  '8h00',
  '9h00',
  '10h00',
  '11h00',
  '12h00',
  '13h00',
  '14h00',
  '15h00',
  '16h00',
  '17h00',
  '18h00',
  '19h00',
  '20h00',
  '21h00',
];
