// @flow
import type {Engine as EngineInterface, MapOptions} from './../engine';
import Map from './map';

export default class Engine implements EngineInterface {
  createMap(options:MapOptions) {
    return new Map(options);
  }
}
