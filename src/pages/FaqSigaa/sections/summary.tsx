import React from 'react';
import {Button} from 'react-bootstrap';
import * as themes from '../../../theme/schema.json';

interface Refs{
  current: HTMLDivElement | null;
}

interface SummaryProps {
  theme: typeof themes.data.light;
  horariosRef: Refs;
  ofertaRef: Refs;
  creditosRef: Refs;
  docentesRef: Refs;
  documentosRef: Refs;
  retiradaRef: Refs;
  trancamentoRef: Refs;
}

const SummarySigaa: (props: SummaryProps) => JSX.Element = (
  props: SummaryProps,
) => {
  const {
    theme,
    horariosRef,
    documentosRef,
    trancamentoRef,
    retiradaRef,
    creditosRef,
    docentesRef,
    ofertaRef,
  } = props;
  const { color } = theme.colors;
  return (
    <>
      <Button
        onClick={() => {
          const node = ofertaRef.current;
          if (node) node.scrollIntoView();
          window.scrollBy(0, -200);
        }}
        variant="outline-light"
        style={{
          color,
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
          color,
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
          color,
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
          color,
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
          color,
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
          color,
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
          color,
          borderColor: 'transparent',
        }}
      >
        Como funciona o trancamento no SIGAA?
      </Button>
    </>
  );
};

export default SummarySigaa;
