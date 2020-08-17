import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { BsCalendarFill } from 'react-icons/bs';
import {
  AiOutlineCluster,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import { FaWrench } from 'react-icons/fa';
import { MdLineStyle } from 'react-icons/md';

import { Container, Col, Row } from 'react-bootstrap';
import Header from '../../components/Header';
import CountUp from '../../components/CountUp';
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
import thanks from '../../assets/obrigado.jpg';

const Maintenance: React.FC = () => {
  const [renderCount, setRenderCount] = useState(false);

  function handleScroll() {
    if (window.pageYOffset > 1200) {
      setRenderCount(true);
      window.removeEventListener('scroll', () => {});
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', handleScroll);
    }
    watchScroll();
  });
  return (
    <>
      <WavesContainer>
        <div className="curved">
          <Header transparent />

          <LandingText>
            <div className="space">
              <h1>Where tf is Cadê o MW?</h1>
              <FaWrench style={{ fontSize: 80, color: '#fff' }} />
              <p>
                Estamos em manutenção, mas não se preocupe! Semestre que vem
                estaremos de volta!
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

      <div className="text-center">
        <p>Primeiramente:</p>

        <img src={thanks} alt="thanks" style={{ width: 300, height: 'auto' }} />
      </div>

      <FirstTextContainer>
        <div className="container">
          <h2>Por que o site está fora do ar?</h2>
          <p>
            Infelizmente algumas de nossas informações não estavam 100%
            atualizadas, haja vista que foram obtidas pelo SIGRA (que em breve
            será descontinuado). Além disso, os dados são de 2018 e todos nós
            sabemos que muita coisa mudou desde então.
          </p>
          <p>
            Após uma reunião com docentes da UnB, optamos por tirar o site do ar
            para não propagar informações desatualizadas, mas não se preocupe!
            Estaremos de volta no próximo período de matrícula!
          </p>
        </div>
      </FirstTextContainer>

      <FirstTextContainer>
        <div className="container">
          <h2>O que teremos de novo?</h2>
          <p>
            Nesse semestre, focamos em mostrar detalhadamente as informações do
            seu curso, pois muitos alunos sentiram dificuldades em acessá-las.
            No próximo semestre, nosso foco será em auxiliar na matrícula,
            montando as melhores grades horárias e indicando as melhores
            disciplinas para você.
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
                title="Montador de grade automático"
                text="Escolha as materiás que deseja no semestre e montaremos a grade para você"
                Logo={BsCalendarFill}
                logoColor="#39f7f1"
              />
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <FeatureCard
                title="Disponibilização da oferta"
                text="Teremos também informações sobre a oferta de forma mais detalhada e intuitiva"
                Logo={MdLineStyle}
                logoColor="#f90"
              />
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <FeatureCard
                title="Outras funcionalidades"
                text="Contamos com sua criatividade para fazer um site melhor para comunidade acadêmica"
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
              <h4> Visitantes únicos </h4>
              <h3>{renderCount && <CountUp startNum={0} endNum={12766} />}</h3>
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <h4> Total de visualizações </h4>
              <h3>{renderCount && <CountUp startNum={0} endNum={202182} />}</h3>
            </Grid>
          </Grid>
          <span style={{ color: '#ccc', fontSize: 12 }}>
            Dados retirados em 16/08/2020
          </span>
        </div>
      </AboutFeatures>
      {/*
      <div style={{ height: 30 }} /> */}
      <FirstTextContainer>
        <div className="container">
          <h2>Feedbacks</h2>
          <p>
            Apenas algumas das mensagens que nos fizeram muito felizes{' '}
            <span role="img" aria-label="face">
              🙃
            </span>
          </p>
        </div>
      </FirstTextContainer>

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
                message="Obrigada pela experiência, vcs são foda. N conheço já considero pacas."
                response="Obrigado por utilizar! Também consideramos pacas todos vocês!"
              />
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Ow namoral só queria agradecer mesmo! Que iniciativa foda 👏🏼👏🏼👏🏼 A plataforma tá sensacional, brabos! "
                response="Nós que agradecemos! Muito obrigado por ter usado o Cadê o MW? !"
              />
            </Grid>

            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Parabéns!!! Ficou muito legal! Espero ansiosa pelas promessas das novas funcionalidades!!! Desejo muito sucesso!!!"
                response="Nós também estamos ansiosos pelas novas funcionalidades, queremos que todos vocês tirem proveito delas! Aguarde os próximos capítulos heheh"
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Muito bom e intuitivo, a interface é linda de morrer, amei haja vista q sempre choro quando tenho q usar o SIGAA"
                response="Que bom que achou fácil de usar! Mas só pedimos para que você não morra com a interface antes de nos ver no próximo semestre!"
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Adorei a proposta do grupo! Parabéns pela iniciativa e pelo trabalho desenvolvido! Continuem assim! Vocês vão mudar o mundo!"
                response="Obrigado pelos elogios! Já que mudar o mundo é muito difícil, vamos trabalhar para mudar o nosso país UnB hahaha!"
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <FeedbackCard
                message="Gente, eu só queria agradecer mesmo, o site é top. Ainda não tá perfeito, mas já foi um baita alívio kkkkkk Eu coloquei a sugestão só pra não ser spam, mas eu só fui atrás do contato pra deixar meu muito obrigada."
                response="De fato, ainda está longe de ser perfeito (e talvez nunca seja), mas só de ter sido um baita alívio já nos deixa muito contentes! Obrigado por separar um tempinho pra nos agradecer!"
              />
            </Grid>
          </Grid>
        </div>
      </FeaturesContainer>

      <AboutUsContainer>
        <h2>O time</h2>
        {/* <p>
          Descubra a motivação do projeto na página{' '}
          <span className="negrito">Sobre</span>!
        </p> */}
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
      </AboutUsContainer>
    </>
  );
};

export default Maintenance;
