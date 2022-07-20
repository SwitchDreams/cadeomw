import React from 'react';
import turmasSeta from '../../../assets/turmasSeta.png';
import ensinoSeta from '../../../assets/ensinoSeta.png';
import cursos from '../../../assets/cursos.png';
import paginaCursos from '../../../assets/paginaCursos.png';
import curso from '../../../assets/curso.png';
import fluxoCurso from '../../../assets/fluxoCurso.png';

/*
  Página FAQ SIGAA - Bruna
*/

const OfferSigaa: React.FC = () => {
  return (
    <>
      <h3>Como posso ver a oferta desse semestre?</h3>
      <p>
        Bom, acessando o botão acima, basta clicar em{' '}
        <span className="negrito">Ensino</span> e depois em{' '}
        <span className="negrito">Turmas</span>. Assim você será redirecionado à
        uma página na qual pode escolher o semestre, o departamento e o nível de
        ensino - graduação, mestrado, doutorado, etc. - do qual deseja ver a
        oferta.
      </p>
      <img src={ensinoSeta} alt="oferta" />
      <img src={turmasSeta} alt="oferta" />

      <p>
        Para acessar os cursos ofertados pela UnB, basta fazer o mesmo caminho e
        clicar em <span className="negrito">Cursos de Graduação</span>. E em
        seguida filtrar pesquisando pelo nome do curso desejado.
      </p>
      <img src={cursos} alt="cursos" />
      <img src={paginaCursos} alt="cursos" />

      <p>
        Para visualizar informações sobre um curso específico, basta pesquisá-lo
        pelo nome e clicar na pequena lupa no canto direito da tabela. Lá
        encontraremos informações como: Quem é o atual coordenador, e-mail da
        coordenação entre outras. Para acessar o fluxo do curso, basta clicar na
        aba <span className="negrito">Ensino</span> e escolher a opção{' '}
        <span className="negrito">Currículo</span>.
      </p>
      <img src={curso} alt="cursos" />
      <img src={fluxoCurso} alt="cursos" />
    </>
  );
};

export default OfferSigaa;
