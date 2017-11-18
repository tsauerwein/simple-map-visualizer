// @flow
import LeafletEngine from './leaflet';

export const getEngine = (name:string) => {
  if (name === 'leaflet') {
    return new LeafletEngine();
  } else {
    throw new Error(`Unknown map engine: ${name}`);
  }
};
