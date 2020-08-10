import React, { useState, useEffect } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

import Header from '../../components/Header';

import fotoBahia from '../../assets/perfil_bahia.jpeg';
import fotoBruna from '../../assets/perfil_bruna.png';
import fotoPedro from '../../assets/perfil_pedro.jpeg';
import fotoWaliff from '../../assets/perfil_waliff.png';
import fotoJapa from '../../assets/perfil_japa.jpeg';
import logo from '../../assets/cloudy-sd.svg';

import { Container, WhoWeAreContainer, CardsContainer } from './styles';

const ContactUs: React.FC = () => {
  const [windowCheck, setWindowCheck] = useState(false);

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
    <Container>
      <Header transparent={false} />

      <WhoWeAreContainer>
        <div className="container">
          <h2>Por que fizemos esse projeto?</h2>
          <p>
            Nos vimos motivados a finalmente tirar essa ideia do papel quando o
            caos chamado SIGAA começou. Diante de várias reclamações e memes
            sobre o assunto, tiramos proveito da infinidade de tempo livre de
            quarentena - que logo terminaria, para desenvolver um ambiente mais
            amigável e organizado; para que nós, alunos da UnB, possamos passar
            menos tempo tendo a dor de cabeça de procurar qualquer informação
            útil naquele site.
          </p>
        </div>
      </WhoWeAreContainer>

      <WhoWeAreContainer>
        <div className="container">
          <h2>E de onde a gente consegue esses dados?</h2>
          <p>
            Os dados utilizados pelo sistema foram disponibilizados pela
            coordenação do curso de Engenharia de Computação, e foram exportados
            do Sigra (plataforma de acesso exclusivo de docentes). O nosso
            sistema realiza a leitura automatizada dos documentos e as dispõe
            nesse site. Atualizaremos os dados com a maior frequência possível,
            contando com a colaboração de professores/coordenadores parceiros.
          </p>
        </div>
      </WhoWeAreContainer>

      <WhoWeAreContainer>
        <div className="container">
          <img
            src={logo}
            alt="Switch Dreams"
            style={{ width: 100, height: 100 }}
          />
          <h2>Switch Dreams</h2>
          <p>
            A Switch Dreams é o nome da start up idealizada por três calouros
            durante um almoço no RU. Eles compartilham o sonho de desenvolver
            soluções tecnológicas que impactem a sociedade. Ao longo dos
            semestres a brincadeira ficou mais séria, e aqueles calouros estão
            cada vez mais próximos de torná-la realidade. O Cadê o MW? é a
            primeira de muitas iniciativas a ser de fato implementada.
          </p>
        </div>
      </WhoWeAreContainer>

      <WhoWeAreContainer>
        <div className="container">
          <h2>Quem somos nós?</h2>
          <p>
            Somos cinco alunos de Engenharia de computação da UnB, motivados
            pelo estresse do período de matrícula e pela oportunidade de
            compartilhar essas ferramentas que desenvolvemos com o máximo de
            gente que pudermos.
          </p>
        </div>
      </WhoWeAreContainer>

      <CardsContainer window={windowCheck}>
        <div className="container">
          <div className="containercards">
            <div className="card">
              <div className="images">
                <img className="profile" src={fotoBahia} alt="profile" />
                <img
                  className="switch-dreams"
                  src={logo}
                  alt="Switch Dreams"
                  style={{ width: 25, height: 25 }}
                />
              </div>
              <div className="text">
                <h6>João Pedro Assis</h6>
                <p>Fã de um festão, músico, cervejeiro, baiano e brincalhão.</p>
                <div className="link">
                  <AiOutlineGithub style={{ fontSize: 25 }} />
                  <a href="https://github.com/JoaoPedroAssis">JoaoPedroAssis</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="images">
                <img className="profile" src={fotoBruna} alt="profile" />
              </div>
              <div className="text">
                <h6>Bruna Azambuja</h6>
                <p>
                  Fã de uma festinha, jogadora de volei e adora aproveitar um
                  barzinho com os amigos.
                </p>
                <div className="link">
                  <AiOutlineGithub style={{ fontSize: 25 }} />
                  <a href="https://github.com/brunaazambuja">brunaazambuja</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="containercards">
            <div className="card">
              <div className="images">
                <img className="profile" src={fotoPedro} alt="profile" />
                <img
                  className="switch-dreams"
                  src={logo}
                  alt="Switch Dreams"
                  style={{ width: 25, height: 25 }}
                />
              </div>
              <div className="text">
                <h6>Pedro Augusto</h6>
                <p>
                  Fã dos e-sports, player da Green Owls e aspirante a
                  bodybuilder.
                </p>
                <div className="link">
                  <AiOutlineGithub style={{ fontSize: 25 }} />
                  <a href="https://github.com/PedroAugustoRamalhoDuarte">
                    PedroAugusto
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="images">
                <img className="profile" src={fotoWaliff} alt="profile" />
                <img
                  className="switch-dreams"
                  src={logo}
                  alt="Switch Dreams"
                  style={{ width: 25, height: 25 }}
                />
              </div>

              <div className="text">
                <h6>Waliff Cordeiro</h6>
                <p>
                  Fã de churrasco, escoteiro, goiano e apreciador de um
                  vinhozinho.
                </p>
                <div className="link">
                  <AiOutlineGithub style={{ fontSize: 25 }} />
                  <a href="https://github.com/waliffcordeiro">waliffcordeiro</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="containercards">
            <div className="card">
              <div className="images">
                <img className="profile" src={fotoJapa} alt="profile" />
              </div>
              <div className="text">
                <h6>Lucas Azuma</h6>
                <p>
                  Fã de cervejas de baixa qualidade, japonês, não sabe andar de
                  patinete.
                </p>
                <div className="link">
                  <AiOutlineGithub style={{ fontSize: 25 }} />
                  <a href="https://github.com/lucasazuma">lucasazuma</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardsContainer>
    </Container>
  );
};

export default ContactUs;
