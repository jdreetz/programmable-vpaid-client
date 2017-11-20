import Client from './Client/Client';

const config = {
  overrides: {
    startAd: {
      operations: [
        { dispatch: 'AdStarted', delay: 1000 }
      ],
      delay: 1000
    },
    getAdRemainingTime: {
      operations: [
        { ret: 13, delay: 2000 },
        { ret: 11, delay: 2000 },
        { ret: 9, delay: 2000 },
        { ret: 7, delay: 2000 },
        { ret: 5, delay: 2000 },
        { ret: 3, delay: 2000 },
        { ret: 1, delay: 2000 },
      ]
    }
  }
};

const instance = new Client(window);
instance
  .subscribe(() => console.log('AdLoaded'), 'AdLoaded')
  .subscribe(() => console.log('AdStarted'), 'AdStarted')
  .initAd(640, 480, 'normal', 0, JSON.stringify(config), {})
  .startAd();

for(let i = 0; i < 5; i++) {
  let remaining = instance.getAdRemainingTime();
  console.log('remaining', remaining, new Date());
}
