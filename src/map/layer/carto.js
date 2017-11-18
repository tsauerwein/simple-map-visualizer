// @flow

import Tile from './tile';
import type {CartoLayer} from './../types';
import {requestLayerData} from './../utils';
import {buildLayerConfig, buildBaseUrl} from './utils';

/**
 * @api
 */
export default class Carto extends Tile {
  layerConfig:CartoLayer;
  userName:string;

  constructor(url:string, layerConfig:CartoLayer, userName:string) {
    super(url);
    this.layerConfig = layerConfig;
    this.userName = userName;
  }

  /**
   * @api
   */
  setSQL(sql:string) {
    this.layerConfig.options.sql = sql;

    // request a new url for the changed layer config
    requestLayerData(buildLayerConfig([this.layerConfig]))
      .then((layerData) => {
        const baseUrl = buildBaseUrl(layerData, this.userName);
        // only one layer was updated, so the index is 0
        const url = baseUrl.replace('{index}', '0');
        this.setUrl(url);
      });
  }
}
