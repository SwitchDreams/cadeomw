import React from 'react';
import { Message, Response } from './style';

interface FeatureCardProps {
  message: string;
  response: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  message,
  response,
}: FeatureCardProps) => {
  return (
    <div>
      <Message>
        <b>{message}</b>
      </Message>

      <Response>
        <p>{response}</p>
      </Response>
    </div>
  );
};

export default FeatureCard;
