// @flow

import type {LayerProxy} from './../engines/layerproxy';

/**
 * @api
 */
export default class Layer {
  map:Map;
  layerProxy:LayerProxy;
  // FIXME url should probably go into `Tile`
  url:string;

  constructor(url:string) {
    this.url = url;
  }

  /**
   * @api
   */
  isVisible() {
    return this.layerProxy.isVisible();
  }

  /**
   * @api
   */
  show() {
    this.layerProxy.show();
  }

  /**
   * @api
   */
  hide() {
    this.layerProxy.hide();
  }

  setProxy(layerProxy:LayerProxy) {
    this.layerProxy = layerProxy;
  }

  setUrl(url:string) {
    this.url = url;
    this.layerProxy.setUrl(url);
  }
}
