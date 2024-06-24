import React from 'react';
import HomePage from './components/HomePage';
import { api } from './service/api'
import { BackButtonPressedEvent, GiftCardCopyEvent, MissionActionEvent, ReferralCopyEvent, TriviaCloseEvent, TriviaGameFinishedEvent } from './events/eventTypes';
import { handleBackButtonPressed, handleGenericEvent, handleGiftCardCopy, handleHomeBannerAction, handleMissionAction, handleReferralCopy, handleTriviaClosed, handleTriviaGameFinished } from './events/eventListener';

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
    console.log('GERENIC_EVENT received:', data);
    if(props?.genericEventCallback)
      props?.genericEventCallback(data);
  });

  handleHomeBannerAction((data: {}) => {
    console.log('HOME_BANNER_ACTION received:', data);
    if(props?.homeBannerActionEventCallback)
      props?.homeBannerActionEventCallback(data);
  });
  
  handleMissionAction((missionActionEvent: MissionActionEvent) => {
    console.log('MISSION_ACTION received:', missionActionEvent);
    if(props?.missionActionEventCallback)
      props?.missionActionEventCallback(missionActionEvent);
  });

  handleBackButtonPressed((backButtonPressedEvent: BackButtonPressedEvent) => {
    console.log('BACK_BUTTON_PRESSED received:', backButtonPressedEvent);
    if(props?.backButtonEventCallback)
      props?.backButtonEventCallback(backButtonPressedEvent);
  });

  handleGiftCardCopy((giftCardCopyEvent: GiftCardCopyEvent) => {
    console.log('GIFT_CARD_COPY received:', giftCardCopyEvent);
    if(props?.giftCardCopyEventCallback)
      props?.giftCardCopyEventCallback(giftCardCopyEvent);
  });

  handleReferralCopy((referralCopyEvent: ReferralCopyEvent) => {
    console.log('REFERRAL_COPY received:', referralCopyEvent);
    if(props?.referralCopyEventCallback)
      props?.referralCopyEventCallback(referralCopyEvent);
  });

  handleTriviaClosed((triviaCloseEvent: TriviaCloseEvent) => {
    console.log('TRIVIA_CLOSED received:', triviaCloseEvent);
    if(props?.triviaClosedEventCallback)
      props?.triviaClosedEventCallback(triviaCloseEvent);
  });

  handleTriviaGameFinished((triviaGameFinishedEvent: TriviaGameFinishedEvent) => {
    console.log('TRIVIA_GAME_FINISHED received:', triviaGameFinishedEvent);
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

