import React from 'react';
import { Grid } from '@material-ui/core';
import { FiBarChart2 } from 'react-icons/fi';
import {
  AiOutlineCluster,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import { GrVmMaintenance } from 'react-icons/gr';
import { BsArrowLeftRight, BsFillEnvelopeFill, BsReplyFill} from 'react-icons/bs';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import FeatureCard from '../../components/FeatureCard';
import FeedbackCard from '../../components/FeedbackCard';
import {
  WavesContainer,
  LandingText,
  FirstTextContainer,
  FeaturesContainer,
  AboutFeatures,
  AboutUsContainer,
} from '../Dashboard/styles';

import fotoBahia from '../../assets/perfil_bahia.jpeg';
import fotoBruna from '../../assets/perfil_bruna.png';
import fotoPedro from '../../assets/perfil_pedro.jpeg';
import fotoWaliff from '../../assets/perfil_waliff.png';
import fotoJapa from '../../assets/perfil_japa.jpeg';

const Maintenance: React.FC = () => {
  return (
    <>
      <WavesContainer>
        <div className="curved">
          <Header transparent />

          <LandingText>
            <div className="space">
              <h1>Where tf is MW?</h1>
              <GrVmMaintenance style={{ fontSize: 100, color: '#7c4fe0' }} />
              <p>
                Estamos em manuntenção, fazendo um site melhor para você!!
                Voltaremos no próximo semestre!!
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
          <h2>O que pretendemos trazer de novidades no pŕoximo semestre?</h2>
          <p>
            Nesse semestre, focamos em mostrar detalhadamente as informações do
            seu curso, já no semestre que vem, nosso foco, será em auxiliar na
            matrícula, montando as melhores grades horárias e indicando as
            melhores disciplinas para você.
          </p>
        </div>
      </FirstTextContainer>

      <FeaturesContainer>
        <div className="container">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline"
            spacing={3}
          >
            <Grid item xs={12} md={4} sm={12}>
              <FeatureCard
                title="Grade automática"
                text="Escolha as materiás que você deseja pegar no semestre e montaremos sua grade com base em suas
                restrições de horários"
                Logo={FiBarChart2}
                logoColor="#39f7f1"
              />
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <FeatureCard
                title="Disponibilização da oferta"
                text="Teremos também informações sobre a oferta de forma mais detalhada e intuitiva"
                Logo={BsArrowLeftRight}
                logoColor="#f90"
              />
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <FeatureCard
                title="Outras funcionalidades"
                text="Contamos com sua criatividade para fazer um site melhor para comunidade academica"
                Logo={AiOutlineCluster}
                logoColor="#7c4fe0"
              />
            </Grid>
          </Grid>
        </div>
      </FeaturesContainer>

      <AboutFeatures>
        <div className="container align-content-center text-center">
          <FirstTextContainer>
            <div className="container">
              <h2 className="pb-5"> Cadê o MW? Em números</h2>
            </div>
          </FirstTextContainer>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={4} sm={12}>
              <h4> Visistantes únicos </h4>
              <h3> 12.000</h3>
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <h4> Total de visualizações </h4>
              <h3> 200.000 </h3>
            </Grid>
          </Grid>
        </div>
      </AboutFeatures>

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
              window.location.href = '/about-us';
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

      <FeaturesContainer>
        <div className="container">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Meu Deeeeus, vocês são MARAVILHOSOS, esse emailparabenizar pela iniciativa topissima, vocês são demais e ajudando demais, nós, meros mortais, perdidos no sigaa.
                Ameeei"
                response="Boa noite, agradecemos e muito o apoio, Ana Paula! É bem legal ver que nosso trabalho será útil e poderá auxiliar os estudantes que já sofrem tanto com outras coisas. O sistema não precisa ser mais um dos problemas né? Ao longo do uso da plataforma pode nos enviar as sugestões de melhoria, 
                mais uma vez, agradeço imensamente o apoio e a mensagem de carinho!"
                LogoMessage={BsFillEnvelopeFill}
                logoColor="#39f7f1"
                LogoResponse={BsReplyFill}
              />
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Meniciativa topissima, vocês são demais e ajudando demais, nós, meros mortais, perdidos no sigaa.
                Ameeei"
                response="Boa noite, agradecemos e muito o apoio, Ana Paula! É bem legal ver que nosso trabalho será útil e poderá auxiliar os estudantes que já sofrem tanto com outras coisas. O sistema não precisa ser mais um dos problemas né? Ao longo do uso da plataforma pode nos enviar as sugestões de melhoria, 
                mais uma vez, agradeço imensamente o apoio e a mensagem de carinho!"
                LogoMessage={BsFillEnvelopeFill}
                logoColor="#f90"
                LogoResponse={BsReplyFill}
              />
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Eu queria saber quais os horários que as matérias tão sendo ofertadas, porque no sigaa eu só sei olhar as que eu to matriculada, 
                mas queria ver as outras"
                response="Boa noite, agradecemos e muito o apoio, Ana Paula! É bem legal ver que nosso trabalho será útil e poderá auxiliar os estudantes que já sofrem tanto com outras coisas. O sistema não precisa ser mais um dos problemas né? Ao longo do uso da plataforma pode nos enviar as sugestões de melhoria, 
                mais uma vez, agradeço imensamente o apoio e a mensagem de carinho!"
                LogoMessage={BsFillEnvelopeFill}
                logoColor="#7c4fe0"
                LogoResponse={BsReplyFill}
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Meu Deeeeus, vocês são MARAVILHOSOS, esse email é só pra enaltecer vocês e parabenizar pela iniciativa topissima, vocês são demais e ajudando demais, nós, meros mortais, perdidos no sigaa.
                Ameeei"
                response="Boa noite, agradecemos e muito o apoio, Ana Paula! É bem legal ver que nosso trabalho será útil e poderá auxiliar os estudantes que já sofrem tanto com outras coisas. O sistema não precisa ser mais um dos problemas né? Ao longo do uso da plataforma pode nos enviar as sugestões de melhoria, 
                mais uma vez, agradeço imensamente o apoio e a mensagem de carinho!"
                LogoMessage={BsFillEnvelopeFill}
                logoColor="#f90"
                LogoResponse={BsReplyFill}
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Meu Deeeeus, vocês são MARAVILHOSOS, esse a, demais e ajudando demais, nós, meros mortais, perdidos no sigaa.
                Ameeei"
                response="Boa noite, agradecemos e muito o apoio, Ana Paula! É bem legal ver que nosso trabalho será útil e poderá auxiliar os estudantes que já sofrem tanto com outras coisas. O sistema não precisa ser mais um dos problemas né? Ao longo do uso da plataforma pode nos enviar as sugestões de melhoria, 
                mais uma vez, agradeço imensamente o apoio e a mensagem de carinho!"
                LogoMessage={BsFillEnvelopeFill}
                logoColor="#f90"
                LogoResponse={BsReplyFill}
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Meu Deeeeus, vocvocês são demais e ajudando demais, nós, meros mortais, perdidos no sigaa.
                Ameeei"
                response="Boa noite, agradecemos e muito o apoio, Ana Paula! É bem legal ver que nosso trabalho será útil e poderá auxiliar os estudantes que já sofrem tanto com outras coisas. O sistema não precisa ser mais um dos problemas né? Ao longo do uso da plataforma pode nos enviar as sugestões de melhoria, 
                mais uma vez, agradeço imensamente o apoio e a mensagem de carinho!"
                LogoMessage={BsFillEnvelopeFill}
                logoColor="#f90"
                LogoResponse={BsReplyFill}
              />
            </Grid>
          </Grid>
        </div>
      </FeaturesContainer>
    </>
  );
};

export default Maintenance;
