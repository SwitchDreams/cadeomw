import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container, WaveContainer } from './styles';

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
  const [selectedLink, setSelectedLink] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 150;

      if (!isTop) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    });
  }, []);

  useEffect(() => {
    const location = window.location.pathname.split('/')[1];
    switch (location) {
      case '':
        setSelectedLink(1);
        break;
      case 'list-courses':
        setSelectedLink(2);
        break;
      case 'subjects':
        setSelectedLink(3);
        break;
      case 'about-us':
        setSelectedLink(4);
        break;
      default:
        break;
    }
  }, []);

  const menuItems = [
    { id: 1, name: 'Home', link: '/' },
    // { id: 2, name: 'Cursos', link: '/list-courses' },
    // { id: 3, name: 'Disciplinas', link: '/subjects' },
    // { id: 4, name: 'Sobre', link: '/about-us' },
  ];

  return (
    <Container scrolled={!navFixed} transparent={transparent}>
      <div className={navFixed ? 'scrolled' : ''}>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={navFixed ? 'fixed' : ''}
        >
          <Navbar.Brand href="/" style={{ color: navFixed ? '#222' : '#fff' }}>
            Cadê o MW ?
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {menuItems.map(menu => (
                <Nav.Link
                  href={menu.link}
                  className={selectedLink === menu.id ? 'active' : ''}
                  style={{ color: navFixed ? '#222' : '#fff' }}
                >
                  {menu.name}
                </Nav.Link>
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
