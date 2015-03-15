//unite.ts
/// <reference path="./siglenameitem.ts" />
//
import SigleNameItem = require('./siglenameitem');
//
class Unite extends SigleNameItem implements InfoData.IUnite {
  constructor(oMap?: any) {
    super(oMap);
  } // constructor

  public get type(): string {
    return 'unite';
  }
  public get collection_name(): string {
    return 'unites';
  }
} // class Groupe
export = Unite;
