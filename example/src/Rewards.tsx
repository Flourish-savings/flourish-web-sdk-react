import { useState, useEffect } from 'react'
import Flourish, { BackButtonPressedEvent, GiftCardCopyEvent, MissionActionEvent, ReferralCopyEvent, TriviaCloseEvent, TriviaGameFinishedEvent } from 'flourish-web-sdk-react'
import Box from '@mui/material/Box';
import api from './api';

const Rewards = () => {
  const [ accessToken, setAccessToken ] = useState('')

  useEffect(() => {
      api.get('flourish-access-token').then(response => {
          setAccessToken(response.data.access_token)
      })
  }, [])

  const genericEventCallback = (eventData: string): void => {
    console.log('Generic event data', eventData);
  };

  const backButtonEventCallback = (backButtonPressedEvent: BackButtonPressedEvent): void => {
    console.log('BackButton event path', backButtonPressedEvent.path);
  };

  const triviaGameFinishedEventCallback = (triviaGameFinishedEvent: TriviaGameFinishedEvent): void => {
    console.log('TriviaGameFinished event hits', triviaGameFinishedEvent.hits);
    console.log('TriviaGameFinished event questions', triviaGameFinishedEvent.questions);
    console.log('TriviaGameFinished event time', triviaGameFinishedEvent.time);
    console.log('TriviaGameFinished event prizes', triviaGameFinishedEvent.prizes);
  };

  const missionActionEventCallback = (missionActionEvent: MissionActionEvent): void => {
    console.log('Mission event type', missionActionEvent.missionType);
    console.log('Mission event name', missionActionEvent.missionEvent);
  };

  const triviaClosedEventCallback = (triviaCloseEvent: TriviaCloseEvent): void => {
    console.log('TriviaClose event hits', triviaCloseEvent.hits);
    console.log('TriviaClose event questions', triviaCloseEvent.questions);
    console.log('TriviaClose event time', triviaCloseEvent.time);
    console.log('TriviaClose event prizes', triviaCloseEvent.prizes);
  };

  const referralCopyEventCallback = (referralCopyEvent: ReferralCopyEvent): void => {
    console.log('ReferralCopy event path', referralCopyEvent.referralCode);
  };

  const homeBannerActionEventCallback = (data: {}): void => {
    console.log('HomeBannerAction event', data);
  };

  const giftCardCopyEventCallback = (giftCardCopyEvent: GiftCardCopyEvent): void => {
    console.log('GiftCardCopy event path', giftCardCopyEvent.giftCardCode);
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column" >
      <Flourish token={accessToken}
        environment='staging'
        language='en'
        genericEventCallback={genericEventCallback}
        backButtonEventCallback={backButtonEventCallback}
        triviaGameFinishedEventCallback={triviaGameFinishedEventCallback}
        missionActionEventCallback={missionActionEventCallback}
        triviaClosedEventCallback={triviaClosedEventCallback}
        referralCopyEventCallback={referralCopyEventCallback}
        homeBannerActionEventCallback={homeBannerActionEventCallback}
        giftCardCopyEventCallback={giftCardCopyEventCallback}/>
    </Box>
  );
}

export default Rewards;
