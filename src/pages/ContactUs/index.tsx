import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';

import { useToast } from '../../hooks/toasts';
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
  const { addToast } = useToast();

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

  const copyPIXToClipboard = useCallback(() => {
    // Creates a dummy element, so we can copy it's value to clipboard
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = 'db634da0-9d53-433a-b5af-7f183d7058d3';
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    addToast({
      type: 'success',
      title: 'Chave PIX copiada!',
      description: 'Chave já foi copiada em seu clipboard.',
    });
  }, [addToast]);

  const copyPicPayToClipboard = useCallback(() => {
    // Creates a dummy element, so we can copy it's value to clipboard
    const dummy = document.createElement('textarea');
    document.body.appendChild(dummy);
    dummy.value = 'https://picpay.me/cadeomw';
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    addToast({
      type: 'success',
      title: 'Link PicPay copiado!',
      description: 'Chave já foi copiada em seu clipboard.',
    });
  }, [addToast]);

  return (
    <Container>
      <Header transparent={false} />

      <WhoWeAreContainer>
        <div className="container">
          <h2>Nos ajude a manter o projeto no ar!</h2>
          <p>
            Gostou do projeto? Quer que ele continue para outros semestres?{' '}
            <br />
            Nos ajude doando um valor simbólico para que possamos cobrir os
            custos de manter este site no ar. Qualquer ajuda é bem vinda!
          </p>

          <div className="flex-col space-between">
            <Button
              onClick={() => {
                copyPIXToClipboard();
              }}
              variant="outline-light"
              style={{
                color: '#7c4fe0',
                borderColor: '#7c4fe0',
                marginRight: 5,
              }}
            >
              Copiar chave PIX
            </Button>

            <Button
              onClick={() => {
                copyPicPayToClipboard();
              }}
              variant="outline-light"
              style={{
                color: '#7c4fe0',
                borderColor: '#7c4fe0',
                marginLeft: 5,
              }}
            >
              Copiar link PicPay
            </Button>
          </div>

        </div>
      </WhoWeAreContainer>

      <WhoWeAreContainer>
        <div className="container">
          <h2>Por que fizemos esse projeto?</h2>
          <p>
            A motivação para tirar essa ideia do papel surgiu após o lançamento
            do SIGAA, quando percebemos as dificuldades para realizar buscas
            simples no sistema. Diante de várias reclamações e memes sobre o
            assunto, aproveitamos para desenvolver um ambiente mais amigável e
            organizado, para que nós, alunos da UnB, possamos acessar as
            informações sobre as disciplinas de forma rápida e eficiente.
          </p>
          <p>
          Queremos deixar o nosso agradecimento à Marina Flores que produziu o material de 
          divulgação no primeiro semestre de 2021.
          </p>
        </div>
      </WhoWeAreContainer>

      <WhoWeAreContainer>
        <div className="container">
          <h4>E de onde a gente consegue esses dados?</h4>
          <p>
            Os dados utilizados pelo <span className="negrito">Cadê o MW?</span>{' '}
            são retirados diretamente do próprio SIGAA. O nosso sistema realiza
            a leitura automatizada do site oficial da UnB e as dispõe no{' '}
            <span className="negrito">Cadê o MW?</span> de uma forma muito mais
            intuitiva para o usuário. Atualizaremos as informações na maior
            frequência possível.
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
          <h4>Switch Dreams</h4>
          <p>
            A Switch Dreams é o nome da start up idealizada por estudantes de
            Engenharia de Computação da UnB. Eles compartilham o sonho de
            desenvolver soluções tecnológicas que impactem a sociedade. O{' '}
            <span className="negrito">Cadê o MW?</span> é a primeira solução de
            grande impacto da empresa.
          </p>
        </div>
      </WhoWeAreContainer>

      <CardsContainer window={windowCheck}>
        <div className="container">
          <div className="containercards">
            <div className="card">
              <div className="images">
                <img className="profile" src={fotoBahia} alt="profile" />
              </div>
              <div className="text">
                <h6>João Pedro Assis</h6>
                <p>
                  Fã de um festão, músico, cervejeiro, baiano e brincalhão.
                  Fundador da Switch Dreams.
                </p>
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
                  Fã de uma festa, jogadora de volei e adora aproveitar um
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
              </div>
              <div className="text">
                <h6>Pedro Augusto</h6>
                <p>
                  Fã dos e-sports, player da Green Owls. Fundador da Switch
                  Dreams.
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
              </div>

              <div className="text">
                <h6>Waliff Cordeiro</h6>
                <p>
                  Fã de churrasco, escoteiro, goiano e apreciador de um
                  vinhozinho. Fundador da Switch Dreams.
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

      <WhoWeAreContainer>
        <div className="container">
          <h5>Fale Conosco!</h5>
          <p>
            {' '}
            Gostou do site? Tem algo que pode melhorar? Lance o feedback brabo{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://forms.gle/Kfz7ZcnpghkkD8Dp7"
            >
              aqui
            </a>
            !
          </p>
          <p>Sem ninguém pra conversar? Coverse com a gente!</p>
          <div>
            <MdEmail /> cadeomw@gmail.com
          </div>
        </div>
        {/* <div className="contact-form">
          <p>
            Gostou do site? Tem algo que pode melhorar? Lanse o feedback brabo{' '}
            <a href="#">aqui</a>!
          </p>
        </div>
        <div className="contact-email">
          <p>Sem ninguém pra conversar? Coversa com a gente!</p>
          <MdEmail /> cadeomw@gmail.com
        </div> */}
      </WhoWeAreContainer>
    </Container>
  );
};

export default ContactUs;
