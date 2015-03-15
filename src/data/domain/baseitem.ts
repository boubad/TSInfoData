// baseitem.ts
/// <reference path="../../typings/infodata/infodata.d.ts" />
//
class BaseItem implements InfoData.IBaseItem {
  private _id: any;
  private _rev: any;
  //
  constructor(oMap?: any) {
    if ((oMap != undefined) && (oMap != null)) {
      if (oMap._id != undefined) {
        this.id = oMap._id;
      }
      if (oMap._rev != undefined) {
        this.rev = oMap._rev;
      }
    }
  }// constructor
  public get id(): any {
    return ((this._id != undefined) && (this._id != null) &&
      (this._id.toString().trim().length > 0)) ?
      this._id : null;
  }
  public set id(s: any) {
    this._id = s;
  }
  public get has_id(): boolean {
    return (this.id != null);
  }
  public get rev(): any {
    return ((this._rev != undefined) && (this._rev != null) &&
      (this._rev.toString().trim().length > 0)) ?
      this._rev : null;
  }
  public set rev(s: any) {
    this._rev = s;
  }
  public get has_rev(): boolean {
    return (this.rev != null);
  }
  public get type(): string {
    return null;
  }
  public get collection_name(): string {
    return null;
  }
  public get is_storeable(): boolean {
    return (this.type != null) && (this.collection_name != null);
  }
  public to_insert_map(oMap: any): void {
    oMap.type = this.type;
  }
  public to_fetch_map(oMap: any): void {
    this.to_insert_map(oMap);
    if (this.id != null) {
      oMap._id = this.id;
    }
    if (this.rev != null) {
      oMap._rev = this.rev;
    }
  }
  public toString():string {
    var oMap = {};
    this.to_fetch_map(oMap);
    return JSON.stringify(oMap);
  }// toString
}// class BaseItem
export = BaseItem;
