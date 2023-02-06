import React, { useEffect } from 'react';
import HomePage from './HomePage';

export interface FlourishProps {
  token: string,
  language: string,
  environment: string,
}

const Flourish: React.FC<FlourishProps> = (props: FlourishProps) => {
  return (
    <HomePage token={props.token} environment={props.environment} language={props.language} />
  );
};

export default Flourish;