import React from 'react';
import HomePage from './components/HomePage';
import { api } from './service/api'
import { 
  handleBackButtonPressed, 
  handleGenericEvent, 
  handleGiftCardCopy, 
  handleHomeBannerAction, 
  handleMissionAction, 
  handleReferralCopy, 
  handleTriviaClosed, 
  handleTriviaGameFinished 
} from './events/eventListener';

export type MissionActionEvent = {
  missionType: string;
  missionEvent: string;
};

export type BackButtonPressedEvent = {
  path: string;
};

export type GiftCardCopyEvent = {
  giftCardCode: string;
};

export type ReferralCopyEvent = {
  referralCode: string;
};

export type TriviaCloseEvent = {
  hits: number;
  questions: number;
  time: string;
  prizes: Prize[];
};

export type TriviaGameFinishedEvent = {
  hits: number;
  questions: number;
  time: string;
  prizes: Prize[];
};

export type Prize = {
  label: string;
  category: string;
  quantity: number;
};

export interface FlourishProps {
  token: string,
  language: string,
  environment: string,
  version?: string,
  genericEventCallback?: (data: string) => void;
  backButtonEventCallback?: (backButtonPressedEvent: BackButtonPressedEvent) => void;
  triviaGameFinishedEventCallback?: (triviaGameFinishedEvent: TriviaGameFinishedEvent) => void;
  missionActionEventCallback?: (missionActionEvent: MissionActionEvent) => void;
  triviaClosedEventCallback?: (triviaCloseEvent: TriviaCloseEvent) => void;
  referralCopyEventCallback?: (referralCopyEvent: ReferralCopyEvent) => void;
  homeBannerActionEventCallback?: (data: {}) => void;
  giftCardCopyEventCallback?: (giftCardCopyEvent: GiftCardCopyEvent) => void;
};

export const signIn = async (
  access_token: string, 
  environment: string): Promise<boolean> => {
    const response = await api.signIn(access_token, environment);
    return response.isValid;
};

const Flourish: React.FC<FlourishProps> = (props: FlourishProps) => {

  handleGenericEvent((data: string) => {
    if(props?.genericEventCallback)
      props?.genericEventCallback(data);
  });

  handleHomeBannerAction((data: {}) => {
    if(props?.homeBannerActionEventCallback)
      props?.homeBannerActionEventCallback(data);
  });
  
  handleMissionAction((missionActionEvent: MissionActionEvent) => {
    if(props?.missionActionEventCallback)
      props?.missionActionEventCallback(missionActionEvent);
  });

  handleBackButtonPressed((backButtonPressedEvent: BackButtonPressedEvent) => {
    if(props?.backButtonEventCallback)
      props?.backButtonEventCallback(backButtonPressedEvent);
  });

  handleGiftCardCopy((giftCardCopyEvent: GiftCardCopyEvent) => {
    if(props?.giftCardCopyEventCallback)
      props?.giftCardCopyEventCallback(giftCardCopyEvent);
  });

  handleReferralCopy((referralCopyEvent: ReferralCopyEvent) => {
    if(props?.referralCopyEventCallback)
      props?.referralCopyEventCallback(referralCopyEvent);
  });

  handleTriviaClosed((triviaCloseEvent: TriviaCloseEvent) => {
    if(props?.triviaClosedEventCallback)
      props?.triviaClosedEventCallback(triviaCloseEvent);
  });

  handleTriviaGameFinished((triviaGameFinishedEvent: TriviaGameFinishedEvent) => {
    if(props?.triviaGameFinishedEventCallback)
      props?.triviaGameFinishedEventCallback(triviaGameFinishedEvent);
  });

  return (
    <HomePage 
      token={props.token} 
      environment={props.environment} 
      version={props.version || 'v2'} 
      language={props.language} />
  );
};

export default Flourish;

