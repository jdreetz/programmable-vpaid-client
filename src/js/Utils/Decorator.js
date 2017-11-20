import { overrideHandler } from './Handlers';
import { LoopableQueue } from './Queues';

export const augment = (subject, overrides) => {
  Object.entries(overrides).forEach(([key, value]) => {
    const defaultFn = subject[key];
    
    const operations = value.operations.map( op => overrideHandler.bind({}, op, subject.publish));
    const queue = new LoopableQueue(operations);
    subject[key] = queue.run.bind(queue);
  });
};