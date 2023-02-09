import React, { useEffect } from 'react';
import HomePage from './components/HomePage';
import { onEventReceived } from './events/eventManager';

export interface FlourishProps {
  token: string,
  language: string,
  environment: string,
  eventCallback: (data: string) => void,
}

const Flourish: React.FC<FlourishProps> = (props: FlourishProps) => {
  useEffect(() => {
        onEventReceived(props.eventCallback);
  }, []);

  return (
    <HomePage token={props.token} environment={props.environment} language={props.language} />
  );
};

export default Flourish;