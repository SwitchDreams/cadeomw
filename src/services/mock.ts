import { Server } from 'miragejs';

export default function (): Server {
  return new Server({
    routes() {
      this.urlPrefix = 'https://back.cadeomw.com.br';

      this.get('/courses/:id', () => [
        {
          name: 'Engenharia de Computação',
          informations: {
            cargaHoraria: {
              totalMinima: '3810h',
              optativaMinima: '1770h',
            },
            cargaHorariaObrigatoria: {
              total: '2040h',
              praticos: '855h',
              teoricos: '1185h',
            },
            periodoLetivo: {
              minimo: 8,
              medio: 13,
              maximo: 18,
            },
            horasComplementares: '1040h',
            coordenador: 'João Gondim da Silva Costa As',
          },
          flow: [
            {
              semester: 1,
              credits: 20,
              subjects: [
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 1038,
                  status: 'optativa',
                  pass_percent: 1,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 1038,
                  status: 'optativa',
                  pass_percent: 1,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 1038,
                  status: 'optativa',
                  pass_percent: 1,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
              ],
            },
            {
              semester: 2,
              credits: 24,
              subjects: [
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 1038,
                  status: 'optativa',
                  pass_percent: 1,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
              ],
            },
            {
              semester: 3,
              credits: 18,
              subjects: [
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2089,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 1038,
                  status: 'optativa',
                  pass_percent: 1,
                },
              ],
            },
          ],
          hardest_subject: {
            subject_name: 'Sistemas Digitais',
            credit: 4,
            code: 2089,
            status: 'obrigatória',
            pass_percent: 0.43,
          },
          easiest_subject: {
            subject_name: 'Projeto Final em Engenharia de Computação',
            credit: 10,
            code: 1038,
            status: 'obrigatória',
            pass_percent: 1,
          },
          optativas: [
            {
              nome: 'ALGORITMOS E PROGAMAÇÃO DE COMP',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'ALGORITMOS E PROG DE COMP',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'ALGORITMOS E PROG DE COMP',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
          ],
          obrigatorias: [
            {
              nome: 'ALGORITMOS E PROG DE COMP',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'ALGORITMOS E PROG DE COMP',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'ALGORITMOS E PROG DE COMP',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
          ],
        },
      ]);

      this.get('/list-courses', () => [
        {
          name: 'Engenharia de Computação',
          id: 1741,
        },
        {
          name: 'Medicina',
          id: 1984,
        },
        {
          name: 'Florestal',
          id: 1645,
        },
      ]);

      this.get('/list-subjects', () => [
        {
          name: 'Algoritmo e Programação de Computadores',
          credit: 4,
        },
        {
          name: 'Cálculo 1',
          credit: 6,
        },
        {
          name: 'Cálculo Numérico',
          credit: 4,
        },
        {
          name: 'Introdução à Engenharia',
          credit: 2,
        },
      ]);

      this.get('/subjects/:subject_id', () => ({
        subject_name: 'Sistemas Digitais',
        credit: 4,
        code: 2089,
        status: 'obrigatória',
        pass_percent: 0.43,
        oferta: [
          {
            turma: 'A',
            professor: 'Alexandre Barbosa',
            horario: '3T45 5T45',
          },
          {
            turma: 'B',
            professor: 'Alexandre Barbosa',
            horario: '2T45 4T45',
          },
          {
            turma: 'C',
            professor: 'Teófilo Campos',
            horario: '3M45 5M45',
          },
          {
            turma: 'D',
            professor: 'Mylène Farias',
            horario: '4M12 6M12',
          },
        ],
      }));
    },
  });
}
