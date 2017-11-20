import { syncDelay } from './Timing';

export const overrideHandler = (operation, publisher) => {
  if(typeof operation.ret !== 'undefined') {
    if(operation.delay) {
      syncDelay(operation.delay);
    }
    return operation.ret;

  } else if(operation.dispatch) {
    setTimeout(() => {
      publisher(operation.dispatch);
    }, operation.delay || 0);
  }
};