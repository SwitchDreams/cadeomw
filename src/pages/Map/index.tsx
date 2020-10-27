import React, { useState, FormEvent, useCallback, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';

import { locales } from './locales';
import Header from '../../components/Header';
import marker from '../../assets/marker.png';

import {
  MapContainer,
  LocalesList,
  Title,
  SearchButton,
  ModalText,
} from './styles';

/*
  Página do Mapa - Bruna
*/

const MapComponent: React.FC = () => {
  function mapTilerProvider(x: number, y: number, z: number) {
    return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}.jpg`;
  }
  const [modalShow, setModalShow] = useState(false);
  const [windowCheck, setWindowCheck] = useState(false);
  const [current, setCurrent] = useState('');
  let currentCoord = null;

  if (current !== '') {
    currentCoord = locales.filter(local => local.name === current)[0]
      .coordinates;

    currentCoord = [currentCoord[0] + 0.00059, currentCoord[1] - 0.00038];
  }

  const myElement = document.getElementById('list');

  if (myElement) {
    myElement.addEventListener('wheel', e => {
      e.stopPropagation();
      e.preventDefault();

      if (e.deltaY > 0) {
        myElement.scrollLeft += 30;
      } else {
        myElement.scrollLeft -= 30;
      }
    });
  }

  const handleClickPin = useCallback(
    (pin: string) => {
      if (myElement) {
        const localPos = locales.filter(local => pin === local.name);
        const width = windowCheck ? 220 : 270; // centralizando o escolhido
        const deviation = windowCheck ? 1.5 : 4; // tanto para celular quanto web

        myElement.scrollTo({
          left: (localPos[0].position - deviation) * width,
          behavior: 'smooth',
        });
      }
      setCurrent(pin);
    },
    [myElement, windowCheck],
  );

  const handleSearch = useCallback(
    (pin: string) => {
      const filteredLocales = locales.filter(local =>
        local.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            pin
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, ''),
          ),
      );

      if (filteredLocales.length === 0) {
        return;
      }
      setCurrent(filteredLocales[0].name);

      if (myElement) {
        const localPos = filteredLocales[0].position;
        const width = windowCheck ? 220 : 270; // centralizando o escolhido
        const deviation = windowCheck ? 1.5 : 4; // tanto para celular quanto web

        myElement.scrollTo({
          left: (localPos - deviation) * width,
          behavior: 'smooth',
        });
      }
    },
    [myElement, windowCheck],
  );

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    }
  }, []);

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1000) {
      setWindowCheck(true);
    } else {
      setWindowCheck(false);
    }
  });

  return (
    <>
      <Header transparent={false} />
      <MapContainer>
        <Title>
          <h2>Mapa da UnB</h2>
        </Title>

        <SearchButton>
          <button type="submit" onClick={() => setModalShow(true)}>
            Pesquisar
          </button>
        </SearchButton>

        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <ModalText>
            <form onSubmit={handleSubmit}>
              <input
                onChange={event => {
                  handleSearch(event.target.value);
                }}
                placeholder="Digite a sigla do local"
              />
            </form>
          </ModalText>
        </Modal>

        <LocalesList window={windowCheck} id="list">
          {locales.map(local => (
            <li
              style={
                local.name === current
                  ? {
                      backgroundColor: '#7c4fe0',
                      color: '#fff',
                      borderRadius: '7px',
                    }
                  : {}
              }
              key={local.name}
              onClick={() => setCurrent(local.name)}
            >
              <h5>{local.name}</h5>
              <p>{local.complete}</p>
            </li>
          ))}
        </LocalesList>

        <Map
          provider={mapTilerProvider}
          center={[-15.763013, -47.863191]}
          defaultZoom={16}
          maxZoom={16}
          minZoom={16}
          min-width={1000}
          height={window.innerHeight * 0.5}
        >
          {locales.map(local => (
            <Marker
              anchor={local.coordinates}
              payload={local.position}
              onClick={() => handleClickPin(local.name)}
              key={local.name}
            />
          ))}
          {current !== '' && currentCoord && (
            <Overlay
              anchor={currentCoord}
              style={{ width: '50px', height: '50px' }}
            >
              <img
                id="overlay"
                style={{
                  position: 'absolute',
                  width: '34px',
                  height: '30px',
                }}
                alt={marker}
                src={marker}
              />
            </Overlay>
          )}
        </Map>
      </MapContainer>
    </>
  );
};

export default MapComponent;
