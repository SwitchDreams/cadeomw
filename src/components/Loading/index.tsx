import React from 'react';
import Spinner from '../../assets/spinner-icon.gif';

import { Loading } from './styles';

const FeatureCard: React.FC = () => {
  return (
    <Loading>
      <div>
        <img src={Spinner} alt="loading" />
        <h1> Carregando </h1>
      </div>
    </Loading>
  );
};

export default FeatureCard;
