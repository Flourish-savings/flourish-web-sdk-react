import React from 'react';
import Config from '../config';
import { emitEvent } from '../events/eventManager';

type Props = {
  token: string;
  environment: string;
  language: string;
  eventCallback: (data: string) => void;
};

const HomePage = (props: Props) => {
  const baseURL = Config.FRONTEND_URL.get(props.environment);
  const endURL = `/?token=${props.token}`;
  const completeURL = `${baseURL}${props.language}${endURL}`;
  console.log('completeURL', completeURL);

  if(typeof window !== "undefined") {
    window.addEventListener(
      "message",
      (ev: MessageEvent<{ type: string; message: string }>) => {
        emitEvent(ev.data, props.eventCallback);
      }
    );
  }

  return (
    <iframe src={completeURL} style={{ border: '0', width: '100%', height: '100%'}}></iframe>
  );
};

export default HomePage;
