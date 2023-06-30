import React from 'react';
import Config from '../config';
import { emitEvent } from '../events/eventManager';

type Props = {
  token: string;
  environment: string;
  language: string;
  eventCallback: (data: string) => void;
};
declare global {
  interface Window {
    customEmitFunction: any;
  }
}

const HomePage = (props: Props) => {
  const baseURL = Config.FRONTEND_URL.get(props.environment);
  const tokenPath = `?token=${props.token}`;
  const languagePath = `&lang=${props.language}`;
  const completeURL = `${baseURL}${tokenPath}${languagePath}`;
  console.log(completeURL);

  if (typeof window !== 'undefined') {
    if (!window.customEmitFunction) {
      window.customEmitFunction = function customEmitFunction(
        ev: MessageEvent<{ type: string; message: string }>
      ) {
        emitEvent(ev.data, props.eventCallback);
      };
    }

    window.removeEventListener('message', window.customEmitFunction);
    window.addEventListener('message', window.customEmitFunction, false);
  }

  return (
    <iframe
      src={completeURL}
      style={{ border: '0', width: '100%', height: '100%' }}
    ></iframe>
  );
};

export default HomePage;
