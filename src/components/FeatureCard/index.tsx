import React from 'react';
import { Book } from '@material-ui/icons';
import { FeatureCardContainer } from './styles';

const FeatureCard: React.FC = () => {
  return (
    <FeatureCardContainer>
      <div className="content-container">
        <div className="logo-container">
          <Book style={{ fontSize: 50, color: '#f89a05' }} />
        </div>
        <div className="text-container">
          <h3>Fully functional</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            culpa expedita dignissimos.
          </p>
        </div>
      </div>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
