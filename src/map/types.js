// @flow

/**
 * Type definitions for JSON responses from web-services.
 */

export type TiledLayer = {
  type: 'tiled',
  options: {
    urlTemplate: string,
    minZoom: number,
    maxZoom: number,
    attribution: string
  }
};

export type CartoLayer = {
  type: 'CartoDB',
  options: {
    sql: string,
    cartocss: string,
    cartocss_version: string
  }
};

export type MapConfig = {
  center: [number, number],
  zoom: number,
  maps_api_config: {
    user_name: string,
    maps_api_template: string
  },
  layers: Array<TiledLayer | CartoLayer>
};

export type MapnikLayerData = {
  type: 'mapnik',
  id: string,
  meta: {
    cartocss: string,
    stats: {
      estimatedFeatureCount: number
    },
    cartocss_meta: {
      rules: {}
    }
  }
};

export type HttpLayerData = {
  type: 'http',
  id: string,
  meta: {
    stats: {}
  }
};

export type LayerData = {
  layergroupid: string,
  metadata: {
    layers: Array<MapnikLayerData | HttpLayerData>
  },
  cdn_url: {
    templates: {
      http: {
        url: string,
        subdomains: Array<string>
      },
      https: {
        url: string,
        subdomains: Array<string>
      }
    },
    http: string,
    https: string
  },
  last_updated: string
};
