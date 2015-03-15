//baseevent.ts
//
/// <reference path="./descriptionitem.ts" />
//
import DescriptionItem = require('./descriptionitem');
//
class BaseEvent extends DescriptionItem implements InfoData.IBaseEvent {
  private _depid:any;
  private _groupeid:any;
  private _uniteid:any;
  private _anneeid: any;
  private _semestreid: any;
  private _personid: any;
  private _matiereid: any;
  private _date: Date;
  private _genre: string;
  private _docs: any[];
  private _status:string;
  //
  constructor(oMap?: any) {
    super(oMap);
    if ((oMap != undefined) && (oMap != null)) {
      if (oMap.status != undefined){
        this.status = oMap.status;
      }
      if (oMap.documentids != undefined){
        this.documentids = oMap.documentids;
      }
      if (oMap.date != undefined){
        this.date = oMap.date;
      }
      if (oMap.genre != undefined){
        this.genre = oMap.genre;
      }
      if (oMap.groupeid != undefined) {
        this.groupeid = oMap.groupeid;
      }
      if (oMap.uniteid != undefined) {
        this.uniteid = oMap.uniteid;
      }
      if (oMap.matiereid != undefined) {
        this.matiereid = oMap.matiereid;
      }
      if (oMap.anneeid != undefined) {
        this.anneeid = oMap.anneeid;
      }
      if (oMap.semestreid != undefined) {
        this.semestreid = oMap.semestreid;
      }
      if (oMap.personid != undefined) {
        this.personid = oMap.personid;
      }
      if (oMap.departementid != undefined) {
        this.departementid = oMap.departementid;
      }
    }// oMap
  }// constructor
  //
  //
  public get documentids(): any[] {
    return ((this._docs !== undefined) &&
      (this._docs !== null)) ? this._docs : [];
  }
  public set documentids(s: any[]) {
    this._docs = ((s != undefined) && (s != null)) ? s : [];
  }
  public get has_documentids(): boolean {
    return ((this._docs !== undefined) && (this._docs != null) &&
      (this._docs.length > 0));
  }
  public add_documentid(id: any): void {
    if ((id != undefined) && (id != null) &&
      (id.toString().trim().length > 0)) {
      if ((this._docs == undefined) || (this._docs == null)) {
        this._docs = [];
      }
      this._array_add(this._docs, id);
    }
  }
  public remove_documentid(id: any): void {
    if ((id != undefined) && (id != null) &&
      (id.toString().trim().length > 0)) {
      if ((this._docs != undefined) && (this._docs != null) &&
        (this._docs.length > 0)) {
        this._array_remove(this._docs, id);
      }
    }
  }
  //
  public get date(): Date {
    return (this._date != undefined) ? this._date : null;
  }
  public set date(s: Date) {
    if ((s != undefined) && (s != null)) {
      this._date = s;
    } else {
      this._date = null;
    }
  }
  public get has_date(): boolean {
    return (this.date != null);
  }
  //
  public get genre(): string {
    return (this._genre != undefined) ? this._genre : null;
  }
  public set genre(s: string) {
    if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
      this._genre = s.trim().toLowerCase();
    } else {
      this._status = null;
    }
  }
  public get has_genre(): boolean {
    return (this.genre != null);
  }
  //
  public get status(): string {
    return (this._status != undefined) ? this._status : null;
  }
  public set status(s: string) {
    if ((s != undefined) && (s != null) && (s.trim().length > 0)) {
      this._status = s.trim().toLowerCase();
    } else {
      this._status = null;
    }
  }
  public get has_status(): boolean {
    return (this.status != null);
  }
  //
  public get personid(): any {
    return (this._personid != undefined) ? this._personid : null;
  }
  public set personid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._personid = s;
    } else {
      this._personid = null;
    }
  }
  public get has_personid(): boolean {
    return (this.personid != null);
  }
  //
  public get semestreid(): any {
    return (this._semestreid != undefined) ? this._semestreid : null;
  }
  public set semestreid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._semestreid = s;
    } else {
      this._semestreid = null;
    }
  }
  public get has_semestreid(): boolean {
    return (this.semestreid != null);
  }
  //
  public get groupeid(): any {
    return (this._groupeid != undefined) ? this._groupeid : null;
  }
  public set groupeid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._groupeid = s;
    } else {
      this._groupeid = null;
    }
  }
  public get has_groupeid(): boolean {
    return (this.groupeid != null);
  }
  //
  //
  public get departementid(): any {
    return (this._depid != undefined) ? this._depid : null;
  }
  public set departementid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._depid = s;
    } else {
      this._depid = null;
    }
  }
  public get has_departementid(): boolean {
    return (this.departementid != null);
  }
  //
  public get anneeid(): any {
    return (this._anneeid != undefined) ? this._matiereid : null;
  }
  public set anneeid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._anneeid = s;
    } else {
      this._anneeid = null;
    }
  }
  public get has_anneeid(): boolean {
    return (this.anneeid != null);
  }
  //
  public get matiereid(): any {
    return (this._matiereid != undefined) ? this._matiereid : null;
  }
  public set matiereid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._matiereid = s;
    } else {
      this._matiereid = null;
    }
  }
  public get has_matiereid(): boolean {
    return (this.matiereid != null);
  }
  //
  public get uniteid(): any {
    return (this._uniteid != undefined) ? this._uniteid : null;
  }
  public set uniteid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._uniteid = s;
    } else {
      this._uniteid = null;
    }
  }
  public get has_uniteid(): boolean {
    return (this.uniteid != null);
  }

  public to_insert_map(oMap: any): void {
    super.to_insert_map(oMap);
    if (this.has_departementid) {
      oMap.departementid = this.departementid;
    }
    if (this.has_groupeid) {
      oMap.groupeid = this.groupeid;
    }
    if (this.has_anneeid) {
      oMap.anneeid = this.anneeid;
    }
    if (this.has_semestreid) {
      oMap.semestreid = this.semestreid;
    }
    if (this.has_personid) {
      oMap.personid = this.personid;
    }
    if (this.has_uniteid) {
      oMap.uniteid = this.uniteid;
    }
    if (this.has_matiereid) {
      oMap.matiereid = this.matiereid;
    }
    if (this.has_date){
      oMap.date = this.date;
    }
    if (this.has_genre) {
      oMap.genre = this.genre;
    }
    if (this.has_status) {
      oMap.status = this.status;
    }
    if (this.has_documentids) {
      oMap.documentids = this.documentids;
    }
  }// to_insert_map
  public to_fetch_map(oMap: any): void {
    super.to_fetch_map(oMap);
    oMap.documentids = null;
  }
}// class BaseEvent
export = BaseEvent;
