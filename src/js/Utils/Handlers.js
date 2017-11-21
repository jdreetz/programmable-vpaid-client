import { syncDelay } from './Timing';

export const overrideHandler = (operation, publisher) => {
  if(typeof operation.ret !== 'undefined') {
    if(operation.delay) {
      syncDelay(operation.delay);
    }
    console.log('returning', operation.ret);
    return operation.ret;

  } else if(operation.dispatch) {
    setTimeout(() => {
      console.log('queuing', operation.dispatch);
      publisher(operation.dispatch);
    }, operation.delay || 0);
  }
};