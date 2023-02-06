import React from 'react';
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

  return (
    <iframe src={completeURL}></iframe>
  );
};

export default HomePage;
