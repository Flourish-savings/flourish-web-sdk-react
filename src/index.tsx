import React from 'react';
import HomePage from './components/HomePage';
import { api } from './service/api'

export interface FlourishProps {
  token: string,
  language: string,
  environment: string,
  version: string,
  eventCallback?: (data: string) => void,
};

export const signIn = async (
  access_token: string, 
  environment: string): Promise<boolean> => {
    const response = await api.signIn(access_token, environment);
    return response.isValid;
};

const Flourish: React.FC<FlourishProps> = (props: FlourishProps) => {
  return (
    <HomePage 
      token={props.token} 
      environment={props.environment} 
      version={props.version} 
      language={props.language}
      eventCallback= {props.eventCallback} />
  );
};

export default Flourish;