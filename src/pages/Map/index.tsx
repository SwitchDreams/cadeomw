import React, { useState, useCallback, useEffect } from 'react';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import { locales } from './locales';
import Header from '../../components/Header';

import { MapContainer, LocalesList, Title } from './styles';

/*
  Página do Mapa - Bruna
    comentários: tentei separar os marcadores em outro arquivo, para
    ficar mais organizado e etc, porém não deu certo pois preciso de
    funções que estão neste arquivo, e o TS não aceita exportação
    dentro de componente. E também não poderia transferir as funções
    para o outro arquivo, por que preciso de seus atributoes neste componente.
*/

const MapComponent: React.FC = () => {
  function mapTilerProvider(x: number, y: number, z: number) {
    return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}.jpg`;
  }
  const [windowCheck, setWindowCheck] = useState(false);
  const [current, setCurrent] = useState('');

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
          height={700}
        >
          <Marker
            anchor={[-15.765269, -47.867354]}
            payload={1}
            onClick={() => handleClickPin('ICC Sul')}
          />
          <Marker
            anchor={[-15.761304, -47.87039]}
            payload={1}
            onClick={() => handleClickPin('ICC Norte')}
          />
          <Marker
            anchor={[-15.764071, -47.87054]}
            payload={1}
            onClick={() => handleClickPin('RU')}
          />
          <Marker
            anchor={[-15.758423, -47.870175]}
            payload={1}
            onClick={() => handleClickPin('PJC')}
          />
          <Marker
            anchor={[-15.759182, -47.870776]}
            payload={2}
            onClick={() => handleClickPin('PAT')}
          />
          <Marker
            anchor={[-15.75706, -47.871296]}
            payload={1}
            onClick={() => handleClickPin('BSA Norte')}
          />
          <Marker
            anchor={[-15.76706, -47.866538]}
            payload={1}
            onClick={() => handleClickPin('BSA Sul')}
          />
          <Marker
            anchor={[-15.761087, -47.867879]}
            payload={1}
            onClick={() => handleClickPin('BCE')}
          />
          <Marker
            anchor={[-15.763789, -47.872505]}
            payload={1}
            onClick={() => handleClickPin('FT')}
          />
          <Marker
            anchor={[-15.761532, -47.873929]}
            payload={1}
            onClick={() => handleClickPin('ULEG')}
          />
          <Marker
            anchor={[-15.765228, -47.872457]}
            payload={1}
            onClick={() => handleClickPin('SG 12')}
          />
          <Marker
            anchor={[-15.76484, -47.872092]}
            payload={1}
            onClick={() => handleClickPin('SG 11')}
          />
          <Marker
            anchor={[-15.7656, -47.870429]}
            payload={1}
            onClick={() => handleClickPin('IDA')}
          />
          <Marker
            anchor={[-15.759312, -47.87236]}
            payload={1}
            onClick={() => handleClickPin('FD')}
          />
          <Marker
            anchor={[-15.758455, -47.871641]}
            payload={1}
            onClick={() => handleClickPin('FACE')}
          />
          <Marker
            anchor={[-15.758538, -47.868973]}
            payload={1}
            onClick={() => handleClickPin('CIC/EST')}
          />
          <Marker
            anchor={[-15.762872, -47.866942]}
            payload={1}
            onClick={() => handleClickPin('Reitoria')}
          />
          <Marker
            anchor={[-15.765763, -47.865794]}
            payload={1}
            onClick={() => handleClickPin('IB')}
          />
          <Marker
            anchor={[-15.76313, -47.860644]}
            payload={1}
            onClick={() => handleClickPin('FEF')}
          />
          <Marker
            anchor={[-15.774622, -47.866812]}
            payload={1}
            onClick={() => handleClickPin('CDT')}
          />
          <Marker
            anchor={[-15.76328, -47.857806]}
            payload={1}
            onClick={() => handleClickPin('CO')}
          />
          <Marker
            anchor={[-15.758293, -47.869441]}
            payload={1}
            onClick={() => handleClickPin('IPOL/IREL')}
          />
          <Marker
            anchor={[-15.763108, -47.871206]}
            payload={1}
            onClick={() => handleClickPin('MASC Central')}
          />
          <Marker
            anchor={[-15.767823, -47.86554]}
            payload={1}
            onClick={() => handleClickPin('MASC Sul')}
          />
          <Marker
            anchor={[-15.758246, -47.871024]}
            payload={1}
            onClick={() => handleClickPin('MASC Norte')}
          />
          <Marker
            anchor={[-15.76854, -47.864817]}
            payload={1}
            onClick={() => handleClickPin('IQ')}
          />
          <Marker
            anchor={[-15.768623, -47.866806]}
            payload={1}
            onClick={() => handleClickPin('FS')}
          />
        </Map>
      </MapContainer>
    </>
  );
};

export default MapComponent;
