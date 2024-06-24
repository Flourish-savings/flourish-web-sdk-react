import eventManager from './eventManager';
import { BackButtonPressedEvent, GiftCardCopyEvent, MissionActionEvent, ReferralCopyEvent, TriviaCloseEvent, TriviaGameFinishedEvent } from './eventTypes';

const handleGenericEvent = (callback: (data: string) => void) => {
    eventManager.on('GERENIC_EVENT', callback);
};

const handleHomeBannerAction = (callback: (data: {}) => void) => {
    eventManager.on('HOME_BANNER_ACTION', callback);
};

const handleMissionAction = (callback: (mssionActionEvent: MissionActionEvent) => void) => {
    eventManager.on('MISSION_ACTION', callback);
};

const handleBackButtonPressed = (callback: (backButtonPressedEvent: BackButtonPressedEvent) => void) => {
    eventManager.on('BACK_BUTTON_PRESSED', callback);
};

const handleGiftCardCopy = (callback: (giftCardCopyEvent: GiftCardCopyEvent) => void) => {
    eventManager.on('GIFT_CARD_COPY', callback);
};

const handleReferralCopy = (callback: (referralCopyEvent: ReferralCopyEvent) => void) => {
    eventManager.on('REFERRAL_COPY', callback);
};

const handleTriviaClosed = (callback: (triviaCloseEvent: TriviaCloseEvent) => void) => {
    eventManager.on('TRIVIA_CLOSED', callback);
};

const handleTriviaGameFinished = (callback: (triviaGameFinishedEvent: TriviaGameFinishedEvent) => void) => {
    eventManager.on('TRIVIA_GAME_FINISHED', callback);
};

export {
    handleGenericEvent,
    handleHomeBannerAction,
    handleBackButtonPressed,
    handleGiftCardCopy,
    handleReferralCopy,
    handleTriviaClosed,
    handleTriviaGameFinished,
    handleMissionAction
};

