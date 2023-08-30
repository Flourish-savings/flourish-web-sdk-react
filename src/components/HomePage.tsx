import React from 'react';
import { buildFrontEndUrl } from '../config';
import { emitEvent } from '../events/eventManager';

type Props = {
  token: string;
  environment: string;
  version: string;
  language: string;
  eventCallback?: (data: string) => void;
};
declare global {
  interface Window {
    customEmitFunction: any;
  }
}

const HomePage = (props: Props) => {
  const baseURL = buildFrontEndUrl(props.environment, props.version);

  const completeURL = props.version === 'v2'
    ? `${baseURL}?token=${props.token}&lang=${props.language}`
    : `${baseURL}/${props.language}?token=${props.token}`

  console.log(completeURL);

  if (typeof window !== 'undefined') {
    if (!window.customEmitFunction) {
      window.customEmitFunction = function customEmitFunction(
        ev: MessageEvent<{ type: string; message: string }>
      ) {
        if(props?.eventCallback)
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
