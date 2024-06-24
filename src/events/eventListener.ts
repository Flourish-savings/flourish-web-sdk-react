import eventManager from './eventManager';

const handleMissionAction = (callback: (data: { missionType: string; missionEvent: string }) => void) => {
    eventManager.on('MISSION_ACTION', callback);
};

export default handleMissionAction;

