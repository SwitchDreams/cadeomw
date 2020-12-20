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
  if (time.length <= 4 && time.length > 6) {
    throw new Error('Parâmetro time deve ter de 4 a 6 dígitos');
  }
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
