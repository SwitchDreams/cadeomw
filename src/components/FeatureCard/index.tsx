import React from 'react';
import { SvgIconComponent } from '@material-ui/icons';
import { FeatureCardContainer } from './styles';

interface FeatureCardProps {
  title: string;
  text: string;
  logoColor: string;
  Logo: SvgIconComponent;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  text,
  logoColor,
  Logo,
}: FeatureCardProps) => {
  return (
    <FeatureCardContainer>
      <div className="content-container">
        <div className="logo-container">
          <Logo style={{ fontSize: 50, color: logoColor }} />
        </div>
        <div className="text-container">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
