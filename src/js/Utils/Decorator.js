import { syncDelay } from './Timing';

export const augment = (subject, overrides) => {
  Object.keys(overrides).forEach(override => {
    const defaultFn = subject[override];
    
    const operations = overrides[override].operations.map( op => {
      return function() { 
        if(typeof op.ret !== 'undefined') {
          if(op.delay) {
            syncDelay(op.delay);
          }
          return op.ret;

        } else if(op.dispatch) {
          setTimeout(() => {
            subject.publish(op.dispatch);
          }, op.delay || 0);
        }
      }
    });

    const queue = new CallableQueue(operations);
    subject[override] = queue.run.bind(queue);
  });
}; 

class CallableQueue {
  constructor(queue) {
    this.queue = [...queue];
    this.cur = 0;
  }

  run() {
    const result = this.queue[this.cur]();
    this.cur = this.cur == this.queue.length - 1 ? 0 : this.cur + 1;

    return result;
  }
}