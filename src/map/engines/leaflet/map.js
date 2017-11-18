// @flow

import Layer from './../../layer';
import type {LayerProxy} from './../layerproxy';
import type {MapProxy} from './../mapproxy';
import type {MapOptions} from './../engine';
import {Map as LeafletMap} from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import LeafletLayerProxy from './layer';


export default class Map implements MapProxy {
  internalMap:LeafletMap;

  constructor(options:MapOptions) {
    this.internalMap = new LeafletMap(options.container, {
      center: options.center,
      zoom: options.zoom
    });
  }

  setZoom(z:number) {
    this.internalMap.setZoom(z);
  }

  getZoom():number {
    return this.internalMap.getZoom();
  }

  addLayer(layer:Layer):LayerProxy {
    const layerProxy = new LeafletLayerProxy(layer.url);
    this.internalMap.addLayer(layerProxy.internalLayer);
    return layerProxy;
  }
}
