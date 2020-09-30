export interface Class {
  name: string;
  teacher: string;
  time: Array<string>;
  place: string;
}

interface Subject {
  name: string;
  classes: Array<Class>;
}

// Classe responsável por gerar a grade automática
export default class Generator {
  subjects: Array<Subject>;

  selectedClasses: Array<Class>;

  busyTime: Array<string>;

  constructor(subjects: Array<Subject>, busyTime: Array<string>) {
    // Ordena a prioridade das matérias de acordo com a quantidade de turmas
    this.subjects = subjects.sort((a, b) => {
      return a.classes.length - b.classes.length;
    });
    this.selectedClasses = [];
    this.busyTime = busyTime;
  }

  // Verifica se determinado horário já está ocupado
  timeNoConflict(classRoom: Class): boolean {
    const classRoomLength = classRoom.time.length;
    const busyTimeLength = this.busyTime.length;
    for (let i = 0; i < classRoomLength; i += 1) {
      for (let j = 0; j < busyTimeLength; j += 1) {
        if (classRoom.time[i] === this.busyTime[j]) {
          return false;
        }
      }
    }
    return true;
  }

  // Retorna a melhor combinação de matérias
  magic(): Array<Class> {
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
