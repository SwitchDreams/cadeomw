import React from 'react';

import logoImg from '../../assets/unb.svg';

import { Container, Faixa1, Faixa2, Menu, MenuText } from './styles';

/*
  Header - Componente geral
*/

const Header: React.FC = () => {
  return (
    <Container>
      <Faixa1>
        <img src={logoImg} alt="UnB" />
      </Faixa1>
      <Faixa2>
        <Menu>
          <MenuText>Home</MenuText>
          <MenuText>Cursos</MenuText>
          <MenuText>Disciplinas</MenuText>
          <MenuText>Contato</MenuText>
        </Menu>
      </Faixa2>
    </Container>
  );
};

export default Header;
