import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Code, AllInbox, Payment } from '@material-ui/icons';
import Grow from '@material-ui/core/Grow';

import api from '../../services/api';
import { useToast } from '../../hooks/toasts';

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
  CoreqContainer,
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
  name: string;
  semester: string;
  teachers: string[];
  total_vacancies: string;
  schedule: string[];
  place: string | undefined;
}

interface Coreq {
  code: string;
  credit: number;
  subject_name: string;
}

export interface Subject {
  name: string;
  credit: number;
  code: number;
  department_name: string;
  prerequisites: Prereq[][];
  equivalences: Equivalence[];
  offer: Oferta[];
  corequisites: Coreq[];
}

interface RouteParams {
  subject_id: string;
}

const Subject: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [windowCheck, setWindowCheck] = useState(false);
  const { addToast } = useToast();

  const [subject, setSubject] = useState<Subject | null>(null);

  const params = useParams<RouteParams>();

  useEffect(() => {
    try {
      api.get(`subjects/${params.subject_id}?format=json`).then(response => {
        const newData: Subject = response.data;

        if (newData) {
          const newOferta = newData.offer.map(oferta => {
            const newProfs = oferta.teachers.map(prof => {
              const profString = prof.split(' ');

              const newProf = profString.map(string => {
                return string[0].toUpperCase() + string.substr(1).toLowerCase();
              });

              return newProf.join(' ');
            });

            return { ...oferta, teachers: newProfs };
          });
          setSubject({ ...newData, offer: newOferta });
          setLoading(false);
        }
      });
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao carregar esta disciplina',
        description: 'Tente novamente mais tarde.',
      });
    }
  }, [params, addToast]);

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

      {!loading && subject && (
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
                <p>{subject.department_name}</p>
              </InfoContainer>

              <InfoContainer>
                <Payment style={{ color: '#7c4fe0' }} />
                <p>{`${subject.credit} horas`}</p>
              </InfoContainer>
            </InfoGeralContainer>
          </Grow>

          <Oferta window={windowCheck} subject={subject} />

          <Equivalence window={windowCheck} subject={subject} />

          <Prereq window={windowCheck} subject={subject} />

          {subject.corequisites.length !== 0 && (
            <CoreqContainer window={windowCheck}>
              <h4>Co-requisitos:</h4>
              {subject.corequisites.map(coreq => (
                <div key={coreq.subject_name} className="container">
                  <h5>{coreq.subject_name}</h5>
                  <p>
                    <strong>Carga Horária:</strong>
                    {coreq.credit}
                  </p>
                  <p>
                    <strong>Código:</strong>
                    {coreq.code}
                  </p>
                </div>
              ))}
            </CoreqContainer>
          )}
        </Container>
      )}
    </>
  );
};

export default Subject;
