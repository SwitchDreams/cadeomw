export const SubjectData = (id: string) => ({
  name: 'Sistemas Digitais',
  credit: 4,
  department_name: 'CIC',
  code: id,
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
});

export const ListSubjectData = {
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
};
