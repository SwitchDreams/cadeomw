interface DepartmentProps {
  initials: string;
  name: string;
}

const departments: DepartmentProps[] = [
  {
    initials: 'CDT',
    name: 'Centro de Apoio ao Desenvolvimento Tecnológico - CDT',
  },
  {
    initials: 'CDS',
    name: 'Centro de Desenvolvimento Sustentável - CDS',
  },
  {
    initials: 'CEAM',
    name: 'Centro de Estudos Avançados e Multidisciplinares - CEAM',
  },
  {
    initials: 'DAN',
    name: 'Departamento de Antropologia - DAN',
  },
  {
    initials: 'CEN',
    name: 'Departamento de Artes Cênicas - CEN',
  },
  {
    initials: 'VIS',
    name: 'Departamento de Artes Visuais - VIS',
  },
  {
    initials: 'CEL',
    name: 'Departamento de Biologia Celular - CEL',
  },
  {
    initials: 'BOT',
    name: 'Departamento de Botânica - BOT',
  },
  {
    initials: 'CIC',
    name: 'Departamento de Ciência da Computação - CIC',
  },
  {
    initials: 'CFS',
    name: 'Departamento de Ciências Fisiológicas - CFS',
  },
  {
    initials: 'DIN',
    name: 'Departamento de Design - DIN',
  },
  {
    initials: 'ECL',
    name: 'Departamento de Ecologia - ECL',
  },
  {
    initials: 'ECO',
    name: 'Departamento de Economia - ECO',
  },
  {
    initials: 'ENF',
    name: 'Departamento de Enfermagem - ENF',
  },
  {
    initials: 'ENC',
    name: 'Departamento de Engenharia Civil e Ambiental - ENC',
  },
  {
    initials: 'ENE',
    name: 'Departamento de Engenharia Elétrica - ENE',
  },
  {
    initials: 'EFL',
    name: 'Departamento de Engenharia Florestal - EFL',
  },
  {
    initials: 'ENM',
    name: 'Departamento de Engenharia Mecânica - ENM',
  },
  {
    initials: 'EST',
    name: 'Departamento de Estatística - EST',
  },
  {
    initials: 'ELA',
    name: 'Departamento de Estudos Latino-Americanos - ELA',
  },
  {
    initials: 'FAR',
    name: 'Departamento de Farmácia - FAR',
  },
  {
    initials: 'FIL',
    name: 'Departamento de Filosofia - FIL',
  },
  {
    initials: 'FIT',
    name: 'Departamento de Fitopatologia - FIT',
  },
  {
    initials: 'GEM',
    name: 'Departamento de Genética e Morfologia - GEM',
  },
  {
    initials: 'GEA',
    name: 'Departamento de Geografia - GEA',
  },
  {
    initials: 'HIS',
    name: 'Departamento de História - HIS',
  },
  {
    initials: 'LET',
    name: 'Departamento de Línguas Estrangeiras e Tradução - LET',
  },
  {
    initials: 'LIP',
    name: 'Departamento de Linguística, Português, Líng Clás - LIP',
  },
  {
    initials: 'MAT',
    name: 'Departamento de Matemática - MAT',
  },
  {
    initials: 'MUS',
    name: 'Departamento de Música - MUS',
  },
  {
    initials: 'PPB',
    name: 'Departamento de Processos Psicologicos Básicos - PPB',
  },
  {
    initials: 'PED',
    name: 'Departamento de Psic.Escolar e do Desenvolvimento - PED',
  },
  {
    initials: 'PCL',
    name: 'Departamento de Psicologia Clínica - PCL',
  },
  {
    initials: 'PST',
    name: 'Departamento de Psicologia Social e do Trabalho - PST',
  },
  {
    initials: 'DSC',
    name: 'Departamento de Saúde Coletiva - DSC',
  },
  {
    initials: 'SER',
    name: 'Departamento de Serviço Social - SER',
  },
  {
    initials: 'SOL',
    name: 'Departamento de Sociologia - SOL',
  },
  {
    initials: 'TEL',
    name: 'Departamento de Teoria Literária e Literatura - TEL',
  },
  {
    initials: 'ZOO',
    name: 'Departamento de Zoologia - ZOO',
  },
  {
    initials: 'CCA',
    name: 'Departamento de Ciências Contábeis e Atuariais - CCA',
  },
  {
    initials: 'FAU',
    name: 'Direção da Faculdade de Arquitetura e Urbanismo - FAU',
  },
  {
    initials: 'IBD',
    name: 'Direção do Instituto de Ciências Biológicas - IBD',
  },
  {
    initials: 'FACE',
    name: 'Faculdade de Economia, Administração e Contabilidade - FACE',
  },
  {
    initials: 'FAV',
    name: 'Faculdade de Agronomia e Medicina Veterinária - FAV',
  },
  {
    initials: 'FCI',
    name: 'Faculdade de Ciência da Informação - FCI',
  },
  {
    initials: 'FS',
    name: 'Faculdade de Ciências da Saúde - FS',
  },
  {
    initials: 'FAC',
    name: 'Faculdade de Comunicação - FAC',
  },
  {
    initials: 'FDD',
    name: 'Faculdade de Direito - FDD',
  },
  {
    initials: 'FE',
    name: 'Faculdade de Educação - FE',
  },
  {
    initials: 'FEF',
    name: 'Faculdade de Educação Física - FEF',
  },
  {
    initials: 'FMD',
    name: 'Faculdade de Medicina - FMD',
  },
  {
    initials: 'FT',
    name: 'Faculdade de Tecnologia - FT',
  },
  {
    initials: 'IDA',
    name: 'Instituto de Artes - IDA',
  },
  {
    initials: 'IPOL',
    name: 'Instituto de Ciência Política - IPOL',
  },
  {
    initials: 'IB',
    name: 'Instituto de Ciências Biológicas - IB',
  },
  {
    initials: 'IH',
    name: 'Instituto de Ciências Humanas - IH',
  },
  {
    initials: 'IFD',
    name: 'Instituto de Física - IFD',
  },
  {
    initials: 'IGD',
    name: 'Instituto de Geociências - IGD',
  },
  {
    initials: 'IQD',
    name: 'Instituto de QUÍMICA - IQD',
  },
  {
    initials: 'IREL',
    name: 'Instituto de Relações Internacionais - IREL',
  },
  {
    initials: 'NMT',
    name: 'Núcleo de Medicina Tropical - NMT',
  },
];

export default departments;
