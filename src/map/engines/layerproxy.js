// @flow

/**
 * Wraps the layer of a mapping engine.
 */
export interface LayerProxy {
  show():void;
  hide():void;
  isVisible():boolean;
  setUrl(url:string):void;
};
