import { Server } from 'miragejs';

export default function (): Server {
  return new Server({
    routes() {
      this.urlPrefix = 'https://back.cadeomw.com.br';

      this.get(
        '/courses/:id',
        (_, request) => {
          const { id } = request.params;

          return {
            name: 'Engenharia de Computação',
            code: id,
            details: {
              workload: {
                total: 3810,
                optional: 1770,
                mandatory: 170,
              },
              num_semester: 10,
              academic_degree: 'Bacharel',
              shift: 'Noturno',
              coordinator_name: 'João Gondim da Silva Costa',
            },
            department: 'CIC',
            flow_graph: null,
            flow: [
              {
                semester: 1,
                subjects: [
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 2089,
                    status: 'obrigatória',
                  },
                  {
                    subject_name: 'Projeto Final em Engenharia de Computação',
                    credit: 10,
                    code: 1038,
                    status: 'optativa',
                  },
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 2090,
                    status: 'obrigatória',
                  },
                  {
                    subject_name: 'Projeto Final em Engenharia de Computação',
                    credit: 10,
                    code: 1039,
                    status: 'optativa',
                  },
                  {
                    subject_name: 'Projeto Final em Engenharia de Computação',
                    credit: 10,
                    code: 1040,
                    status: 'optativa',
                  },
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 2091,
                    status: 'obrigatória',
                  },
                ],
              },
              {
                semester: 2,
                subjects: [
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 1234,
                    status: 'obrigatória',
                  },
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 1235,
                    status: 'obrigatória',
                  },
                  {
                    subject_name: 'Projeto Final em Engenharia de Computação',
                    credit: 10,
                    code: 1236,
                    status: 'optativa',
                  },
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 2137,
                    status: 'obrigatória',
                  },
                ],
              },
              {
                semester: 3,
                subjects: [
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 1234,
                    status: 'obrigatória',
                  },
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 2345,
                    status: 'obrigatória',
                  },
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 3456,
                    status: 'obrigatória',
                  },
                  {
                    subject_name: 'Sistemas Digitais',
                    credit: 4,
                    code: 4567,
                    status: 'obrigatória',
                  },
                  {
                    subject_name: 'Projeto Final em Engenharia de Computação',
                    credit: 10,
                    code: 5678,
                    status: 'optativa',
                  },
                ],
              },
            ],
            curriculum: {
              optional: [
                {
                  subject_name: 'ALGORITMOS E PROGRAMAÇÃO DE COMP 1',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 2',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 3',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'ALGORITMOS E PROG DE COMP 4',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 5',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 6',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 7',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 8',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 9',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 10',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'ALGORITMOS E PROG DE COMP 11',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 12',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 13',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 14',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 15',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 16',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 17',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 18',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'ALGORITMOS E PROGRAMAÇÃO DE COMP 19',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 20',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 21',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'ALGORITMOS E PROG DE COMP 22',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 23',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 24',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 25',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 26',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 27',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 28',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'ALGORITMOS E PROG DE COMP 29',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 30',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 31',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 32',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 33',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 34',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 35',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 36',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 37',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 38',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 39',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 40',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 41',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 42',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 43',
                  credit: 40,
                  code: 12,
                },
              ],
              mandatory: [
                {
                  subject_name: 'ALGORITMOS E PROG DE COMP1',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 2',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 3',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'ALGORITMOS E PROG DE COMP 4',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 5',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 6',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 7',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 8',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 9',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO COMPETITIVA 10',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'ALGORITMOS E PROG DE COMP 11',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À ALGEBRA LINEAR 12',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 13',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 14',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 15',
                  credit: 40,
                  code: 12,
                },
                {
                  subject_name: 'FUNDAMENTOS TEÓRICOS DA COMPUTAÇÃO 16',
                  credit: 60,
                  code: 12,
                },
                {
                  subject_name: 'INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO 17',
                  credit: 20,
                  code: 12,
                },
                {
                  subject_name: 'PROGRAMACAO SISTEMATICA 18',
                  credit: 40,
                  code: 12,
                },
              ],
            },
          };
        },
        { timing: 500 },
      );

      this.get('/courses', () => ({
        results: [
          {
            code: 1741,
            name: 'Engenharia de Computação',
            num_semester: 10,
            shift: 'Noturno',
          },
          {
            code: 1984,
            name: 'Medicina',
            num_semester: 10,
            shift: 'Noturno',
          },
          {
            code: 1645,
            name: 'Florestal',
            num_semester: 10,
            shift: 'Noturno',
          },
        ],
      }));

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
      }));

      this.get('/department', () => ({
        results: [
          {
            id: 1,
            name: 'Departamento de Matemática',
            initials: 'MAT',
          },
          {
            id: 2,
            name: 'Departamento de Computação',
            initials: 'CIC',
          },
          {
            id: 3,
            name: 'Departamento de Estatística',
            initials: 'EST',
          },
        ],
      }));

      this.get('/department/:department_id', () => ({
        name: 'Departamento de Matemática',
        initials: 'MAT',
        courses_list: [
          {
            code: 1,
            name: 'Matemática',
            shift: 'Noturno',
            num_semester: 10,
            academic_degree: 'Bacharel',
          },
          {
            code: 2,
            name: 'Matemática Licenciatura',
            shift: 'Diurno',
            num_semester: 10,
            academic_degree: 'Licenciatura',
          },
        ],
        subjects_list: [
          {
            code: 1,
            subject_name: 'Cálculo 1',
            credit: 6,
          },
          {
            code: 2,
            subject_name: 'Cálculo Numérico',
            credit: 4,
          },
          {
            code: 3,
            subject_name: 'Cálculo 2',
            credit: 6,
          },
        ],
      }));

      this.get('/subjects', () => ({
        results: [
          {
            name: 'Algoritmo e Programação de Computadores',
            code: 1,
            department_name: 'CIC',
            credit: 4,
          },
          {
            name: 'Cálculo 1',
            code: 2,
            department_name: 'MAT',
            credit: 6,
          },
          {
            name: 'Cálculo Numérico',
            code: 3,
            department_name: 'MAT',
            credit: 4,
          },
          {
            name: 'Introdução à Engenharia',
            code: 4,
            department_name: 'IEL',
            credit: 2,
          },
          {
            name: 'Sistemas Digitais',
            code: 2089,
            department_name: 'CIC',
            credit: 4,
          },
        ],
      }));

      this.get(
        '/subjects/:subject_id',
        (_, request) => {
          const { subject_id } = request.params;

          return {
            name: 'Sistemas Digitais',
            credit: 4,
            department_name: 'CIC',
            code: subject_id,
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
                  code: 1913,
                  subject_name: 'Elétrica Básica',
                  credit: 4,
                },
                subject: {
                  code: 9916,
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
                  code: 1969,
                  subject_name: 'Elétrica Básica',
                  credit: 4,
                },
                subject: {
                  code: 2906,
                  subject_name: 'Algoritmos para Computação',
                  credit: 2,
                },
                options: [],
              },
              {
                direction: 'unidirecional',
                destination: {
                  code: 1263,
                  subject_name: 'Elétrica Básica',
                  credit: 4,
                },
                subject: {
                  code: 8916,
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
                  code: 1973,
                  subject_name: 'Elétrica Básica',
                  credit: 4,
                },
                subject: {
                  code: 2936,
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
                    code: 1748,
                    name: 'Engenharia Florestal',
                  },
                  {
                    code: 1749,
                    name: 'Eletrônica',
                  },
                ],
              },
            ],
            offer: [
              {
                name: 'A',
                teachers: [
                  'MARIO BENJAMIM BAPTISTA DE SIQUEIRA',
                  'GEORGE TEODORO DA SILVA CANNEDO PIRES',
                ],
                schedule: ['3M5', '3T1'],
                total_vacancies: 40,
                place: 'BSA S B1 11/13 E BSA S B1 26/13',
              },
              {
                name: 'B',
                teachers: ['GEORGE TEODORO DA SILVA CANNEDO PIRES'],
                schedule: ['246T45'],
                total_vacancies: 100,
                place: 'BSA S BT 41/10',
              },
              {
                name: 'C',
                teachers: ['TEÓFILO CAMPOS SCHULZ MEDEIROS FONTENELLI'],
                schedule: ['3M45', '5M45', '7N1'],
                total_vacancies: 15,
              },
              {
                name: 'D',
                teachers: ['MANUEL NASCIMENTO DIAS BARCELOS JUNIOR'],
                schedule: ['4M12', '6M12'],
                total_vacancies: 55,
                place: 'virtual',
              },
              {
                name: 'E',
                teachers: ['CARLOS ALBERTO GURGEL VERAS'],
                schedule: ['7T234567'],
                total_vacancies: 80,
                place: 'A definir',
              },
              {
                name: 'F',
                teachers: ['PEROLA DE OLIVEIRA MAGALHAES DIAS BATISTA'],
                schedule: [
                  '7M12345',
                  '7T12',
                  '2N1234',
                  '3N1234',
                  '4N1234',
                  '5N1234',
                  '6N1234',
                ],
                total_vacancies: 80,
                place: 'A definir',
              },
            ],
            corequisites: [
              {
                code: 1,
                credit: 2,
                subject_name: 'Lab SD',
              },
            ],
          };
        },
        { timing: 500 },
      );
    },
  });
}
