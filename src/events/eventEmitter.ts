import eventManager from './eventManager';
import { MissionActionEvent } from './eventTypes';

const emitMissionAction = (event: any) => {
  console.log('MEV name', event.eventName);
  console.log('MEV data', event.data);

  const missionActionEvent: MissionActionEvent = event.data;

  eventManager.emit('MISSION_ACTION', missionActionEvent);
};

export default emitMissionAction;
