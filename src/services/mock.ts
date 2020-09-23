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
            coordenador: 'João Gondim da Silva Costa',
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
              nome: 'ALGORITMOS E PROGRAMAÇÃO DE COMP 1',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR 2',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA 3',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'ALGORITMOS E PROG DE COMP 4',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR 5',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA 6',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 7',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 8',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 9',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA 10',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'ALGORITMOS E PROG DE COMP 11',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR 12',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 13',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 14',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 15',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 16',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 17',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 18',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'ALGORITMOS E PROGRAMAÇÃO DE COMP 19',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR 20',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA 21',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'ALGORITMOS E PROG DE COMP 22',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR 23',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA 24',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 25',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 26',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 27',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO COMPETITIVA 28',
              cargaHoraria: 60,
              departamento: 'FEF0988',
            },
            {
              nome: 'ALGORITMOS E PROG DE COMP 29',
              cargaHoraria: 60,
              departamento: 'ADM0001',
            },
            {
              nome: 'INTRODUÇÃO À ALGEBRA LINEAR 30',
              cargaHoraria: 40,
              departamento: 'CIC0232',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 31',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 32',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 33',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 34',
              cargaHoraria: 60,
              departamento: 'FT0932',
            },
            {
              nome: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 35',
              cargaHoraria: 20,
              departamento: 'ADM0087',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 36',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 37',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 38',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 39',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 40',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 41',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 42',
              cargaHoraria: 40,
              departamento: 'ENE1342',
            },
            {
              nome: 'PROGRAMACAO SISTEMATICA 43',
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
        name: 'Sistemas Digitais',
        credit: 4,
        department: 'CIC',
        code: 2089,
        status: 'obrigatória',
        pass_percent: 0.43,
        prerequisites: [
          [
            {
              credit: 4,
              code: 1285,
              subject_name: 'Elétrica Digital',
            },
            {
              credit: 2,
              code: 2136,
              subject_name: 'Laboratório de Elétrica Digital',
            },
          ],
          [
            {
              credit: 6,
              code: 5342,
              subject_name: 'Introdução à Elétrica',
            },
          ],
        ],
        equivalences: [
          {
            direction: 'unidirecional',
            destination: {
              code: 1963,
              subject_name: 'Elétrica Básica',
              credit: 4,
            },
            subject: {
              code: 2916,
              subject_name: 'Algoritmos para Computação',
              credit: 2,
            },
            options: [
              {
                code: 2013,
                name: 'Engenharia de Computação',
              },
              {
                code: 1747,
                name: 'Engenharia Elétrica',
              },
            ],
          },
          {
            direction: 'unidirecional',
            destination: {
              code: 1963,
              subject_name: 'Elétrica Básica',
              credit: 4,
            },
            subject: {
              code: 2916,
              subject_name: 'Algoritmos para Computação',
              credit: 2,
            },
            options: [],
          },
          {
            direction: 'unidirecional',
            destination: {
              code: 1963,
              subject_name: 'Elétrica Básica',
              credit: 4,
            },
            subject: {
              code: 2916,
              subject_name: 'Algoritmos para Computação',
              credit: 2,
            },
            options: [
              {
                code: 2013,
                name: 'Engenharia de Computação',
              },
              {
                code: 1747,
                name: 'Engenharia Elétrica',
              },
            ],
          },
          {
            direction: 'unidirecional',
            destination: {
              code: 1963,
              subject_name: 'Elétrica Básica',
              credit: 4,
            },
            subject: {
              code: 2916,
              subject_name: 'Algoritmos para Computação',
              credit: 2,
            },
            options: [
              {
                code: 2013,
                name: 'Engenharia de Computação',
              },
              {
                code: 1747,
                name: 'Engenharia Elétrica',
              },
              {
                code: 1747,
                name: 'Engenharia Florestal',
              },
              {
                code: 1747,
                name: 'Eletrônica',
              },
            ],
          },
        ],
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
