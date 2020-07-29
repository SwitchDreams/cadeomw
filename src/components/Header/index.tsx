import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { Container, Menu, MenuText, WaveContainer } from './styles';

/*
  Header - Componente geral
*/

interface HeaderBackground {
  transparent: boolean;
}

const Header: React.FC<HeaderBackground> = ({
  transparent,
}: HeaderBackground) => {
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Curso', link: '/courses/1741' },
    { name: 'Cursos', link: '/list-courses' },
    { name: 'Disciplinas', link: '/subjects' },
    { name: 'Contato', link: '/contact-us' },
  ];

  return (
    <Container transparent={transparent}>
      <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Typography variant="h6">MW-Melhorado</Typography>
          <Menu>
            {menuItems.map(menu => (
              <Link key={menu.link} to={menu.link}>
                <MenuText>{menu.name}</MenuText>
              </Link>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      {!transparent && (
        <WaveContainer>
          <svg width="100%" height="200px" fill="none">
            <path
              fill="#fff"
              d="
                M 0 67
                C 273,183
                  822,-40
                  1920,106

                V 359
                H 0
                V 67
                Z"
            >
              <animate
                repeatCount="indefinite"
                fill="#454599"
                attributeName="d"
                dur="15s"
                values="
                    M0 77
                    C 473,283
                    822,-40
                      1920,116

                      V 359
                    H 0
                    V 67
                    Z;

                    M0 77
                    C 473,-40
                      1222,283
                      1920,136

                    V 359
                    H 0
                    V 67
                    Z;

                    M0 77
                    C 973,260
                    1722,-53
                    1920,120

                    V 359
                    H 0
                    V 67
                    Z;

                    M0 77
                    C 473,283
                    822,-40
                    1920,116

                    V 359
                    H 0
                    V 67
                    Z
                    "
              />
            </path>
          </svg>
        </WaveContainer>
      )}
    </Container>
  );
};

export default Header;
