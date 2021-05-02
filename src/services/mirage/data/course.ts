export const CourseData = (id: string) => ({
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
});

export const ListCourseData = {
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
};
