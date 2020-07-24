import React from 'react';
import Header from '../../components/Header';
import { WavesContainer, LandingText, FirstTextContainer } from './styles';

/*
Página principal - Bahia
*/

const Dashboard: React.FC = () => {
  return (
    <>
      <WavesContainer>
        <div className="curved">
          <Header />

          <LandingText>
            <div className="space">
              <h4>Where tf is MW?</h4>
              <p>
                Encontre num só lugar tudo o que você um dia soube onde
                encontrar
              </p>
            </div>
          </LandingText>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,128L40,112C80,96,160,64,240,80C320,96,400,160,480,176C560,192,640,160,720,122.7C800,85,880,43,960,32C1040,21,1120,43,1200,58.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            />
          </svg>
        </div>
      </WavesContainer>

      <FirstTextContainer>
        <div>
          <h2>O que você vai encontrar aqui?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In deserunt
            ducimus qui labore architecto magni doloribus dolorum harum
            reiciendis vero tenetur dolore laboriosam, sit debitis libero nam
            similique sint vitae?
          </p>
        </div>
      </FirstTextContainer>
    </>
  );
};

export default Dashboard;
