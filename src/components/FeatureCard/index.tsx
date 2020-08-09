import React from 'react';
import { IconType } from 'react-icons';
import { FeatureCardContainer } from './styles';

interface FeatureCardProps {
  title: string;
  text: string;
  logoColor: string;
  Logo: IconType;
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
          <Logo style={{ fontSize: 40, color: logoColor }} />
        </div>
        <div className="text-container">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
