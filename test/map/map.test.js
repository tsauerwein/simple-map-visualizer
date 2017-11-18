import Map from 'map/map';
import {data as layerData} from './../data/layer-data';
import {data as mapConfig} from './../data/map-config';

const mockEngine = {
  createMap: (options) => {
    const map = {
      options: options,
      layers: []
    };

    map.addLayer = (layer) => {
      map.layers.push(layer);
      return {
        setUrl: (url) => undefined
      };
    };
    return map;
  }
};

jest.mock('map/engines/index', () => ({
  getEngine: jest.fn((name:string) => {
    if (name === 'mock-engine') {
      return mockEngine;
    } else {
      throw new Error(`Unknown map engine: ${name}`);
    }
  })
}));

describe('Map', () => {
  describe('#createMap_', () => {
    test('layers are added correctly', () => {
      const map = Map.createMap_(
        mapConfig, layerData, {}, 'mock-engine');
      expect(map.layers.length).toBe(3);
    });
  });
});
