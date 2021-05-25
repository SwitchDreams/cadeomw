import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import { Button } from 'react-bootstrap';
import Header from '../../components/Header';
import { Title, Main } from './styles';
import * as themes from '../../theme/schema.json';
import { getFromLS } from '../../utils/localStorage';
import ScheduleSigaa from './sections/schedule'
import OfferSigaa from './sections/offer'
import CreditsSigaa from './sections/credits'
import StaffSigaa from './sections/staff'
import DocumentsSigaa from './sections/documents'
import RemoveSigaa from './sections/remove'
import BlockSigaa from './sections/block';

const FaqSigaa: React.FC = () => {
  const [windowCheck, setWindowCheck] = useState(false);
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
        <div className="oferta" ref={ofertaRef} >
          <OfferSigaa />
        </div>
        <div className="horarios" ref={horariosRef}>
          <ScheduleSigaa />
        </div>
        <div className="creditos" ref={creditosRef}>
          <CreditsSigaa />
        </div>
        <div className="docentes" ref={docentesRef}>
          <StaffSigaa />
        </div>
        <div className="documentos" ref={documentosRef}>
          <DocumentsSigaa />
        </div>
        <div className="retirada" ref={retiradaRef}>
          <RemoveSigaa />
        </div>
        <div className="trancamento" ref={trancamentoRef}>
          <BlockSigaa />
        </div>
      </Main>
    </>
  );
};

export default FaqSigaa;
