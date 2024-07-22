import eventManager from './eventManager';
import { BackButtonPressedEvent, GiftCardCopyEvent, MissionActionEvent, ReferralCopyEvent, TriviaCloseEvent, TriviaGameFinishedEvent } from './eventTypes';


const emitEvent = (event: any) => {
  switch (event.eventName) {
    case 'MISSION_ACTION':
      emitMissionAction(event);  
      break;
    case 'BACK_BUTTON_PRESSED':
      emitBackButtonPressed(event);  
      break;  
    case 'TRIVIA_GAME_FINISHED':
      emitTriviaGameFinished(event);  
      break;  
    case 'TRIVIA_CLOSED':
      emitTriviaClose(event);  
      break;      
    case 'REFERRAL_COPY':
      emitReferralCopy(event);  
      break;
    case 'GIFT_CARD_COPY':
      emitGiftCardCopy(event);  
      break;                         

    default:
      eventManager.emit('GERENIC_EVENT', event);
  }
}


const emitMissionAction = (event: any) => {
  const missionActionEvent: MissionActionEvent = event.data;

  eventManager.emit('MISSION_ACTION', missionActionEvent);
};

const emitBackButtonPressed = (event: any) => {
  const backButtonPressedEvent: BackButtonPressedEvent = event.data;

  eventManager.emit('BACK_BUTTON_PRESSED', backButtonPressedEvent);
};

const emitTriviaGameFinished = (event: any) => {
  const triviaGameFinishedEvent: TriviaGameFinishedEvent = event.data;

  eventManager.emit('TRIVIA_GAME_FINISHED', triviaGameFinishedEvent);
};

const emitTriviaClose = (event: any) => {
  const triviaCloseEvent: TriviaCloseEvent = event.data;

  eventManager.emit('TRIVIA_CLOSED', triviaCloseEvent);
};

const emitReferralCopy = (event: any) => {
  const referralCopyEvent: ReferralCopyEvent = event.data;

  eventManager.emit('REFERRAL_COPY', referralCopyEvent);
};

const emitGiftCardCopy = (event: any) => {
  const giftCardCopyEvent: GiftCardCopyEvent = event.data;

  eventManager.emit('GIFT_CARD_COPY', giftCardCopyEvent);
};

export default emitEvent;
