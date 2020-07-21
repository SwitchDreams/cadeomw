import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

/*
  Página principal - Bahia
*/

const Dashboard: React.FC = () => {
  return (
    <Container>
      Hello Front!
      <Link to="/course">Ir para página do curso</Link>
    </Container>
  );
};

export default Dashboard;
