import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container } from './styles';

/*
  Página principal - Bahia
*/

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        Hello Front!
        <Link to="/course">Ir para página do curso</Link>
      </Container>
    </>
  );
};

export default Dashboard;
