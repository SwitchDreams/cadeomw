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
    this.selectedClasses = selectedClasses;
    this.busyTime = busyTime;
  }

  // Verifica se determinado horário já está ocupado
  timeNoConflict(classRoom: GeneratorClass): boolean {
    const classRoomLength = classRoom.time.length;
    const busyTimeLength = this.busyTime.length;
    for (let i = 0; i < classRoomLength; i += 1) {
      for (let j = 0; j < busyTimeLength; j += 1) {
        const [classWeek, classShift, ...classTimes] = classRoom.time[i].split(
          '',
        );
        const [busyWeek, busyShift, ...busyTimes] = this.busyTime[j].split('');
        // Caso o dia da semana e o turno seja igual
        if (classWeek === busyWeek && classShift === busyShift) {
          // Verifica char a char se está ocupado
          for (let z = 0; z < classTimes.length; z += 1) {
            if (busyTimes.includes(classTimes[z])) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }

  // Retorna a melhor combinação de turmas das matérias escolhidas
  bestSubjectsClasses(): Array<GeneratorClass> {
    // Para todas as materias em ordem de prioridade
    for (let i = 0; i < this.subjects.length; i += 1) {
      const subjectClassesLength = this.subjects[i].classes.length;
      // Para todas as turmas
      for (let j = 0; j < subjectClassesLength; j += 1) {
        // Caso não tenha conflito de horário
        if (this.timeNoConflict(this.subjects[i].classes[j])) {
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
          console.log('Não há disciplinas sem conflitos');
        }
      }
    }
    return this.selectedClasses;
  }
}
