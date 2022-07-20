import React from 'react';
import Spinner from '../../assets/spinner-icon.gif';

import { LoadingContainer } from './styles';

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <div>
        <img src={Spinner} alt="loading" />
        <h3> Carregando </h3>
      </div>
    </LoadingContainer>
  );
};

export default Loading;
