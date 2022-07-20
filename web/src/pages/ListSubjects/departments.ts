interface DepartmentProps {
  initials: string;
  name: string;
}

const departments = [
  {
    initials: '',
    name: 'Todos Departamentos',
  },
  {
    id: 55,
    name: 'CENTRO DE APOIO AO DESENV TECNOLOGICO',
    initials: 'CDT',
  },
  {
    id: 56,
    name: 'CENTRO DE DESENVOLVIMENTO SUSTENTÁVEL',
    initials: 'CDS',
  },
  {
    id: 4,
    name: 'CENTRO DE EXCELÊNCIA EM TURISMO',
    initials: 'CET',
  },
  {
    id: 57,
    name: 'CENTRO ESTUDOS AVANÇADOS MULTIDISCIPLIN',
    initials: 'CEM',
  },
  {
    id: 58,
    name: 'CENTRO INTEGRADO ORDENAMENTO TERRITORIAL',
    initials: 'COT',
  },
  {
    id: 59,
    name: 'DECANATO DE ENSINO DE GRADUACAO / DEG',
    initials: 'DEG',
  },
  {
    id: 60,
    name: 'DECANATO DE POS GRADUACAO / DPG',
    initials: 'DPG',
  },
  {
    id: 61,
    name: 'DECANATO EXTENSAO / DEX',
    initials: 'DEX',
  },
  {
    id: 9,
    name: 'DEPARTAMENTO DE DESIGN',
    initials: 'DIN',
  },
  {
    id: 17,
    name: 'DEPARTAMENTO DE ENGENHARIA MECANICA',
    initials: 'ENM',
  },
  {
    id: 13,
    name: 'DEPARTAMENTO DE ESTUDOS LATINO AMERICANO',
    initials: 'ELA',
  },
  {
    id: 62,
    name: 'DEPARTAMENTO DE FARMACIA',
    initials: 'FAR',
  },
  {
    id: 63,
    name: 'DEPARTAMENTO DE GESTAO DE POLITICAS PUBL',
    initials: 'GPP',
  },
  {
    id: 48,
    name: 'DEPARTAMENTO DE MATEMÁTICA',
    initials: 'MAT',
  },
  {
    id: 53,
    name: 'DEPARTAMENTO DE SOCIOLOGIA',
    initials: 'SOL',
  },
  {
    id: 1,
    name: 'DEPTO ADMINISTRAÇÃO',
    initials: 'ADM',
  },
  {
    id: 7,
    name: 'DEPTO ANTROPOLOGIA',
    initials: 'DAN',
  },
  {
    id: 3,
    name: 'DEPTO ARTES CÊNICAS',
    initials: 'CEN',
  },
  {
    id: 54,
    name: 'DEPTO ARTES VISUAIS',
    initials: 'VIS',
  },
  {
    id: 8,
    name: 'DEPTO AUDIOVISUAIS E PUBLICIDADE',
    initials: 'DAP',
  },
  {
    id: 64,
    name: 'DEPTO BIOLOGIA CELULAR',
    initials: 'CEL',
  },
  {
    id: 65,
    name: 'DEPTO BOTÂNICA',
    initials: 'BOT',
  },
  {
    id: 2,
    name: 'DEPTO CIÊNCIAS CONTÁBEIS ATUARIAIS',
    initials: 'CCA',
  },
  {
    id: 5,
    name: 'DEPTO CIÊNCIAS DA COMPUTAÇÃO',
    initials: 'CIC',
  },
  {
    id: 66,
    name: 'DEPTO CIÊNCIAS FISIOLÓGICAS',
    initials: 'CFS',
  },
  {
    id: 6,
    name: 'DEPTO DE COMUNICACAO ORGANIZACIONAL',
    initials: 'COM',
  },
  {
    id: 67,
    name: 'DEPTO ECOLOGIA',
    initials: 'ECL',
  },
  {
    id: 11,
    name: 'DEPTO ECONOMIA',
    initials: 'ECO',
  },
  {
    id: 16,
    name: 'DEPTO ENFERMAGEM',
    initials: 'ENF',
  },
  {
    id: 14,
    name: 'DEPTO ENGENHARIA CIVIL E AMBIENTAL',
    initials: 'ENC',
  },
  {
    id: 68,
    name: 'DEPTO ENGENHARIA DE PRODUCAO',
    initials: 'EPR',
  },
  {
    id: 15,
    name: 'DEPTO ENGENHARIA ELETRICA',
    initials: 'ENE',
  },
  {
    id: 12,
    name: 'DEPTO ENGENHARIA FLORESTAL',
    initials: 'EFL',
  },
  {
    id: 18,
    name: 'DEPTO ESTATÍSTICA',
    initials: 'EST',
  },
  {
    id: 29,
    name: 'DEPTO FILOSOFIA',
    initials: 'FIL',
  },
  {
    id: 69,
    name: 'DEPTO FITOPATOLOGIA',
    initials: 'FIT',
  },
  {
    id: 70,
    name: 'DEPTO GENÉTICA E MORFOLOGIA',
    initials: 'GEM',
  },
  {
    id: 33,
    name: 'DEPTO GEOGRAFIA',
    initials: 'GEA',
  },
  {
    id: 34,
    name: 'DEPTO HISTÓRIA',
    initials: 'HIS',
  },
  {
    id: 45,
    name: 'DEPTO JORNALISMO',
    initials: 'JOR',
  },
  {
    id: 47,
    name: 'DEPTO LINGUISTICA, PORT. LING. CLASSICAS',
    initials: 'LIP',
  },
  {
    id: 46,
    name: 'DEPTO LÍNGUAS ESTRANGEIRAS E TRADUÇÃO',
    initials: 'LET',
  },
  {
    id: 49,
    name: 'DEPTO MÚSICA',
    initials: 'MUS',
  },
  {
    id: 50,
    name: 'DEPTO NUTRICAO',
    initials: 'NUT',
  },
  {
    id: 51,
    name: 'DEPTO ODONTOLOGIA',
    initials: 'ODT',
  },
  {
    id: 71,
    name: 'DEPTO PROJETOS EXPRES REPRES ARQ E URBAN',
    initials: 'PRO',
  },
  {
    id: 10,
    name: 'DEPTO SAUDE COLETIVA',
    initials: 'DSC',
  },
  {
    id: 52,
    name: 'DEPTO SERVIÇO SOCIAL',
    initials: 'SER',
  },
  {
    id: 72,
    name: 'DEPTO TECNOLOGIA ARQUITETURA URBANISMO',
    initials: 'TEC',
  },
  {
    id: 73,
    name: 'DEPTO TEORIA HISTORIA ARQUIT E URBANISM',
    initials: 'TAU',
  },
  {
    id: 74,
    name: 'DEPTO TEORIA LITERÁRIA E LITERATURA',
    initials: 'TEL',
  },
  {
    id: 75,
    name: 'DEPTO ZOOLOGIA',
    initials: 'ZOO',
  },
  {
    id: 24,
    name: 'FACULDADE DE  CIÊNCIAS DA SAÚDE',
    initials: 'FCS',
  },
  {
    id: 30,
    name: 'FACULDADE DE  MEDICINA',
    initials: 'FMD',
  },
  {
    id: 31,
    name: 'FACULDADE DE  TECNOLOGIA',
    initials: 'FTD',
  },
  {
    id: 21,
    name: 'FACULDADE DE AGRONOMIA E MEDICINA VETERINÁRIA',
    initials: 'FAV',
  },
  {
    id: 20,
    name: 'FACULDADE DE ARQUITETURA E URBANISMO',
    initials: 'FAU',
  },
  {
    id: 22,
    name: 'FACULDADE DE CEILÂNDIA',
    initials: 'FCE',
  },
  {
    id: 23,
    name: 'FACULDADE DE CIÊNCIA DA INFORMAÇÃO',
    initials: 'FCI',
  },
  {
    id: 76,
    name: 'FACULDADE DE COMUNICAÇÃO',
    initials: 'FAC',
  },
  {
    id: 25,
    name: 'FACULDADE DE DIREITO',
    initials: 'FDD',
  },
  {
    id: 26,
    name: 'FACULDADE DE EDUCAÇÃO',
    initials: 'FED',
  },
  {
    id: 27,
    name: 'FACULDADE DE EDUCAÇÃO FÍSICA',
    initials: 'FEF',
  },
  {
    id: 32,
    name: 'FACULDADE DE PLANALTINA',
    initials: 'FUP',
  },
  {
    id: 28,
    name: 'FACULDADE DO GAMA',
    initials: 'FGA',
  },
  {
    id: 19,
    name:
      'FACULDADE ECONOMIA,  ADMINISTRAÇÃO,  CONTABILIDADE E  GEST POL PÚBLICAS',
    initials: 'FACE',
  },
  {
    id: 37,
    name: 'INSTITUTO DE ARTES',
    initials: 'IDA1',
  },
  {
    id: 42,
    name: 'INSTITUTO DE CIÊNCIA POLÍTICA',
    initials: 'IPOL',
  },
  {
    id: 35,
    name: 'INSTITUTO DE CIÊNCIAS BIOLÓGICAS',
    initials: 'ICB',
  },
  {
    id: 77,
    name: 'INSTITUTO DE CIÊNCIAS EXATAS',
    initials: 'GRE',
  },
  {
    id: 36,
    name: 'INSTITUTO DE CIÊNCIAS HUMANAS',
    initials: 'ICH',
  },
  {
    id: 78,
    name: 'INSTITUTO DE CIÊNCIAS SOCIAIS',
    initials: 'ICS',
  },
  {
    id: 38,
    name: 'INSTITUTO DE FÍSICA',
    initials: 'IFD',
  },
  {
    id: 39,
    name: 'INSTITUTO DE GEOCIÊNCIAS',
    initials: 'IGD',
  },
  {
    id: 40,
    name: 'INSTITUTO DE LETRAS',
    initials: 'ILD',
  },
  {
    id: 41,
    name: 'INSTITUTO DE PSICOLOGIA',
    initials: 'IPD',
  },
  {
    id: 43,
    name: 'INSTITUTO DE QUÍMICA',
    initials: 'IQD',
  },
  {
    id: 44,
    name: 'INSTITUTO DE RELAÇÕES INTERNACIONAIS',
    initials: 'IREL',
  },
  {
    id: 79,
    name: 'REITORIA',
    initials: 'GRE',
  },
  {
    id: 80,
    name: 'SECRETARIA DE ADMINISTRACAO ACADEMICA',
    initials: 'SAA',
  },
];

export default departments;
