import React, { useEffect } from 'react';
import { emitEvent } from '../events/eventManager';
import Config from '../config';

type Props = {
  token: string;
  environment: string;
  language: string;
};

const HomePage = (props: Props) => {
  const baseURL = Config.FRONTEND_URL.get(props.environment);
  const endURL = `/?token=${props.token}`;
  const completeURL = `${baseURL}${props.language}${endURL}`;
  console.log('completeURL', completeURL);

  useEffect(() => {
    window.addEventListener(
      "message",
      (ev: MessageEvent<{ type: string; message: string }>) => {
        emitEvent(ev.data);
      }
    );
  }, []);

  return (
    <iframe src={completeURL}></iframe>
  );
};

export default HomePage;
