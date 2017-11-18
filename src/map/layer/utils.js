import {requestLayerData} from './../utils';
import Layer from './';
import type {MapConfig, LayerData, TiledLayer as TiledLayerType,
  CartoLayer as CartoLayerType} from './../types';

export const buildBaseUrl = (layerData:LayerData, userName:string):string =>
  (
    `https://${layerData.cdn_url.https}/${userName}/api/` +
    `v1/map/${layerData.layergroupid}/{index}/{z}/{x}/{y}.png`
  );


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
