import { GeneratorClass } from '../../services/timetable/generator';

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
  const [week, shift, start, end] = time.split('');
  return {
    id: `${classRoom.subjectName}-${classRoom.name}-${classRoom.teacher}-${classRoom.place}`,
    // Dia 20 é segunda feira, portanto somando com o número da semana, conseguimos a data correspondente
    start: `2020-09-${20 + parseInt(week, 10) - 1}T${String(
      shiftToHour(shift) + parseInt(start, 10) - 1,
    ).padStart(2, '0')}:00:00`,
    end: `2020-09-${20 + parseInt(week, 10) - 1}T${String(
      shiftToHour(shift) + parseInt(end, 10),
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
