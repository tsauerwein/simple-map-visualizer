// @flow
import Layer from './../layer';
import type {LayerProxy} from './layerproxy';

/**
 * Wraps the map of a mapping engine.
 */
export interface MapProxy {
  setZoom(z:number):void;
  getZoom():number;
  addLayer(layer:Layer):LayerProxy;
};
