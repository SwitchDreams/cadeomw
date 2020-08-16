import React from 'react';
import { IconType } from 'react-icons';
import {Text} from './style'

interface FeatureCardProps {
  message: string;
  response: string;
  logoColor: string;
  LogoMessage: IconType;
  LogoResponse: IconType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  message,
  response,
  logoColor,
  LogoMessage,
  LogoResponse,
}: FeatureCardProps) => {
  return (
    <div>
      <Text>
        <LogoMessage style={{ fontSize: 40, color: logoColor }} />
      </Text>
      <Text>
        <b>{message}</b>
      </Text>
      <Text>
        <LogoResponse style={{ fontSize: 40, color: logoColor }} />
      </Text>
      <Text>
        <p>{response}</p>
      </Text>
    </div>
  );
};

export default FeatureCard;
