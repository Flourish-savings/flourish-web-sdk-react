export const emitEvent = (data: any, eventCallback: (arg: any) => any) => {
  eventCallback(data);
};
