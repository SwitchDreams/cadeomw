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
  const {color} = props.theme.colors;
  return (
    <>
      <Button
        onClick={() => {
          const node = props.ofertaRef.current;
          if (node) node.scrollIntoView();
          window.scrollBy(0, -200);
        }}
        variant="outline-light"
        style={{
          color: color,
          borderColor: 'transparent',
        }}
      >
        Como posso ver a oferta desse semestre?
      </Button>
      <Button
        onClick={() => {
          const node = props.horariosRef.current;
          if (node) node.scrollIntoView();
          window.scrollBy(0, -200);
        }}
        variant="outline-light"
        style={{
          color: color,
          borderColor: 'transparent',
        }}
      >
        Entendendo os horários
      </Button>
      <Button
        onClick={() => {
          const node = props.creditosRef.current;
          if (node) node.scrollIntoView();
          window.scrollBy(0, -200);
        }}
        variant="outline-light"
        style={{
          color: color,
          borderColor: 'transparent',
        }}
      >
        Onde foram parar meus créditos?
      </Button>
      <Button
        onClick={() => {
          const node = props.docentesRef.current;
          if (node) node.scrollIntoView();
          window.scrollBy(0, -200);
        }}
        variant="outline-light"
        style={{
          color: color,
          borderColor: 'transparent',
        }}
      >
        Onde encontro os professores?
      </Button>
      <Button
        onClick={() => {
          const node = props.documentosRef.current;
          if (node) node.scrollIntoView();
          window.scrollBy(0, -200);
        }}
        variant="outline-light"
        style={{
          color: color,
          borderColor: 'transparent',
        }}
      >
        Onde emito meu histórico escolar?
      </Button>
      <Button
        onClick={() => {
          const node = props.retiradaRef.current;
          if (node) node.scrollIntoView();
          window.scrollBy(0, -200);
        }}
        variant="outline-light"
        style={{
          color: color,
          borderColor: 'transparent',
        }}
      >
        Vish, não vai dar... Como retiro uma disciplina?
      </Button>
      <Button
        onClick={() => {
          const node = props.trancamentoRef.current;
          if (node) node.scrollIntoView();
          window.scrollBy(0, -200);
        }}
        variant="outline-light"
        style={{
          color: color,
          borderColor: 'transparent',
        }}
      >
        Como funciona o trancamento no SIGAA?
      </Button>
    </>
  );
};

export default SummarySigaa;
