import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Code, AllInbox, Payment, Equalizer } from '@material-ui/icons';
import Grow from '@material-ui/core/Grow';

import api from '../../services/api';

import Equivalence from './equivalence';
import Oferta from './oferta';
import Prereq from './prereq';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import {
  SubjectHeader,
  Container,
  InfoGeralContainer,
  InfoContainer,
  NotExistingSubject,
} from './styles';

/*
  Página de Disciplina - Bruna
*/

export interface Prereq {
  credit: string;
  code: number;
  subject_name: string;
}

export interface Equivalence {
  direction: string;
  destination: {
    code: number;
    subject_name: string;
    credit: number;
  };
  subject: {
    code: number;
    subject_name: string;
    credit: number;
  };
  options: {
    code: number;
    name: string;
  }[];
}

export interface Oferta {
  turma: string;
  teachers: string[];
  horario: string[];
  vagasOfertadas: number;
  local: string | undefined;
}

export interface Subject {
  name: string;
  credit: number;
  code: number;
  department: string;
  pass_percent: number;
  status: string;
  prerequisites: Prereq[][];
  equivalences: Equivalence[];
  oferta: Oferta[];
}

interface RouteParams {
  id: string;
}

const Subject: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [windowCheck, setWindowCheck] = useState(false);

  const [subject, setSubject] = useState<Subject | null>(null);

  const params = useParams<RouteParams>();

  useEffect(() => {
    api.get(`subjects/${params.id}?format=json`).then(response => {
      const newData: Subject = response.data;

      if (newData) {
        const newOferta = newData.oferta.map(oferta => {
          const newProfs = oferta.teachers.map(prof => {
            const profString = prof.split(' ');

            const newProf = profString.map(string => {
              return string[0].toUpperCase() + string.substr(1).toLowerCase();
            });

            return newProf.join(' ');
          });

          return { ...oferta, teachers: newProfs };
        });
        setSubject({ ...newData, oferta: newOferta });
        setLoading(false);
      }
    });
  }, [params.id]);

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

  return (
    <>
      <Header transparent={false} />

      {loading && <Loading />}

      {subject && subject.pass_percent === 0 && (
        <NotExistingSubject>
          <SubjectHeader window={windowCheck}>{subject.name}</SubjectHeader>
          <h2>
            Disciplina não existe mais, ou não possuímos seus dados no Banco de
            Dados.
          </h2>
        </NotExistingSubject>
      )}

      {!loading && subject && subject.pass_percent !== 0 && (
        <Container>
          <SubjectHeader window={windowCheck}>{subject.name}</SubjectHeader>

          <Grow
            in={!loading}
            style={{ transformOrigin: '0 0 0' }}
            {...(!loading ? { timeout: 2000 } : {})}
          >
            <InfoGeralContainer>
              <InfoContainer>
                <Code style={{ color: '#7c4fe0' }} />
                <strong>Código:</strong>
                <p>{subject.code}</p>
              </InfoContainer>

              <InfoContainer>
                <AllInbox style={{ color: '#7c4fe0' }} />
                <strong>Departamento:</strong>
                <p>{subject.department}</p>
              </InfoContainer>

              <InfoContainer>
                <Payment style={{ color: '#7c4fe0' }} />
                <p>{`${subject.credit} créditos`}</p>
              </InfoContainer>

              <InfoContainer>
                <Equalizer style={{ color: '#7c4fe0' }} />
                <strong>Porcentagem de aprovação:</strong>
                <p>{`${Math.round(subject.pass_percent * 100)}%`}</p>
              </InfoContainer>
            </InfoGeralContainer>
          </Grow>

          <Oferta window={windowCheck} subject={subject} />

          <Equivalence window={windowCheck} subject={subject} />

          <Prereq window={windowCheck} subject={subject} />
        </Container>
      )}
    </>
  );
};

export default Subject;
