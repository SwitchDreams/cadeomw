import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Code, AllInbox, Payment, Equalizer } from '@material-ui/icons';
import Grow from '@material-ui/core/Grow';

import api from '../../services/api';
import { useToast } from '../../hooks/toasts';

import Graphic from './graphic';
import Equivalence from './equivalence';
import Prereq from './prereq';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import {
  SubjectHeader,
  Container,
  InfoGeralContainer,
  InfoContainer,
} from './styles';

/*
  Página de Disciplina - Bruna
*/

export interface Prereq {
  credit: string;
  code: number;
  subject_name: string;
}

export interface Grades {
  semester: string;
  grades: {
    ss: number;
    ms: number;
    mm: number;
    mi: number;
    ii: number;
    sr: number;
    tr: number;
    tj: number;
  };
}

export interface Equivalence {
  coverage: string;
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

export interface Subject {
  name: string;
  credit: number;
  code: number;
  department: string;
  pass_percent: number;
  prerequisites: Prereq[][];
  grade_infos: Grades[];
  equivalences: Equivalence[];
}

const Subject: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [windowCheck, setWindowCheck] = useState(false);

  const [subject, setSubject] = useState<Subject | null>(null);

  const { addToast } = useToast();

  const { subject_id } = useParams();
  const history = useHistory();

  useEffect(() => {
    try {
      api.get(`subjects/${subject_id}/?format=json`).then(response => {
        setLoading(true);
        let subjectAPI = response.data;

        const newSubjectName =
          subjectAPI.name.charAt(0).toUpperCase() +
          subjectAPI.name.slice(1).toLowerCase();

        subjectAPI = { ...response.data, name: newSubjectName };

        setSubject(subjectAPI);
        setLoading(false);
      });
    } catch (err) {
      setLoading(false);

      addToast({
        type: 'error',
        title: 'Erro ao carregar a disciplina',
        description: 'Tente novamente mais tarde',
      });

      history.push(`/subjects`);
    }
  }, [subject_id, addToast, history]);

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

          <Equivalence window={windowCheck} subject={subject} />

          {subject.grade_infos && (
            <Graphic window={windowCheck} subject={subject} />
          )}

          <Prereq window={windowCheck} subject={subject} />
        </Container>
      )}
    </>
  );
};

export default Subject;
