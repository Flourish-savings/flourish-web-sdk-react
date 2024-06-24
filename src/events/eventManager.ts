import { EventEmitter } from 'eventemitter3';
interface Events {
    eventName: { data: string };
    [key: string]: any;
}

const eventManager = new EventEmitter<Events>();

export const emitEvent = (data: any, eventCallback: (arg: any) => any) => {
  console.log('eventManager-emitEvent func', data);
  eventCallback(data);
};


export default eventManager;
