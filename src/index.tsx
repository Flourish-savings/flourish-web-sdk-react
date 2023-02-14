import React, { useEffect } from 'react';
import HomePage from './components/HomePage';
import { api } from './service/api'
import { onEventReceived } from './events/eventManager';

export interface FlourishProps {
  token: string,
  language: string,
  environment: string,
  eventCallback: (data: string) => void,
};

export const signIn = async (
  access_token: string, 
  environment: string): Promise<boolean> => {
    const response = await api.signIn(access_token, environment);
    return response.isValid;
};

const Flourish: React.FC<FlourishProps> = (props: FlourishProps) => {
  useEffect(() => {
        onEventReceived(props.eventCallback);
  }, []);

  return (
    <HomePage 
      token={props.token} 
      environment={props.environment} 
      language={props.language} />
  );
};

export default Flourish;