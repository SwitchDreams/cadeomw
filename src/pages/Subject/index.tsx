import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import {
  Book,
  Code,
  AllInbox,
  Payment,
  Equalizer,
  Check,
} from '@material-ui/icons';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';

import api from '../../services/api';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import {
  FeaturesContainer,
  SubjectHeader,
  Container,
  PrereqContainer,
  NoPrereq,
  FeatureCardContainer,
  CardTitleContainer,
  OrLine,
  InfoGeralContainer,
  InfoContainer,
} from './styles';

/*
  Página de Disciplina - Bruna
*/

interface Prereq {
  departament: string;
  subject_name: string;
}

interface Subject {
  name: string;
  credit: number;
  code: number;
  department: string;
  status: string | undefined;
  pass_percent: number;
  prerequisites: Prereq[][];
}

const Subject: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [windowCheck, setWindowCheck] = useState(false);

  const [subject, setSubject] = useState<Subject | null>(null);

  const { subject_id } = useParams();
  const history = useHistory();

  // setSubject({
  //   subject_name: 'Probabilidade e Estatística',
  //   status: 'obrigatória',
  //   credit: 4,
  //   department: 'ADM',
  //   code: 289076,
  //   pass_percent: 0.58,
  //   prerequisites: [
  //     [
  //       {
  //         department: 'ADM',
  //         name: 'Adm Financeira e Orçamentária',
  //       },
  //     ],
  //     [
  //       {
  //         department: 'MUS',
  //         name: 'Abordagens C Est Organizações',
  //       },
  //       {
  //         department: 'FGA',
  //         name: 'Ação Colet Formação de Grupos',
  //       },
  //       {
  //         department: 'FGA',
  //         name: 'Ação Colet Formação de Grupos',
  //       },
  //     ],
  //     [
  //       {
  //         department: 'MUS',
  //         name: 'Abordagens C Est Organizações',
  //       },
  //       {
  //         department: 'FGA',
  //         name: 'Ação Colet Formação de Grupos',
  //       },
  //     ],
  //   ],
  // });

  useEffect(() => {
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
  }, [subject_id]);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    }
  }, []);

  const handleNewSubject = useCallback(
    (subject_code: string) => {
      history.push(`/subjects/${subject_code}/?format=json`);
    },
    [history],
  );

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    } else {
      setWindowCheck(false);
    }
  });

  return (
    <>
      <Header />

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
                <Check style={{ color: '#7c4fe0' }} />
                <strong>Status:</strong>
                <p>{subject.status}</p>
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

          <FeaturesContainer window={windowCheck}>
            <div className="container">
              <h4>Pré-requisitos:</h4>

              {subject.prerequisites.length === 0 && (
                <NoPrereq window={windowCheck}>
                  Disciplina não possui pré-requisitos.
                </NoPrereq>
              )}

              {subject.prerequisites.map(prerequisite => (
                <>
                  <Fade in={!loading} timeout={{ enter: 2000 }}>
                    <PrereqContainer window={windowCheck}>
                      {prerequisite.map(subjectPrereq => (
                        <FeatureCardContainer
                          key={subjectPrereq.subject_name}
                          window={windowCheck}
                          onClick={() => handleNewSubject('118036')}
                        >
                          <Book style={{ color: '#7c4fe0' }} />
                          <CardTitleContainer window={windowCheck}>
                            <h3>{subjectPrereq.subject_name}</h3>
                            <p>{`Departamento: ${subjectPrereq.departament}`}</p>
                          </CardTitleContainer>
                        </FeatureCardContainer>
                      ))}
                    </PrereqContainer>
                  </Fade>
                  {subject.prerequisites[subject.prerequisites.length - 1] !==
                    prerequisite && (
                    <OrLine>
                      <p>----</p>
                      <p>OU</p>
                      <p>----</p>
                    </OrLine>
                  )}
                </>
              ))}
            </div>
          </FeaturesContainer>
        </Container>
      )}
    </>
  );
};

export default Subject;
