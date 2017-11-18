// @flow

import type {MapProxy} from './mapproxy';

export type MapOptions = {
  zoom:number,
  center:[number, number],
  container:Element
};

export interface Engine {
  createMap(options:MapOptions):MapProxy;
}
