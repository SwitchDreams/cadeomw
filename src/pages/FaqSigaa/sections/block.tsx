import React from 'react';
import trancamento from '../../../assets/trancamento.png';

const BlockSigaa: React.FC = () => {
  return (
    <>
      <h3>Como funciona o trancamento no SIGAA?</h3>
      <p>
        O trancamento funciona da mesma forma, porém com nome diferente do que
        estávamos acostumados. O Trancamento Geral Automático agora se chama{' '}
        <span className="negrito">Suspensão de Programa</span>. E o Trancamento
        de Disciplina se chama{' '}
        <span className="negrito">Trancamento de Componente Curricular</span>. O
        processo de Trancamento pode ser revertido em até três dias pelo próprio
        sistema.
      </p>
      <img src={trancamento} alt="historico" />
    </>
  );
};

export default BlockSigaa;
