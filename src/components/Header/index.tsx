import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import logoImg from '../../assets/unb.svg';

import { Container, Menu, MenuText } from './styles';

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
    { name: 'Curso', link: '/course' },
    { name: 'Cursos', link: '/list-courses' },
    { name: 'Disciplinas', link: '/subjects' },
    { name: 'Contato', link: '/contact-us' },
  ];

  return (
    <Container>
      <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Typography variant="h6">MW-Melhorado</Typography>
          <Menu>
            {menuItems.map(menu => (
              <Link
                key={menu.link}
                to={menu.link}
                onClick={() => handleMenuChange(menu.name)}
              >
                <MenuText>{menu.name}</MenuText>
              </Link>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
