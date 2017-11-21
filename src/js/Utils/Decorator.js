import { overrideHandler } from './Handlers';
import { LoopableQueue } from './Queues';

export const augment = (subject, overrides) => {
  Object.entries(overrides).forEach(([key, value]) => {
    const defaultFn = subject[key];
    
    const operations = value.operations.reduce( (accum, op) => { 
      const repeat = typeof op.repeat === 'undefined' ? 1 : op.repeat;
      
      for(let i = 0; i < repeat; i++) {
        accum.push(overrideHandler.bind({}, op, subject.publish))
      }

      return accum;
    }, []);

    const queue = new LoopableQueue(operations);
    subject[key] = queue.run.bind(queue);
  });
};