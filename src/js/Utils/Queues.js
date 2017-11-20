export class LoopableQueue {
  constructor(queue) {
    this.queue = [...queue];
    this.cur = 0;
  }

  run() {
    const result = this.queue[this.cur].call();
    this.cur = this.cur == this.queue.length - 1 ? 0 : this.cur + 1;

    return result;
  }
}