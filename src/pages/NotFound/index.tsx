import React from 'react';

import Header from '../../components/Header';

import { NotFoundContainer } from './styles';

/*
  Página 404 Not Found - Bruna
*/
const Course: React.FC = () => {
  return (
    <>
      <Header transparent={false} />

      <NotFoundContainer>
        <h2>404 - Página não encontrada!</h2>
      </NotFoundContainer>
    </>
  );
};

export default Course;
