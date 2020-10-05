import Generator from '../generator';
import { APC, C1, F1 } from '../example';

test('Generator', () => {
  const generator = new Generator([APC, C1, F1], []);
  generator.bestSubjectsClasses();
  expect(generator.selectedClasses).toEqual([APC.classes[0], C1.classes[1]]);
  expect(generator.busyTime).toEqual(['3T45', '5T45', '3M12', '5M12']);
});

test('Generator with busyTime', () => {
  const generator = new Generator([APC, C1, F1], ['3T45']);
  generator.bestSubjectsClasses();
  expect(generator.selectedClasses).toEqual([APC.classes[1], C1.classes[1]]);
  expect(generator.busyTime).toEqual(['3T45', '3T23', '5T23', '3M12', '5M12']);
});

