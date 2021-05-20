import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Title, Main } from './styles';

const PrivacyTerms: React.FC = () => {
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
    <>
      <Header transparent={false} />
      <Title window={windowCheck}>Termos e Condições</Title>
      <Main window={windowCheck}>
        <h4>
          {' '}
          Por favor, leia com atenção os termos e condições. Ao utilizar o
          cadeomw.com.br você ESTÁ DE ACORDO COM AS CONDIÇÕES E TERMOS do
          Website.{' '}
        </h4>
        <p style={{ textAlign: 'justify', whiteSpace: 'pre-line' }}>
          1. SERVIÇOS OFERECIDOS {'\n'}
          1.1. Este TERMO se aplica para regular o uso do serviço oferecido pelo
          cadeomw.com.br aos usuários, qual seja, possibilitar a consulta o mapa
          da UnB, disciplinas, cursos, departamentos e gerar sua grade horária
          automaticamente.{'\n'}
          1.2. O serviço do cadeomw.com.br consiste, portanto, em aproximar,
          através do nosso site, os USUÁRIOS e as informações da Universidade de
          Brasília, possibilitando que os USUÁRIOS tenham, de mais fácil acesso,
          as informações necessárias para realização de suas matrículas, assim
          como maior senso de pertencimento e comunidade, uma vez que os
          usuários podem sugerir melhorias para o site.{'\n'}
          1.3. Desde logo fica esclarecido ao USUÁRIO - o qual se declara ciente
          - que o serviço oferecido pelo cadeomw.com.br se relaciona apenas à
          intermediação para consultas às informações disponibilizadas pela
          Universidade de Brasília através do https://sig.unb.br/sigaa/.{'\n'}
          2. OBRIGAÇÕES DO USUÁRIO{'\n'}
          2.1. Certificar-se que as informações são verdadeiras, uma vez que as
          informações aqui contidas são simplesmente repassadas a partir do
          https://sig.unb.br/sigaa/, não nos responsabilizamos pela veracidade e
          corretude das informações.{'\n'}
          3. OBRIGAÇÕES DO CADEOMW.COM.BR{'\n'}
          3.1. Proporcionar um ambiente mais confortável à comunidade acadêmica
          da Universidade de Brasília, trazendo, sempre que possível, melhorias
          de uso e novas funcionalidades, assim como as alterações sugeridas e
          relevantes.{'\n'}
          4. MODIFICAÇÕES DESTE TERMO{'\n'}
          4.1 O presente TERMO DE USO poderá, a qualquer tempo, ter seu
          conteúdo, ou parte dele, modificados para adequações e inserções, tudo
          com vistas ao aprimoramento dos serviços disponibilizados.{'\n'}
          4.2 As novas condições entrarão em vigência assim que forem veiculadas
          no site, sendo possível ao USUÁRIO manifestar oposição a quaisquer dos
          termos modificados, desde que o faça por escrito, através do e-mail
          cadeomw@gmail.com , o que não gera responsabilidade por parte do
          cadeomw.com.br de fazer as alterações sugeridas ou questionadas.{'\n'}
          5. ACEITAÇÃO DO TERMO DE USO 5.1 O USUÁRIO declara ter lido, entendido
          e que aceita todas as regras, condições e obrigações estabelecidas no
          presente TERMO.{'\n'}
          <pre>Última atualização: 27 de abril de 2021</pre>
        </p>
      </Main>
    </>
  );
};

export default PrivacyTerms;
