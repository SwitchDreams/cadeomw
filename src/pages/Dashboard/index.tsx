import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { FiBarChart2 } from 'react-icons/fi';
import {
  AiOutlineCluster,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import { BsArrowLeftRight, BsCalendarFill } from 'react-icons/bs';
import { MdLineStyle } from 'react-icons/md';
import { GoCheck } from 'react-icons/go';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import FeatureCard from '../../components/FeatureCard';
import {
  WavesContainer,
  LandingText,
  FirstTextContainer,
  FeaturesContainer,
  AboutFeatures,
  ListContainer,
  AboutUsContainer,
} from './styles';

import antigaUnB from '../../assets/unb_antiga.jpg';

import fotoBahia from '../../assets/perfil_bahia.jpeg';
import fotoBruna from '../../assets/perfil_bruna.png';
import fotoPedro from '../../assets/perfil_pedro.jpeg';
import fotoWaliff from '../../assets/perfil_waliff.png';
import fotoJapa from '../../assets/perfil_japa.jpeg';

/*
Página principal - Bahia
*/

const Dashboard: React.FC = () => {
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
        <div className="container">
          <h2>O que você vai encontrar aqui?</h2>
          <p>
            Com a recente notícia de que o Matrícula Web daria lugar para o
            SIGAA, muitos jovens universitários se viram surtados com um
            ambiente pouco intuitivo. Oferecemos um sistema que auxilia o
            processo de matrícula, dispondo informações úteis para o aluno de
            uma maneira mais amigável.
          </p>
        </div>
      </FirstTextContainer>

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
                title="Estatísticas"
                text="Navegue pelas disciplinas e tenha acesso a estatísticas de menções de semestres anteriores."
                Logo={FiBarChart2}
                logoColor="#39f7f1"
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
                title="Cursos"
                text="Relembre o fluxo do seu curso, já que você não memorizou e não sabe achar no SIGAA"
                Logo={AiOutlineCluster}
                logoColor="#7c4fe0"
              />
            </Grid>
          </Grid>
        </div>
      </FeaturesContainer>

      <AboutFeatures>
        <div className="container">
          <Grid container direction="row" justify="center" spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <ListContainer>
                <div className="title-text">
                  <h2>O que está por vir?</h2>
                  <p>É... não deu pra fazer tudo, mas em breve teremos:</p>
                </div>
                <ul>
                  <div>
                    <li>
                      <div className="logo">
                        <span>
                          <MdLineStyle style={{ fontSize: 30 }} />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Mostraremos a oferta dos departamentos de uma maneira
                          mais amigável, para que a sua única preocupação seja
                          conseguir a matéria.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="logo">
                        <span>
                          <BsCalendarFill style={{ fontSize: 25 }} />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Não sabe com que matéria ocupar a sua janela? O
                          gerador de grade horária irá te ajudar a passar menos
                          tempo no CA.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="logo">
                        <span>
                          <GoCheck style={{ fontSize: 30 }} />
                        </span>
                      </div>
                      <div className="text">
                        <p>
                          Qual turma escolher dentre as tantas opções? Migué ou
                          Hardcore? Visualize as estatísticas de menções dos
                          semestres anteriores divididas por turma.
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>
              </ListContainer>
            </Grid>
            <Hidden xsDown>
              <Grid item md={6}>
                <img src={antigaUnB} alt="unb" />
              </Grid>
            </Hidden>
          </Grid>
        </div>
      </AboutFeatures>

      <AboutUsContainer>
        <h2>Conheça os envolvidos</h2>
        <p>Descubra a motivação do projeto na página de contato!</p>
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
                  <h6>Pedro Auguto Duarte</h6>
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
              window.location.href = '/contact-us';
            }}
            variant="outline-light"
            style={{
              color: '#7c4fe0',
              borderColor: '#7c4fe0',
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
