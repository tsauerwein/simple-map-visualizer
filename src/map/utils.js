// @flow
import type {MapConfig, LayerData} from './types';

const MAP_API_URL:string = 'https://documentation.cartodb.com/api/v1/map';

export const checkStatus = (response:Response):Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
};

export const getJson = (response:Response):Promise<Object> => response.json();

export const getConfig = (configUrl:string):Promise<MapConfig> =>
  fetch(configUrl)
    .then(checkStatus)
    .then(getJson);

export const requestLayerData = (layerConfig:Object):Promise<LayerData> => {
  const postData = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(layerConfig)
  };

  return fetch(MAP_API_URL, postData)
    .then(checkStatus)
    .then(getJson);
};