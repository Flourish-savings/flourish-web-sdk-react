import React from 'react';
import HomePage from './components/HomePage';
import { api } from './service/api'
import { MissionActionEvent } from './events/eventTypes';
import handleMissionAction from './events/eventListener';

export interface FlourishProps {
  token: string,
  language: string,
  environment: string,
  version?: string,
  genericEventCallback?: (data: string) => void;
  backButtonEventCallback?: (data: string) => void;
  homeBackButtonEventCallback?: (data: string) => void;
  triviaGameFinishedEventCallback?: (data: string) => void;
  missionActionEventCallback?: (missionActionEvent: MissionActionEvent) => void;
  triviaClosedEventCallback?: (data: string) => void;
  referralCopyEventCallback?: (data: string) => void;
  homeBannerActionEventCallback?: (data: string) => void;
  giftCardCopyEventCallback?: (data: string) => void;
};

export const signIn = async (
  access_token: string, 
  environment: string): Promise<boolean> => {
    const response = await api.signIn(access_token, environment);
    return response.isValid;
};

const Flourish: React.FC<FlourishProps> = (props: FlourishProps) => {

  console.log('CALLBACK', props.missionActionEventCallback);
  
  handleMissionAction((mssionActionEvent: MissionActionEvent) => {
    console.log('MISSION_ACTION received:', mssionActionEvent);
    if(props?.missionActionEventCallback)
      props?.missionActionEventCallback(mssionActionEvent);
  });

  return (
    <HomePage 
      token={props.token} 
      environment={props.environment} 
      version={props.version || 'v2'} 
      language={props.language}
      missionActionEventCallback={props.missionActionEventCallback} />
  );
};

export default Flourish;