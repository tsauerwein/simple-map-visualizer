import {requestLayerData} from './../utils';
import Layer from './';
import TileLayer from './tile';
import CartoLayer from './carto';
import type {MapConfig, LayerData, TiledLayer as TiledLayerType,
  CartoLayer as CartoLayerType} from './../types';

export const buildBaseUrl = (layerData:LayerData, userName:string):string =>
  (
    `https://${layerData.cdn_url.https}/${userName}/api/` +
    `v1/map/${layerData.layergroupid}/{index}/{z}/{x}/{y}.png`
  );

export const createLayers = (mapConfig:MapConfig, layerData:LayerData):Array<Layer> => {
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
};

export const buildLayerConfig =
  (mapConfigLayers:Array<TiledLayerType|CartoLayerType>):Object => {
    const layers = mapConfigLayers.map((layer) => {
      if (layer.type === 'tiled') {
        return {
          'type': 'http',
          'options': {
            'urlTemplate': layer.options.urlTemplate
          }
        };
      } else if (layer.type === 'CartoDB') {
        const opt = layer.options;
        return {
          'type': 'mapnik',
          'options': {
            'cartocss': opt.cartocss,
            'cartocss_version': opt.cartocss_version,
            'sql': opt.sql,
            'interactivity': [
              'cartodb_id'
            ]
          }
        };
      } else {
        throw new Error(`Unexpected layer type: ${layer.type}`);
      }
    });

    return {
      layers
    };
  };

export const getLayerData = (mapConfig:MapConfig):Promise<[LayerData, MapConfig]> => {
  const layerConfig = buildLayerConfig(mapConfig.layers);
  return requestLayerData(layerConfig)
    .then((layerData) => [layerData, mapConfig]);
};
