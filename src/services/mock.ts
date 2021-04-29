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
                  code: 2090,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 1039,
                  status: 'optativa',
                  pass_percent: 1,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 1040,
                  status: 'optativa',
                  pass_percent: 1,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2091,
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
                  code: 1234,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 1235,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 1236,
                  status: 'optativa',
                  pass_percent: 1,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2137,
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
                  code: 1234,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 2345,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 3456,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Sistemas Digitais',
                  credit: 4,
                  code: 4567,
                  status: 'obrigatória',
                  pass_percent: 0.43,
                },
                {
                  subject_name: 'Projeto Final em Engenharia de Computação',
                  credit: 10,
                  code: 5678,
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
              nome: 'ALGORITMOS E PROG DE COMP1',
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
          ],
        },
      ]);

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
