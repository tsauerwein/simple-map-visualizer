// @flow

import type {LayerProxy} from './../layerproxy';
import {TileLayer} from 'leaflet';

export default class Layer implements LayerProxy {
  internalLayer:TileLayer;

  constructor(url:string) {
    this.internalLayer = new TileLayer(url);
  }

  isVisible():boolean {
    return this.internalLayer.options.opacity > 0;
  }

  show() {
    this.internalLayer.setOpacity(1.0);
  }

  hide() {
    this.internalLayer.setOpacity(0);
  }

  setUrl(url:string) {
    this.internalLayer.setUrl(url);
  }
}
