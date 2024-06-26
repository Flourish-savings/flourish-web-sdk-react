import React from 'react';
import { buildFrontEndUrl, getSdkVersion } from '../config';
import emitEvent from '../events/eventEmitter';

type Props = {
  token: string;
  environment: string;
  version: string;
  language: string;
};
declare global {
  interface Window {
    customEmitFunction: any;
  }
}

const HomePage = (props: Props) => {
  const baseURL = buildFrontEndUrl(props.environment, props.version);
  const sdk_version = getSdkVersion(props.environment)

  const completeURL = props.version === 'v2'
    ? `${baseURL}?token=${props.token}&lang=${props.language}&sdk_version=${sdk_version}`
    : `${baseURL}/${props.language}?token=${props.token}&sdk_version=${sdk_version}`
    
  if (typeof window !== 'undefined') {
    if (!window.customEmitFunction) {
      window.customEmitFunction = function customEmitFunction(
        ev: MessageEvent<{ type: string; message: string }>
      ) {
        console.log('Event data', ev.data);
        emitEvent(ev.data);  
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
