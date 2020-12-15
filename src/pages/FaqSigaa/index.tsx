import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Title, Main } from './styles';
import turmasSeta from '../../assets/turmasSeta.png';
import ensinoSeta from '../../assets/ensinoSeta.png';
import diasDaSemana from '../../assets/diasDaSemana.png';
import exemploHorario from '../../assets/exemploHorario.png';
import turnos from '../../assets/turnos.png';
import horarios from '../../assets/horarios.png';
import cursos from '../../assets/cursos.png';
import paginaCursos from '../../assets/paginaCursos.png';
import emitirHistorico from '../../assets/emitirHistorico.png';
import docentes from '../../assets/docentes.png';
import trancamento from '../../assets/trancamento.png';
import curso from '../../assets/curso.png';
import fluxoCurso from '../../assets/fluxoCurso.png';

/*
  Página FAQ SIGAA - Bruna
*/

const FaqSigaa: React.FC = () => {
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
      <Title window={windowCheck}>Entenda o SIGAA</Title>
      <Main window={windowCheck}>
        <h3>
          E agora time cadeomw, não sei onde achar as coisas no SIGAA, como faço
          ?
        </h3>
        <p>
          Calma pequeno gafanhoto, a gente te ajuda! Achar as coisas no SIGAA
          foi e está sendo uma dificuldade para todos nós, mas preparamos um
          manualzinho que vai te ajudar a se localizar! <br /> Muitas das
          informações do SIGAA não precisa-se estar logado para serem acessadas,
          então basta entrar no link público e navegar pelas suas
          funcionalidades.
        </p>
        <div className="button">
          <Button
            onClick={() => {
              window.open('https://sig.unb.br/sigaa/public/home.jsf');
            }}
            variant="outline-light"
            style={{
              color: '#7c4fe0',
              borderColor: '#7c4fe0',
            }}
          >
            Ir para SIGAA público
          </Button>
        </div>

        <div className="oferta">
          <h3>Como posso ver a oferta desse semestre ?</h3>
          <p>
            Bom, entrando no link acima, basta clicar em{' '}
            <span className="negrito">Ensino</span> e depois em{' '}
            <span className="negrito">Turmas</span>. Assim você será
            redirecionado à uma página onde pode escolher o semestre, o
            departamento e o nível de ensino - graduação, mestrado, doutorado,
            etc. - do qual deseja ver a oferta.
          </p>
          <img src={ensinoSeta} alt="oferta" />
          <img src={turmasSeta} alt="oferta" />

          <p>
            Para acessar os cursos ofertados pela UnB, basta fazer o mesmo
            caminho e clicar em{' '}
            <span className="negrito">Cursos de Graduação</span>. E em seguida
            filtrar pesquisando pelo nome do curso desejado.
          </p>
          <img src={cursos} alt="cursos" />
          <img src={paginaCursos} alt="cursos" />

          <p>
            Para visualizar informações sobre um curso específico, basta
            pesquisá-lo pelo nome, e clicar na pequena lupa no canto direito da
            tabela. Lá encontraremos informações como quem é o atual
            coordenador, e-mail da coordenação entre outras. Para acessar o
            fluxo do curso, basta clicar na aba{' '}
            <span className="negrito">Ensino</span> e escolher a opção{' '}
            <span className="negrito">Currículo</span>.
          </p>
          <img src={curso} alt="cursos" />
          <img src={fluxoCurso} alt="cursos" />
        </div>

        <div className="horarios">
          <h3>Entendendo os horários</h3>
          <p>
            O formato de horários do novo padrão SIGAA deu o que comentar.
            Muitos alunos não sabem ainda como decifrar essa sigla, mas no fim
            das contas é bem simples: <br /> O horário é composto por números e
            letras que representam os dias e turnos da turma.
          </p>
          <img src={diasDaSemana} alt="horarios" />
          <img src={turnos} alt="horarios" />
          <img src={horarios} alt="horarios" />
          <img src={exemploHorario} alt="horarios" />
        </div>

        <div className="creditos">
          <h3>Onde foram parar meus créditos ?</h3>
          <p>
            O SIGAA não utiliza o padrão já conhecido de créditos que o MW
            usava. Agora, foi adotado um padrão de hora/aula. Cada crédito
            corresponde a 15 horas/aula, ou seja, uma disciplina de 2 créditos
            corresponde à 30 horas/aula, e assim por diante. Caso queira fazer a
            conversão inversa, basta dividir o número total de horas/aula por
            15!
          </p>
        </div>

        <div className="docentes">
          <h3>Onde encontro os professores ?</h3>
          <p>
            Para descobrir quais são os professores de cada departamento, basta
            entrar no portal público, na aba de{' '}
            <span className="negrito">Docentes</span> ou então na aba de{' '}
            <span className="negrito">Chefes, Coordenações e Diretores</span>{' '}
            para chefes de departamento, coordenadores de curso e diretores de
            unidade.
          </p>
          <img src={docentes} alt="docentes" />
        </div>

        <div className="documentos">
          <h3>Onde emito meu histórico escolar ?</h3>
          <p>
            Para isso, precisamos fazer o login na plataforma, com sua matrícula
            e sua senha! Depois, basta clicar no menu superior esquerdo com o
            nome <span className="negrito">Ensino</span> e{' '}
            <span className="negrito">Emitir Histórico</span>. Outros documentos
            podem ser emitidos pela mesma aba, como{' '}
            <span className="negrito">Declaração de Vínculo</span> e{' '}
            <span className="negrito">Atestado de Matrícula</span>.
          </p>
          <p>
            Além de emitir o Histórico, podemos acessar nossas notas em todas as
            disciplinas já cursadas sem precisar emitir nenhum documento. Basta
            entrar no link{' '}
            <span className="negrito">Consultar Minhas Notas</span> localizada
            na mesma aba.
          </p>
          <div className="button">
            <Button
              onClick={() => {
                window.open('https://autenticacao.unb.br/sso-server/login');
              }}
              variant="outline-light"
              style={{
                color: '#7c4fe0',
                borderColor: '#7c4fe0',
              }}
            >
              Fazer login SIGAA
            </Button>
          </div>
          <img src={emitirHistorico} alt="historico" />
        </div>

        <div className="retirada">
          <h3>Vish, não vai dar... Como retiro uma disciplina ?</h3>
          <p>
            A retirada de disciplina é pedida diretamente ao SAA. Ela pode ser
            feita online, ou por meio de e-mail para{' '}
            <span className="negrito">saa@unb.br</span>. Isto é feito para
            agilizar o processo de retirada, uma vez que a não é necessária a
            intervenção ou autorização da coordenação.
          </p>
        </div>

        <div className="trancamento">
          <h3>Como funciona o trancamento no SIGAA ?</h3>
          <p>
            O trancamento funciona da mesma forma, porém com nome diferente do
            que estávamos acostumados. O Trancamento Geral Automático agora se
            chama <span className="negrito">Suspensão de Programa</span>. E o
            Trancamento de Disciplina se chama{' '}
            <span className="negrito">
              Trancamento de Componente Curricular
            </span>
            . O processo de Trancamento pode ser revertido em até três dias pelo
            próprio sistema.
          </p>
          <img src={trancamento} alt="historico" />
        </div>
      </Main>
    </>
  );
};

export default FaqSigaa;
