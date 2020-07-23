import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/unb.svg';

import { Container, Faixa1, Faixa2, Menu, MenuText } from './styles';

/*
  Header - Componente geral
*/

const Header: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleMenuChange = useCallback((menu: string) => {
    setSelectedMenu(menu);
  }, []);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Curso', link: '/courses/1741' },
    { name: 'Cursos', link: '/list-courses' },
    { name: 'Disciplinas', link: '/subjects' },
    { name: 'Contato', link: '/contact-us' },
  ];

  return (
    <Container>
      <Faixa1>
        <img src={logoImg} alt="UnB" />
      </Faixa1>
      <Faixa2>
        <Menu>
          {menuItems.map(menu => (
            <Link to={menu.link} onClick={() => handleMenuChange(menu.name)}>
              <MenuText>{menu.name}</MenuText>
            </Link>
          ))}
        </Menu>
      </Faixa2>
    </Container>
  );
};

export default Header;
