interface Class {
  name: string;
  teacher: string;
  time: Array<string>;
  place: string;
}

interface Subject {
  name: string;
  classes: Array<Class>;
}

export default class Generator {
  // Algoritmo
  // Recebe uma lista de máteria no formato Subject
  // Recebe uma lista de horários no formato String
  subjects: Array<Subject>;

  selectedClasses: Array<Class>;

  busyTime: Array<string>;

  constructor(subjects: Array<Subject>, busyTime: Array<string>) {
    this.subjects = subjects.sort(function (a, b) {
      return a.classes.length - b.classes.length;
    });
    this.selectedClasses = [];
    this.busyTime = busyTime;
  }

  timeNoConflict(turma: Class): boolean {
    for (let i = 0; i < turma.time.length; i += 1) {
      for (let j = 0; j < this.busyTime.length; j += 1) {
        if (turma.time[i] === this.busyTime[j]) {
          return false;
        }
      }
    }
    return true;
  }

  magic(): Array<Class> {
    // Para todas as materias em ordem de prioridade
    for (let i = 0; i < this.subjects.length; i += 1) {
      // Para todas as turmas
      for (let j = 0; j < this.subjects[i].classes.length; j += 1) {
        if (this.timeNoConflict(this.subjects[i].classes[j])) {
          // Cria uma árvore
          // TODO tentar pensar de forma mais recursiva
          this.selectedClasses.push(this.subjects[i].classes[j]);
          // Colocar os tempos no busy time
          this.busyTime.push(this.subjects[i].classes[j].time[0]);
          break;
        } else if (j === this.subjects[i].classes.length) {
          // eslint-disable-next-line no-console
          console.log('Não há disciplinas sem conflitos');
        }
      }
    }
    return this.selectedClasses;
  }
}
