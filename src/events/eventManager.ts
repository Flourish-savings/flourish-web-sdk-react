import { EventEmitter } from 'eventemitter3';
interface Events {
    eventName: { data: string };
    [key: string]: any;
}

const eventManager = new EventEmitter<Events>();

export default eventManager;
