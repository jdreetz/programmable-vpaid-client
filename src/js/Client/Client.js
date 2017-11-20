import VPAIDInterface from './VPAIDInterface';
import { augment } from '../Utils/Decorator';

export default class Client extends VPAIDInterface {
  constructor(props) {
    super(props);
  }

  initAd(width, height, viewMode, desiredBitrate, creativeData = {}, environmentVars = {}) {
    this.applyOverrides(creativeData);
    return super.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
  }

  applyOverrides(adParams) {
    try {
      const parsed = JSON.parse(adParams);
      augment(this, parsed.overrides);
    } catch(e) {
      console.error(e);
    }
  }
}