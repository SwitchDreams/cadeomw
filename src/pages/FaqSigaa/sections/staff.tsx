import React from 'react';
import docentes from '../../../assets/docentes.png';

const StaffSigaa: React.FC = () => {
  return (
    <>
      <div className="docentes">
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
    </>
  );
};

export default StaffSigaa;
