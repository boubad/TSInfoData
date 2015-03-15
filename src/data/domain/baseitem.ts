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
  //
  public _array_contains(cont: any[], val: any): boolean {
    if ((cont != undefined) && (cont != null) && (val != undefined) &&
      (val != null)) {
      var s: string = val.toString().trim().toLowerCase();
      if (s.length > 0) {
        var n: number = cont.length;
        for (var i = 0; i < n; ++i) {
          var x = cont[i];
          if ((x != undefined) && (x != null)) {
            var ss: string = x.toString().trim().toLowerCase();
            if (ss == s) {
              return true;
            }
          }
        }// i
      }// s
    }
    return false;
  }// _array_contains
  public _array_add(cont: any[], val: any): void {
    if ((cont != undefined) && (cont != null) && (val != undefined) &&
      (val != null)) {
      var s: string = val.toString().trim().toLowerCase();
      if (s.length > 0) {
        var bFound: boolean = false;
        var n: number = cont.length;
        for (var i = 0; i < n; ++i) {
          var x = cont[i];
          if ((x != undefined) && (x != null)) {
            var ss: string = x.toString().trim().toLowerCase();
            if (ss == s) {
              bFound = true;
              break;
            }
          }
        }// i
        if (!bFound) {
          cont.push(val);
        }
      }// val
    }
  }// _array_add
  public _array_remove(cont: any[], val: any): void {
    if ((cont != undefined) && (cont != null) && (val != undefined) &&
      (val != null)) {
      var s: string = val.toString().trim().toLowerCase();
      if (s.length > 0) {
        var index: number = -1;
        var n: number = cont.length;
        for (var i = 0; i < n; ++i) {
          var x = cont[i];
          if ((x != undefined) && (x != null)) {
            var ss: string = x.toString().trim().toLowerCase();
            if (ss == s) {
              index = i;
              break;
            }
          }
        }// i
        if (index >= 0) {
          cont.slice(index, 1);
        }
      }// val
    }
  }// _array_add
}// class BaseItem
export = BaseItem;
