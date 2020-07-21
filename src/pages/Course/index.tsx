import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, TabContainer, TabText } from './styles';

/*
  Página do curso - Bruna e Japa
*/

const Course: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <TabContainer>
          <Link to="/course/info">
            <TabText>Informações Gerais</TabText>
          </Link>
          <Link to="/course/graph">
            <TabText>Fluxograma</TabText>
          </Link>
          <Link to="/course/flux">
            <TabText>Fluxo</TabText>
          </Link>
        </TabContainer>
      </Container>
    </>
  );
};

export default Course;
