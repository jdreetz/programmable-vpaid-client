import PubSub from 'pubsub-js';

export default class VPAIDInterface {
  constructor(globalWindow = window) {
    globalWindow.getVPAID = () => this.getPublicInterface();
    this.adVolume = 0;
    this.paused = false;
    this.expanded = false;
    this.size = { width: 640, height: 360 };
  }

  getPublicInterface() {
    return {
      initAd: this.initAd,
      collapseAd: this.collapseAd,
      expandAd: this.expandAd,
      pauseAd: this.pauseAd,
      resizeAd: this.resizeAd,
      resumeAd: this.resumeAd,
      startAd: this.startAd,
      skipAd: this.skipAd,
      stopAd: this.stopAd,
      subscribe: this.subscribe,
      unsubscribe: this.unsubscribe,
      getAdExpanded: () => this.expanded,
      getAdLinear: () => true,
      getAdDuration: () => -2,
      getAdRemainingTime: () => -2,
      getAdSkippableState: () => true,
      getAdVolume: () => this.adVolume,
      getAdCompanions: () => '',
      getAdIcons: () => true,
      getAdHeight: () => this.size.height,
      getAdWidth: () => this.size.width,
      handshakeVersion: () => '2.0',
      setAdVolume: vol => this.adVolume = vol,
    }
  }

  initAd(width, height, viewMode, desiredBitrate, creativeData = {}, environmentVars = {}) {
    this.size.width = width;
    this.size.height = height;
    this.viewMode = viewMode;
    this.creativeData = { ...creativeData };
    this.environmentVars = { ...environmentVars };

    this.publish('AdLoaded');
    return this;
  }

  startAd() {
    this.paused = false;
    this.publish('AdStarted');
    return this;
  }

  skipAd() {
    this.publish('AdSkipped');
    return this;
  }

  stopAd() {
    this.publish('AdStopped');
    return this;
  }

  pauseAd() {
    this.paused = true;
    this.publish('AdPaused');
    return this;
  }

  resumeAd() {
    this.paused = false;
    this.publish('AdPlaying');
    return this;
  }

  collapseAd() {
    this.expanded = false;
    this.publish('AdExpandedChange');
    return this;
  }

  expandAd() {
    this.expanded = true;
    this.publish('AdExpandedChange');
    return this;
  }

  resizeAd(width, height, viewMode) {
    this.width = width;
    this.height = height;
    this.viewMode = viewMode;
    this.publish('AdSizeChange');
    return this;
  }

  subscribe(fn, event, listenerScope) {
    PubSub.subscribe(event, fn.bind(listenerScope));
    return this;
  }

  unsubscribe(fn, event) {
    PubSub.unsubscribe(event, fn);
    return this;
  }

  publish(event, args) {
    PubSub.publish(event, args);
    return this;
  }
}