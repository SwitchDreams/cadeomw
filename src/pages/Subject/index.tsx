import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Book } from '@material-ui/icons';

import api from '../../services/api';

import Header from '../../components/Header';
import FeatureCard from '../../components/FeatureCard';
import Loading from '../../components/Loading';

import { FeaturesContainer } from './styles';

/*
  Página de Disciplina - Bruna
*/

export interface Subject {
  subject_name: string;
  credit: number;
  status: string | undefined;
  pass_percent: number;
}

const Subject: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const subject = {
    subject_name: 'Probabilidade e Estatística',
    status: 'obrigatória',
    credit: 4,
    pass_percent: 0.58,
  };

  useEffect(() => {
    api
      .get(`https://mw-melhorado-app.herokuapp.com/subjects/202328?format=json`)
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />

      {loading && <Loading />}

      {!loading && (
        <FeaturesContainer>
          <div className="container">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={12} md={4} sm={12}>
                <FeatureCard
                  title="Fully functional"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
                  Logo={Book}
                  logoColor="#7c4fe0"
                />
              </Grid>

              <Grid item xs={12} md={4} sm={12}>
                <FeatureCard
                  title="Fully functional"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
                  Logo={Book}
                  logoColor="#7c4fe0"
                />
              </Grid>

              <Grid item xs={12} md={4} sm={12}>
                <FeatureCard
                  title="Fully functional"
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos."
                  Logo={Book}
                  logoColor="#7c4fe0"
                />
              </Grid>
            </Grid>
          </div>
        </FeaturesContainer>
      )}
    </>
  );
};

export default Subject;
