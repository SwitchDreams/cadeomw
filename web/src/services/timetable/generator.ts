export interface GeneratorClass {
  name: string;
  teacher: string;
  time: Array<string>;
  place: string;
  color: string;
  subjectName: string;
}

export interface GeneratorSubject {
  name: string;
  classes: Array<GeneratorClass>;
  color: string;
}

function hasConflictTime(time1: string, time2: string): boolean {
  const [busyWeek1, busyShift1, ...busyTimes1] = time1.split('');
  const [busyWeek2, busyShift2, ...busyTimes2] = time2.split('');
  // Caso o dia da semana e o turno seja igual
  if (busyWeek1 === busyWeek2 && busyShift1 === busyShift2) {
    // Verifica char a char se está ocupado
    for (let z = 0; z < busyTimes1.length; z += 1) {
      if (busyTimes2.includes(busyTimes1[z])) {
        return true;
      }
    }
  }
  return false;
}

function classesHasConflictTime(
  roomClass1: GeneratorClass,
  roomClass2: GeneratorClass,
): boolean {
  for (let i = 0; i < roomClass1.time.length; i += 1) {
    for (let j = 0; j < roomClass2.time.length; j += 1) {
      if (hasConflictTime(roomClass1.time[i], roomClass2.time[j])) {
        return true;
      }
    }
  }
  return false;
}

function classHasNoConflictWithBusyTimes(
  classRoom: GeneratorClass,
  busyTimes: Array<string>,
): boolean {
  const classRoomLength = classRoom.time.length;
  const busyTimeLength = busyTimes.length;
  for (let i = 0; i < classRoomLength; i += 1) {
    for (let j = 0; j < busyTimeLength; j += 1) {
      if (hasConflictTime(classRoom.time[i], busyTimes[j])) {
        return true;
      }
    }
  }
  return false;
}

// Classe responsável por gerar a grade automática
export default class Generator {
  subjects: Array<GeneratorSubject>;

  selectedClasses: Array<GeneratorClass>;

  busyTime: Array<string>;

  constructor(
    subjects: Array<GeneratorSubject>,
    busyTime: Array<string>,
    selectedClasses: Array<GeneratorClass> = [],
  ) {
    // Ordena a prioridade das matérias de acordo com a quantidade de turmas
    this.subjects = subjects.sort((a, b) => {
      return a.classes.length - b.classes.length;
    });

    // Verifica se as selected classes tem conflito de horário com o busyTime
    for (let i = 0; i < selectedClasses.length; i += 1) {
      if (classHasNoConflictWithBusyTimes(selectedClasses[i], busyTime)) {
        throw new Error(
          'Conflito de horários entre turmas selecionadas e horários ocupados',
        );
      }
    }

    this.busyTime = busyTime;

    // Verifica se as selected classes tem algum conflito de horário entre si
    for (let i = 0; i < selectedClasses.length; i += 1) {
      for (let j = i + 1; j < selectedClasses.length; j += 1) {
        if (classesHasConflictTime(selectedClasses[i], selectedClasses[j])) {
          throw new Error(
            'Turmas selecionadas com conflito de horários entre si',
          );
        }
      }
      // Adiciona os horários das turmas selecionadas no busyTime
      selectedClasses[i].time.map(time => this.busyTime.push(time));
    }

    this.selectedClasses = selectedClasses;
  }

  // Verifica se determinado horário já está ocupado
  classHasNoConflict(classRoom: GeneratorClass): boolean {
    return !classHasNoConflictWithBusyTimes(classRoom, this.busyTime);
  }

  // Retorna a melhor combinação de turmas das matérias escolhidas
  bestSubjectsClasses(): Array<GeneratorClass> {
    // Para todas as materias em ordem de prioridade
    for (let i = 0; i < this.subjects.length; i += 1) {
      const subjectClassesLength = this.subjects[i].classes.length;
      // Para todas as turmas da matéria a ser avaliada
      for (let j = 0; j < subjectClassesLength; j += 1) {
        // Caso não tenha conflito de horário
        if (this.classHasNoConflict(this.subjects[i].classes[j])) {
          // Escolhe a determinada turma
          this.selectedClasses.push(this.subjects[i].classes[j]);
          // Colocar os tempos no busy time
          this.subjects[i].classes[j].time.map(time =>
            this.busyTime.push(time),
          );
          // Procura uma turma da próxima matéria
          break;
        } else if (j === subjectClassesLength) {
          // eslint-disable-next-line no-console
          throw new Error(
            'Não foi possível montar a grade com as disciplinas selecionadas',
          );
        }
      }
    }
    return this.selectedClasses;
  }
}
