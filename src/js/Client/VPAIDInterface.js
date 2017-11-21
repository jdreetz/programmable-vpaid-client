import PubSub from 'pubsub-js';

export default class VPAIDInterface {
  constructor() {
    this.adVolume = 0;
    this.paused = false;
    this.expanded = false;
    this.size = { width: 640, height: 360 };
  }

  initAd(width, height, viewMode, desiredBitrate, creativeData = {}, environmentVars = {}) {
    this.size.width = width;
    this.size.height = height;
    this.viewMode = viewMode;
    this.creativeData = { ...creativeData };
    this.environmentVars = { ...environmentVars };

    this.publish('AdLoaded');
    this.publish('AdDurationChange');
    return this;
  }

  startAd() {
    this.paused = false;
    this.publish('AdImpression');
    this.publish('AdStarted');
    this.publish('AdVideoStart');
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
    console.log('subscribing', event, fn);
    PubSub.subscribe(event, fn.bind(listenerScope));
    return this;
  }

  unsubscribe(fn, event) {
    PubSub.unsubscribe(event, fn);
    return this;
  }

  publish(event, args) {
    console.log('publishing', event);
    PubSub.publish(event, args);
    return this;
  }

  getAdExpanded() {
    return this.expanded; 
  }

  getAdLinear() {
    return true; 
  }

  getAdDuration() {
    console.log('getAdDuration');
    return -2;
  }

  getAdRemainingTime() { 
    console.log('getAdRemainingTime');
    return -2; 
  }

  getAdSkippableState() {
    return true;
  }

  getAdVolume() {
   return this.adVolume;
  }

  getAdCompanions() { 
    return '';
  }

  getAdIcons() {
   return true;
  }

  getAdHeight() { 
    return this.size.height;
  }

  getAdWidth() { 
    return this.size.width;
  }

  handshakeVersion() {
    return '2.0';
  }

  setAdVolume(vol) {
    this.adVolume = vol;
  }
}