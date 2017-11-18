// @flow
import {getConfig} from './utils';
import type {MapConfig, LayerData} from './types';
import type {MapProxy} from './engines/mapproxy';
import {getEngine} from './engines';
import Layer from './layer';
import TileLayer from './layer/tile';
import CartoLayer from './layer/carto';
import {getLayerData, buildBaseUrl} from './layer/utils';

/**
 * This class provides an interface for the user of the
 * library to interact with the internally used mapping
 * engine.
 *
 * @api
 */
export default class Map {

  mapProxy:MapProxy;
  layers:Array<Layer> = [];

  constructor(mapProxy:MapProxy) {
    this.mapProxy = mapProxy;
  }

  /**
   * @api
   */
  static init(configUrl:string, container:Element, engine:string = 'leaflet'):Promise<Map> {
    return getConfig(configUrl)
      .then((mapConfig:MapConfig) => getLayerData(mapConfig))
      .then(([layerData, mapConfig]) =>
        Map.createMap_(mapConfig, layerData, container, engine)
      );
  }

  /**
   * @api
   */
  getLayers():Array<Layer> {
    return this.layers;
  }

  /**
   * @api
   */
  setZoom(z:number) {
    this.mapProxy.setZoom(z);
  }

  /**
   * @api
   */
  getZoom():number {
    return this.mapProxy.getZoom();
  }

  setLayers_(layers:Array<Layer>) {
    this.layers = layers;
    this.layers.forEach((layer) => {
      const layerProxy = this.mapProxy.addLayer(layer);
      layer.setProxy(layerProxy);
    });
  }

  static createMap_(
    mapConfig:MapConfig, layerData:LayerData,
    container:Element, engineType:string) {
    const layers = Map.createLayers_(mapConfig, layerData);
    const mapOptions = {
      zoom: mapConfig.zoom,
      center: mapConfig.center,
      container
    };

    const engine = getEngine(engineType);
    const map = new Map(engine.createMap(mapOptions));
    map.setLayers_(layers);

    return map;
  }

  static createLayers_(mapConfig:MapConfig, layerData:LayerData):Array<Layer> {
    const userName = mapConfig.maps_api_config.user_name;
    const baseUrl = buildBaseUrl(layerData, userName);

    const layers = mapConfig.layers.map((layer, i) => {
      const url = baseUrl.replace('{index}', `${i}`);
      if (layer.type === 'tiled') {
        return new TileLayer(url);
      } else if (layer.type === 'CartoDB') {
        return new CartoLayer(url, layer, userName);
      } else {
        throw new Error(`Unexpected layer type: ${layer.type}`);
      }
    });

    return layers;
  }
}
