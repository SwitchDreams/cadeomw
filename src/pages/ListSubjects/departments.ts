interface DepartmentProps {
  initials: string;
  name: string;
}

const departments: DepartmentProps[] = [
  {
    initials: 'CDT',
    name: 'CDT - C. de Apoio ao Desenvolvimento Tecnológico',
  },
  {
    initials: 'CDS',
    name: 'CDS - C. de Desenvolvimento Sustentável',
  },
  {
    initials: 'CEAM',
    name: 'CEAM - C. de Estudos Avançados e Multidisciplinares',
  },
  {
    initials: 'DAN',
    name: 'DAN - Dpt. de Antropologia',
  },
  {
    initials: 'CEN',
    name: 'CEN - Dpt. de Artes Cênicas',
  },
  {
    initials: 'VIS',
    name: 'VIS - Dpt. de Artes Visuais',
  },
  {
    initials: 'CEL',
    name: 'CEL - Dpt. de Biologia Celular',
  },
  {
    initials: 'BOT',
    name: 'BOT - Dpt. de Botânica',
  },
  {
    initials: 'CIC',
    name: 'CIC - Dpt. de Ciência da Computação',
  },
  {
    initials: 'CFS',
    name: 'CFS - Dpt. de Ciências Fisiológicas',
  },
  {
    initials: 'DIN',
    name: 'DIN - Dpt. de Design',
  },
  {
    initials: 'ECL',
    name: 'ECL - Dpt. de Ecologia',
  },
  {
    initials: 'ECO',
    name: 'ECO - Dpt. de Economia',
  },
  {
    initials: 'ENF',
    name: 'ENF - Dpt. de Enfermagem',
  },
  {
    initials: 'ENC',
    name: 'ENC - Dpt. de Engenharia Civil e Ambiental',
  },
  {
    initials: 'ENE',
    name: 'ENE - Dpt. de Engenharia Elétrica',
  },
  {
    initials: 'EFL',
    name: 'EFL - Dpt. de Engenharia Florestal',
  },
  {
    initials: 'ENM',
    name: 'ENM - Dpt. de Engenharia Mecânica',
  },
  {
    initials: 'EST',
    name: 'EST - Dpt. de Estatística',
  },
  {
    initials: 'ELA',
    name: 'ELA - Dpt. de Estudos Latino-Americanos',
  },
  {
    initials: 'FAR',
    name: 'FAR - Dpt. de Farmácia',
  },
  {
    initials: 'FIL',
    name: 'FIL - Dpt. de Filosofia',
  },
  {
    initials: 'FIT',
    name: 'FIT - Dpt. de Fitopatologia',
  },
  {
    initials: 'GEM',
    name: 'GEM - Dpt. de Genética e Morfologia',
  },
  {
    initials: 'GEA',
    name: 'GEA - Dpt. de Geografia',
  },
  {
    initials: 'HIS',
    name: 'HIS - Dpt. de História',
  },
  {
    initials: 'LET',
    name: 'LET - Dpt. de Línguas Estrangeiras e Tradução',
  },
  {
    initials: 'LIP',
    name: 'LIP - Dpt. de Linguística, Português, Líng Clás',
  },
  {
    initials: 'MAT',
    name: 'MAT - Dpt. de Matemática',
  },
  {
    initials: 'MUS',
    name: 'MUS - Dpt. de Música',
  },
  {
    initials: 'PPB',
    name: 'PPB - Dpt. de Processos Psicologicos Básicos',
  },
  {
    initials: 'PED',
    name: 'PED - Dpt. de Psic.Escolar e do Desenvolvimento',
  },
  {
    initials: 'PCL',
    name: 'PCL - Dpt. de Psicologia Clínica',
  },
  {
    initials: 'PST',
    name: 'PST - Dpt. de Psicologia Social e do Trabalho',
  },
  {
    initials: 'DSC',
    name: 'DSC - Dpt. de Saúde Coletiva',
  },
  {
    initials: 'SER',
    name: 'SER - Dpt. de Serviço Social',
  },
  {
    initials: 'SOL',
    name: 'SOL - Dpt. de Sociologia',
  },
  {
    initials: 'TEL',
    name: 'TEL - Dpt. de Teoria Literária e Literatura',
  },
  {
    initials: 'ZOO',
    name: 'ZOO - Dpt. de Zoologia',
  },
  {
    initials: 'CCA',
    name: 'CCA - Dpt. de Ciências Contábeis e Atuariais',
  },
  {
    initials: 'FAU',
    name: 'FAU - Direção da Fc. de Arquitetura e Urbanismo',
  },
  {
    initials: 'IBD',
    name: 'IBD - Direção do Instituto de Ciências Biológicas',
  },
  {
    initials: 'FACE',
    name: 'FACE - Fc. de Economia, Administração e Contabilidade',
  },
  {
    initials: 'FAV',
    name: 'FAV - Fc. de Agronomia e Medicina Veterinária',
  },
  {
    initials: 'FCI',
    name: 'FCI - Fc. de Ciência da Informação',
  },
  {
    initials: 'FS',
    name: 'FS - Fc. de Ciências da Saúde',
  },
  {
    initials: 'FAC',
    name: 'FAC - Fc. de Comunicação',
  },
  {
    initials: 'FDD',
    name: 'FDD - Fc. de Direito',
  },
  {
    initials: 'FE',
    name: 'FE - Fc. de Educação',
  },
  {
    initials: 'FEF',
    name: 'FEF - Fc. de Educação Física',
  },
  {
    initials: 'FMD',
    name: 'FMD - Fc. de Medicina',
  },
  {
    initials: 'FT',
    name: 'FT - Fc. de Tecnologia',
  },
  {
    initials: 'IDA',
    name: 'IDA - Inst. de Artes',
  },
  {
    initials: 'IPOL',
    name: 'IPOL - Inst. de Ciência Política',
  },
  {
    initials: 'IB',
    name: 'IB - Inst. de Ciências Biológicas',
  },
  {
    initials: 'IH',
    name: 'IH - Inst. de Ciências Humanas',
  },
  {
    initials: 'IFD',
    name: 'IFD - Inst. de Física',
  },
  {
    initials: 'IGD',
    name: 'IGD - Inst. de Geociências',
  },
  {
    initials: 'IQD',
    name: 'IQD - Inst. de QUÍMICA',
  },
  {
    initials: 'IREL',
    name: 'IREL - Inst. de Relações Internacionais',
  },
  {
    initials: 'NMT',
    name: 'NMT - Núcleo de Medicina Tropical',
  },
];

export default departments;
