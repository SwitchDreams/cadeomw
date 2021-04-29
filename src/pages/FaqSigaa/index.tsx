import React, {
  useState,
  useEffect,
  useCallback,
  FormEvent,
  useRef,
} from 'react';
import { Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Header from '../../components/Header';
import turmasSeta from '../../assets/turmasSeta.png';
import ensinoSeta from '../../assets/ensinoSeta.png';
import diasDaSemana from '../../assets/faq-dias.png';
import exemploHorario from '../../assets/faq-exemplo.png';
import turnos from '../../assets/faq-turnos.png';
import horarios from '../../assets/faq-horarios.png';
import cursos from '../../assets/cursos.png';
import paginaCursos from '../../assets/paginaCursos.png';
import emitirHistorico from '../../assets/emitirHistorico.png';
import docentes from '../../assets/docentes.png';
import trancamento from '../../assets/trancamento.png';
import curso from '../../assets/curso.png';
import fluxoCurso from '../../assets/fluxoCurso.png';
import { parseHorario } from '../../utils/parseOferta';

import { Title, Main } from './styles';
import * as themes from '../../theme/schema.json';
import { getFromLS } from '../../utils/localStorage';

/*
  Página FAQ SIGAA - Bruna
*/

const FaqSigaa: React.FC = () => {
  const [windowCheck, setWindowCheck] = useState(false);
  const [sigla, setSiglaValue] = useState('');
  const [parse, setParse] = useState('');
  const [theme, setTheme] = useState(themes.data.light);

  useEffect(() => {
    const localTheme = getFromLS('theme');
    if (localTheme) setTheme(localTheme);
  }, []);

  const horariosRef = useRef<null | HTMLDivElement>(null);
  const ofertaRef = useRef<null | HTMLDivElement>(null);
  const creditosRef = useRef<null | HTMLDivElement>(null);
  const docentesRef = useRef<null | HTMLDivElement>(null);
  const documentosRef = useRef<null | HTMLDivElement>(null);
  const retiradaRef = useRef<null | HTMLDivElement>(null);
  const trancamentoRef = useRef<null | HTMLDivElement>(null);

  const handleSubmitValue = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }, []);

  const handleSubmit = useCallback(() => {
    if (sigla !== '') setParse(parseHorario(sigla));
  }, [sigla]);

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
          E agora time cadeomw, não sei onde achar as coisas no SIGAA, como
          faço?
        </h3>
        <p>
          Calma pequeno gafanhoto, a gente te ajuda! Achar as coisas no SIGAA
          foi e está sendo uma dificuldade para todos nós, mas preparamos um
          manualzinho com as principais dúvidas que pode te ajudar a se
          localizar! <br /> Todas as informações foram obtidas através do FAQ
          desenvolvido pela própria UnB, em seu site. <br />
          Importante lembrar que nosso tutorial não substitui o site oficial da
          UnB, e não nos responsabilizamos por qualquer desinformação que este
          tutorial possa vir a causar.
        </p>
        <p>
          Muitas das informações do SIGAA não exigem que você esteja logado para
          acessar, então basta entrar no link público e navegar pelas suas
          funcionalidades.
        </p>
        <div className="button">
          <Button
            onClick={() => {
              window.open('https://sig.unb.br/sigaa/public/home.jsf');
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: theme.colors.color,
            }}
          >
            Ir para SIGAA público
          </Button>
        </div>
        <p>Escolha qual seção deseja visitar primeiro:</p>
        <div className="summary">
          <Button
            onClick={() => {
              const node = ofertaRef.current;
              if (node) node.scrollIntoView();
              window.scrollBy(0, -200);
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: 'transparent',
            }}
          >
            Como posso ver a oferta desse semestre?
          </Button>
          <Button
            onClick={() => {
              const node = horariosRef.current;
              if (node) node.scrollIntoView();
              window.scrollBy(0, -200);
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: 'transparent',
            }}
          >
            Entendendo os horários
          </Button>
          <Button
            onClick={() => {
              const node = creditosRef.current;
              if (node) node.scrollIntoView();
              window.scrollBy(0, -200);
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: 'transparent',
            }}
          >
            Onde foram parar meus créditos?
          </Button>
          <Button
            onClick={() => {
              const node = docentesRef.current;
              if (node) node.scrollIntoView();
              window.scrollBy(0, -200);
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: 'transparent',
            }}
          >
            Onde encontro os professores?
          </Button>
          <Button
            onClick={() => {
              const node = documentosRef.current;
              if (node) node.scrollIntoView();
              window.scrollBy(0, -200);
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: 'transparent',
            }}
          >
            Onde emito meu histórico escolar?
          </Button>
          <Button
            onClick={() => {
              const node = retiradaRef.current;
              if (node) node.scrollIntoView();
              window.scrollBy(0, -200);
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: 'transparent',
            }}
          >
            Vish, não vai dar... Como retiro uma disciplina?
          </Button>
          <Button
            onClick={() => {
              const node = trancamentoRef.current;
              if (node) node.scrollIntoView();
              window.scrollBy(0, -200);
            }}
            variant="outline-light"
            style={{
              color: theme.colors.color,
              borderColor: 'transparent',
            }}
          >
            Como funciona o trancamento no SIGAA?
          </Button>
        </div>

        <div className="oferta" ref={ofertaRef}>
          <h3>Como posso ver a oferta desse semestre?</h3>
          <p>
            Bom, acessando o botão acima, basta clicar em{' '}
            <span className="negrito">Ensino</span> e depois em{' '}
            <span className="negrito">Turmas</span>. Assim você será
            redirecionado à uma página na qual pode escolher o semestre, o
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
            pesquisá-lo pelo nome e clicar na pequena lupa no canto direito da
            tabela. Lá encontraremos informações como: Quem é o atual
            coordenador, e-mail da coordenação entre outras. Para acessar o
            fluxo do curso, basta clicar na aba{' '}
            <span className="negrito">Ensino</span> e escolher a opção{' '}
            <span className="negrito">Currículo</span>.
          </p>
          <img src={curso} alt="cursos" />
          <img src={fluxoCurso} alt="cursos" />
        </div>

        <div className="horarios" ref={horariosRef}>
          <h3>Entendendo os horários</h3>
          <p>
            O formato do novo padrão de horários do SIGAA deu o que comentar.
            Muitos alunos não sabem ainda como decifrar essa sigla, mas no fim
            das contas é bem simples: <br /> O horário é composto por números e
            letras que representam os dias e turnos da turma. Veja como
            calcular:
          </p>
          <img src={diasDaSemana} alt="horarios" />
          <img src={turnos} alt="horarios" />
          <img src={horarios} alt="horarios" />
          <img src={exemploHorario} alt="horarios" />
          <p>
            Agora que já sabe como decifrar qual horário cada sigla representa,
            para que ter esse trabalho, não é mesmo? <br /> Faça isso de forma
            automática:
          </p>
          <form onSubmit={handleSubmitValue} className="form">
            <TextField
              id="filled-basic"
              label="Digite a sigla aqui"
              variant="filled"
              style={{ width: 200, background: '#FFF', borderRadius: 10 }}
              onChange={event => {
                setSiglaValue(event.target.value);
              }}
            />
            <div className="buttonForm">
              <Button
                onClick={handleSubmit}
                variant="outline-light"
                style={{
                  color: theme.colors.color,
                  borderColor: theme.colors.color,
                  width: 200,
                  marginTop: 10,
                }}
              >
                Decifrar!
              </Button>
            </div>
          </form>
          <div className="message">
            {parse !== '' && parse !== 'Erro' && (
              <p className="parsed">{parse}</p>
            )}
            {parse === 'Erro' && <p className="erro">Formato Inválido!</p>}
          </div>
        </div>

        <div className="creditos" ref={creditosRef}>
          <h3>Onde foram parar meus créditos?</h3>
          <p>
            O SIGAA não utiliza o padrão já conhecido de créditos que a UnB e o
            MW usavam. Agora, foi adotado um padrão de hora/aula. Cada crédito
            corresponde a 15 horas/aula, ou seja, uma disciplina de 2 créditos
            corresponde a 30 horas/aula, e assim por diante. Caso queira fazer a
            conversão inversa, basta dividir o número total de horas/aula por
            15.
          </p>
        </div>

        <div className="docentes" ref={docentesRef}>
          <h3>Onde encontro os professores?</h3>
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

        <div className="documentos" ref={documentosRef}>
          <h3>Onde emito meu histórico escolar?</h3>
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
                color: theme.colors.color,
                borderColor: theme.colors.color,
              }}
            >
              Fazer login SIGAA
            </Button>
          </div>
          <img src={emitirHistorico} alt="historico" />
        </div>

        <div className="retirada" ref={retiradaRef}>
          <h3>Vish, não vai dar... Como retiro uma disciplina?</h3>
          <p>
            A retirada de disciplina é pedida diretamente ao SAA. Ela pode ser
            feita online, ou por meio de e-mail para{' '}
            <span className="negrito">saaatendimento@unb.br</span>. Isto é feito
            para agilizar o processo de retirada, uma vez que a não é necessária
            a intervenção ou autorização da coordenação.
          </p>
        </div>

        <div className="trancamento" ref={trancamentoRef}>
          <h3>Como funciona o trancamento no SIGAA?</h3>
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
