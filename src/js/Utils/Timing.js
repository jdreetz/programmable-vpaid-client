export const syncDelay = delay => {
  let now = new Date().getTime();
  let then = now + delay;

  while(now < then) {
    now = new Date().getTime();
  }
};