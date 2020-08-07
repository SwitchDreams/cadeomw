import React, { useEffect, useState, FormEvent } from 'react';
import Axios from 'axios';
import { FiChevronRight } from 'react-icons/fi';
import Downshift from 'downshift';
import { apiCourses } from '../../services/api';

import { useToast } from '../../hooks/toasts';

import { Subjects, Form, QtdSearch, Select } from './styles';

import Header from '../../components/Header';
import Loading from '../../components/Loading';


/*
  Página de listagem de cursos - Waliff
*/

type Inputs = {
  subject: string;
};

interface Results {
  code: number;
  department: string;
  credit: number;
  name: string;
}

interface SubjectInfos {
  results: Results[];
  next: string;
  previous: string;
  count: number;
}

interface Book {
  name: string;
}

const ListSubjects: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [qtdResults, setQtdResults] = useState(false);
  const [searchSubject, setSearchSubject] = useState('');
  const [subjects, setSubjects] = useState<SubjectInfos>({
    results: [],
    next: '',
    previous: '',
    count: 0,
  });
  const { addToast } = useToast();
  const [WindowCheck, setWindowCheck] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    } else {
      setWindowCheck(false);
    }
  });

  useEffect(() => {
    const getSubjects = async () => {
      setLoading(true);
      try {
        const response = await apiCourses.get<SubjectInfos>(
          `subjects/?format=json`,
        );

        setSubjects(response.data);
        setLoading(false);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao carregar os cursos',
          description: 'Tente novamente mais tarde',
        });
      }
    };

    getSubjects();
  }, [addToast]);

  async function handlePagination(pag: string) {
    if (pag !== null) {
      setLoading(true);
      try {
        const response = await Axios.get<SubjectInfos>(`${pag}`);
        setSubjects(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao acessar novas páginas',
          description: 'Tente novamente mais tarde',
        });
      }
    }
  }

  async function handleSearchSubject(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await apiCourses.get<SubjectInfos>(
        `subjects/?search=${searchSubject}&format=json`,
      );
      setSubjects(response.data);
      setQtdResults(true);
      setLoading(false);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha na pesquisa',
        description: 'Tente novamente mais tarde',
      });
    }
    setSearchSubject('');
  }

  async function handleFilterSubject(e: any){
    console.log("entra aqui mesmo");
    setLoading(true);
    try {
      console.log(e.value);
      const response = await apiCourses.get<SubjectInfos>(
        `subjects/?search=${e.target.value}&format=json&department_only=true`,
      );
      setSubjects(response.data);
      setQtdResults(true);
      setLoading(false);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Falha na pesquisa',
        description: 'Tente novamente mais tarde',
      });
    }
  }

  const data: string[] = subjects.results.map(subject => {
    return subject.department;
  });

  return (
    <>
      <Header transparent={false} />

      <Form>
        <form onSubmit={handleSearchSubject}>
          <input
            value={searchSubject}
            onChange={e => setSearchSubject(e.target.value)}
            placeholder="Digite o nome do curso"
          />
          <button type="submit">Pesquisar</button>
        </form>

        <Select>
          <select onChange={handleFilterSubject}>
            <option selected value=""></option>
            <option value="CDT">Centro de Apoio ao Desenvolvimento Tecnológico - CDT</option>
            <option value="CDS">Centro de Desenvolvimento Sustentável - CDS</option>
            <option value="CEAM">Centro de Estudos Avançados e Multidisciplinares - CEAM</option>
            <option value="DAN">Departamento de Antropologia - DAN</option>
            <option value="CEN">Departamento de Artes Cênicas - CEN</option>
            <option value="VIS">Departamento de Artes Visuais - VIS</option>
            <option value="CEL">Departamento de Biologia Celular - CEL</option>
            <option value="BOT">Departamento de Botânica - BOT</option>
            <option value="CIC">Departamento de Ciência da Computação - CIC</option>
            <option value="CFS">Departamento de Ciências Fisiológicas - CFS</option>
            <option value="DIN">Departamento de Design - DIN</option>
            <option value="ECL">Departamento de Ecologia - ECL</option>
            <option value="ECO">Departamento de Economia - ECO</option>
            <option value="ENF">Departamento de Enfermagem - ENF</option>
            <option value="ENC">Departamento de Engenharia Civil e Ambiental - ENC</option>
            <option value="ENE">Departamento de Engenharia Elétrica</option>
            <option value="EFL">Departamento de Engenharia Florestal - EFL</option>
            <option value="ENM">Departamento de Engenharia Mecânica - ENM</option>
            <option value="EST">Departamento de Estatística - EST</option>
            <option value="ELA">Departamento de Estudos Latino-Americanos - ELA</option>
            <option value="FAR">Departamento de Farmácia - FAR</option>
            <option value="FIL">Departamento de Filosofia - FIL</option>
            <option value="FIT">Departamento de Fitopatologia - FIT</option>
            <option value="GEM">Departamento de Genética e Morfologia - GEM</option>
            <option value="GEA">Departamento de Geografia - GEA</option>
            <option value="HIS">Departamento de História - HIS</option>
            <option value="LET">Departamento de Línguas Estrangeiras e Tradução - LET</option>
            <option value="LIP">Departamento de Linguística, Português, Líng Clás - LIP</option>
            <option value="MAT">Departamento de Matemática - MAT</option>
            <option value="MUS">Departamento de Música - MUS</option>
            <option value="PPB">Departamento de Processos Psicologicos Básicos - PPB</option>
            <option value="PED">Departamento de Psic.Escolar e do Desenvolvimento - PED</option>
            <option value="PCL">Departamento de Psicologia Clínica - PCL</option>
            <option value="PST">Departamento de Psicologia Social e do Trabalho - PST</option>
            <option value="DSC">Departamento de Saúde Coletiva - DSC</option>
            <option value="SER">Departamento de Serviço Social - SER</option>
            <option value="SOL">Departamento de Sociologia - SOL</option>
            <option value="TEL">Departamento de Teoria Literária e Literatura - TEL</option>
            <option value="ZOO">Departamento de Zoologia - ZOO</option>
            <option value="CCA">Departamento de Ciências Contábeis e Atuariais - CCA</option>
            <option value="FAU">Direção da Faculdade de Arquitetura e Urbanismo - FAU</option>
            <option value="IBD">Direção do Instituto de Ciências Biológicas - IBD</option>
            <option value="FACE">Faculdade de Economia, Administração e Contabilidade - FACE</option>
            <option value="FAV">Faculdade de Agronomia e Medicina Veterinária - FAV</option>
            <option value="FCI">Faculdade de Ciência da Informação - FCI</option>
            <option value="FS">Faculdade de Ciências da Saúde - FS</option>
            <option value="FAC">Faculdade de Comunicação - FAC</option>
            <option value="FDD">Faculdade de Direito - FDD</option>
            <option value="FE">Faculdade de Educação - FE</option>
            <option value="FEF">Faculdade de Educação Física - FEF</option>
            <option value="FMD">Faculdade de Medicina - FMD</option>
            <option value="FT">Faculdade de Tecnologia - FT</option>
            <option value="IDA">Instituto de Artes - IDA</option>
            <option value="IPOL">Instituto de Ciência Política - IPOL</option>
            <option value="IB">Instituto de Ciências Biológicas - IB</option>
            <option value="IH">Instituto de Ciências Humanas - IH</option>
            <option value="IFD">Instituto de Física - IFD</option>
            <option value="IGD">Instituto de Geociências - IGD</option>
            <option value="IQD">Instituto de QUÍMICA - IQD</option>
            <option value="IREL">Instituto de Relações Internacionais - IREL</option>
            <option value="NMT">Núcleo de Medicina Tropical - NMT</option>
          </select>
        </Select>
      </Form>

      {loading && <Loading />}

      {qtdResults && !loading && (
        <QtdSearch>
          <div className="text-container">
            <p>Foram encontrados {subjects.count} resultados</p>
          </div>
        </QtdSearch>
      )}
      {!loading && (
        <Subjects window={WindowCheck}>
          {subjects.results.map(subject => (
            <a key={subject.code} href={`/${subject.code}`}>
              <div>
                <strong>
                  {subject.name.charAt(0).toUpperCase() +
                    subject.name.slice(1).toLowerCase()}
                </strong>
                <p>
                  Código: 
                  {subject.code}
                </p>
                <p>
                  Departamento: 
                  {subject.department}
                </p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}

          {!loading && (
            <div className="actions">
              <button
                type="button"
                disabled={subjects.previous == null}
                onClick={() => handlePagination(subjects.previous)}
              >
                Anterior
              </button>
              <button
                type="button"
                disabled={subjects.next == null}
                onClick={() => handlePagination(subjects.next)}
              >
                Próximo
              </button>
            </div>
          )}
        </Subjects>
      )}
    </>
  );
};

export default ListSubjects;
