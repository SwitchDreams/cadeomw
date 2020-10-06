import React, { useState, useCallback, useEffect } from 'react';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import Overlay from 'pigeon-overlay';
import marker from '../../assets/marker.jpg';

import { locales } from './locales';
import Header from '../../components/Header';

import { MapContainer, LocalesList, Title } from './styles';

/*
  Página do Mapa - Bruna
*/

const MapComponent: React.FC = () => {
  function mapTilerProvider(x: number, y: number, z: number) {
    return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}.jpg`;
  }
  const [windowCheck, setWindowCheck] = useState(false);
  const [current, setCurrent] = useState('');
  const [image, setImage] = useState(marker);

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
                  : { backgroundColor: 'rgba(230, 230, 230, 0.3)' }
              }
              key={local.name}
              // onClick={() => setImage(local.image)}
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
          minZoom={15}
          min-width={1000}
          height={600}
        >
          {locales.map(local => (
            <Marker
              anchor={local.coordinates}
              payload={local.position}
              onClick={() => handleClickPin(local.name)}
              key={local.name}
            />
          ))}
          {/* <Overlay anchor={[-15.758246, -47.871024]}>
            {image !== marker && (
              <img
                style={{ width: '200px', height: '200px' }}
                alt={image}
                src={image}
              />
            )}
          </Overlay> */}
        </Map>
      </MapContainer>
    </>
  );
};

export default MapComponent;
