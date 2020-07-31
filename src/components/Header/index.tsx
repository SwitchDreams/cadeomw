import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

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
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 150;

      if (!isTop) {
        console.log('Fixed');
        setNavFixed(true);
      } else {
        console.log('Not Fixed');
        setNavFixed(false);
      }
    });
  }, []);

  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Curso', link: '/courses/1741' },
    { name: 'Cursos', link: '/list-courses' },
    { name: 'Disciplinas', link: '/subjects' },
    { name: 'Contato', link: '/contact-us' },
  ];

  return (
    <Container transparent={transparent}>
      <div className={navFixed ? 'scrolled' : ''}>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={navFixed ? 'fixed' : ''}
        >
          <Navbar.Brand href="#home">MW-Melhorado</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {menuItems.map(menu => (
                <Nav.Link href={menu.link}>{menu.name}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
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
