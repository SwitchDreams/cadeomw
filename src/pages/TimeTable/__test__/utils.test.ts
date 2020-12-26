import { timeToEvent } from '../utils';
import { GeneratorClass } from '../../../services/timetable/generator';

const classRoom: GeneratorClass = {
  name: 'A',
  teacher: 'teacher',
  time: ['######'],
  place: 'Amarelinho',
  subjectName: 'APC',
  color: '#FFFFFF',
};

test('timeToEvent with four digits time', () => {
  const time = '3T12';
  const event = timeToEvent(time, classRoom);
  expect(event.start).toEqual(`2020-09-22T13:00:00`);
  expect(event.end).toEqual(`2020-09-22T15:00:00`);
});

test('timeToEvent with six digits time', () => {
  const time = '3T1234';
  const event = timeToEvent(time, classRoom);
  expect(event.start).toEqual(`2020-09-22T13:00:00`);
  expect(event.end).toEqual(`2020-09-22T17:00:00`);
});

test('timeToEvent with invalid time', () => {
  const time = '3T';
  expect(() => timeToEvent(time, classRoom)).toThrow();
});
