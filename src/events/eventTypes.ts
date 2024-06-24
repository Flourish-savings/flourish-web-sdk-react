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
