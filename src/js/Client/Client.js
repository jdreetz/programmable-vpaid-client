import VPAIDInterface from './VPAIDInterface';
import Display from '../UI/Display';
import { augment } from '../Utils/Decorator';

export default class Client extends VPAIDInterface {
  constructor(props) {
    super(props);
    window.getVPAIDAd = () => {
      return this;
    };
  }

  initAd(width, height, viewMode, desiredBitrate, creativeData = {}, environmentVars = {}) {
    console.log('calling initAd', arguments);
    this.applyOverrides(creativeData);
    this.display = new Display(environmentVars.slot);

    return super.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
  }

  applyOverrides({ AdParameters }) {
    try {
      const parsed = JSON.parse(AdParameters);
      
      if(parsed && parsed.overrides) {
        augment(this, parsed.overrides);
      }      
    } catch(e) {
      console.error(e);
    }
  }
}