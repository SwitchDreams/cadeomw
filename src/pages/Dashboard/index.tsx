import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { BsArrowLeftRight } from 'react-icons/bs';
import { RiCalendarCheckLine } from 'react-icons/ri';
import {
  AiOutlineCluster,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import FeatureCard from '../../components/FeatureCard';

import calendar from '../../assets/ladingPage/calendar.svg';
import map from '../../assets/ladingPage/map.svg';
import search from '../../assets/ladingPage/search.svg';

import fotoBahia from '../../assets/perfil_bahia.jpeg';
import fotoBruna from '../../assets/perfil_bruna.png';
import fotoPedro from '../../assets/perfil_pedro.jpeg';
import fotoWaliff from '../../assets/perfil_waliff.png';
import fotoJapa from '../../assets/perfil_japa.jpeg';

import * as themes from '../../theme/schema.json';
import { getFromLS } from '../../utils/localStorage';

import {
  WavesContainer,
  LandingText,
  FirstTextContainer,
  FeaturesContainer,
  AboutUsContainer,
  YouWillFind,
} from './styles';
/*
Página principal - Bahia
Atualizações - Bruna
*/

const Dashboard: React.FC = () => {
  const [windowCheck, setWindowCheck] = useState(false);
  const [theme, setTheme] = useState(themes.data.light);

  useEffect(() => {
    const localTheme = getFromLS('theme');
    if (localTheme) setTheme(localTheme);
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
      <WavesContainer>
        <div className="curved">
          <Header transparent />

          <LandingText>
            <div className="space">
              <h1>Where tf is MW?</h1>
              <p>
                Encontre em um só lugar tudo o que você um dia soube onde
                encontrar
              </p>
            </div>
          </LandingText>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
            <path
              fill={theme.colors.body}
              fillOpacity="1"
              d="M0,128L40,112C80,96,160,64,240,80C320,96,400,160,480,176C560,192,640,160,720,122.7C800,85,880,43,960,32C1040,21,1120,43,1200,58.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            />
          </svg>
        </div>
      </WavesContainer>

      <FirstTextContainer>
        <div className="container">
          <h2>O que você vai encontrar aqui?</h2>
          <p>
            Com a notícia de que o Matrícula Web daria lugar ao SIGAA, muitos
            jovens universitários se viram surtados com um ambiente pouco
            intuitivo. <br /> Oferecemos um sistema que auxilia o processo de
            matrícula, dispondo informações úteis para o aluno de uma maneira
            mais amigável.
          </p>
        </div>
      </FirstTextContainer>

      <YouWillFind>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6} md={2} sm={6}>
            <img src={calendar} alt="calendar" />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <div className="grade">
              <h2>Gerador de grade automática</h2>
              <p>
                Escolha as matérias que deseja cursar, especifique as turmas que
                tem maior interesse, e deixe o gerador de grade automática fazer
                o trabalho para você!
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {windowCheck && (
            <Grid item xs={6} md={2} sm={6}>
              <img src={map} alt="map" />
            </Grid>
          )}
          <Grid item xs={12} md={6} sm={12}>
            <div className="grade">
              <h2>Mapa da UnB</h2>
              <p>
                É calouro e não sabe o que são essas siglas nem onde ficam as
                salas ? A gente pode te ajudar! Basta entrar no nosso mapa da
                UnB para se localizar.
              </p>
            </div>
          </Grid>
          {!windowCheck && (
            <Grid item xs={6} md={2} sm={6}>
              <img src={map} alt="map" />
            </Grid>
          )}
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6} md={2} sm={6}>
            <img src={search} alt="search" />
          </Grid>
          <Grid item xs={12} md={6} sm={12}>
            <div className="grade">
              <h2>FAQ SIGAA</h2>
              <p>
                Fica perdido quando tem que encontrar alguma informação no novo
                site da UnB ? Não consegue decifrar os horários da oferta ? Não
                se preocupe, nós preparamos um passo a passo que pode ajudar
                você!
              </p>
            </div>
          </Grid>
        </Grid>
      </YouWillFind>

      <FeaturesContainer>
        <div className="container">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={4} sm={12}>
              <FeatureCard
                title="Cursos"
                text="Relembre o fluxo do seu curso, já que você não memorizou e não sabe achar no SIGAA"
                Logo={AiOutlineCluster}
                logoColor="#7c4fe0"
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FeatureCard
                title="Equivalências"
                text="Veja em um único lugar as equivalências e pré-requisitos da disciplina selecionada"
                Logo={BsArrowLeftRight}
                logoColor="#f90"
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FeatureCard
                title="Oferta"
                text="Navegue pela oferta das disciplinas e escolha qual deseja cursar."
                Logo={RiCalendarCheckLine}
                logoColor="#39f7f1"
              />
            </Grid>
          </Grid>
        </div>
      </FeaturesContainer>

      <AboutUsContainer>
        <h2>Conheça os envolvidos</h2>
        <p>
          Descubra a motivação do projeto na página{' '}
          <span className="negrito">Sobre</span>!
        </p>
        <Container>
          <Row>
            <Col xs={12} md={{ span: 2, offset: 1 }}>
              <div className="person">
                <div className="profile">
                  <img src={fotoBahia} alt="avatar" />
                </div>
                <div className="contact">
                  <h6>João Pedro Assis</h6>
                  <div className="insta">
                    <AiFillInstagram />
                    <a href="https://www.instagram.com/joaopedro.assis.3">
                      {' '}
                      joaopedro.assis.3
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={2}>
              <div className="person">
                <div className="profile">
                  <img src={fotoBruna} alt="avatar" />
                </div>
                <div className="contact">
                  <h6>Bruna Azambuja</h6>
                  <div className="insta">
                    <AiFillInstagram />
                    <a href="https://www.instagram.com/bru_azambuja">
                      {' '}
                      bru_azambuja
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={2}>
              <div className="person">
                <div className="profile">
                  <img src={fotoWaliff} alt="avatar" />
                </div>
                <div className="contact">
                  <h6>Waliff Cordeiro</h6>
                  <div className="insta">
                    <AiFillInstagram />
                    <a href="https://www.instagram.com/waliff.cordeiro">
                      {' '}
                      waliff.cordeiro
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={2}>
              <div className="person">
                <div className="profile">
                  <img src={fotoPedro} alt="avatar" />
                </div>
                <div className="contact">
                  <h6>Pedro Augusto Duarte</h6>
                  <div className="face">
                    <AiFillFacebook />
                    <a href="https://www.facebook.com/profile.php?id=100003234917788">
                      {' '}
                      Pedro Augusto
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={2}>
              <div className="person">
                <div className="profile">
                  <img src={fotoJapa} alt="avatar" />
                </div>
                <div className="contact">
                  <h6>Lucas Azuma</h6>
                  <div className="insta">
                    <AiFillInstagram />
                    <a href="https://www.instagram.com/lucas_azuma">
                      {' '}
                      lucas_azuma
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="button">
          <Button
            onClick={() => {
              window.location.href = '/about-us';
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: theme.colors.color,
            }}
          >
            Saiba mais
          </Button>
        </div>
      </AboutUsContainer>
    </>
  );
};

export default Dashboard;
