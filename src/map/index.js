// @flow
import Map from './map';

/**
 * Creates a new visualization for the given map configuration.
 * Returns a `Promise` which resolves to the created `Map`.
 * @api
 */
export const init =
  (configUrl:string, container:Element, engine:string = 'leaflet'):Promise<Map> =>
    Map.init(configUrl, container, engine);
