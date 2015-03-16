//etudevent.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import BaseEvent = require('./baseevent');
//
class EtudEvent extends BaseEvent implements InfoData.IEtudEvent {
  private _aff: any;
  private _grid: any;
  private _note: number;
  private _etud: any;
  //
  constructor(oMap?: any) {
    super(oMap);
    if ((oMap != undefined) && (oMap != null)) {
      if (oMap.etudaffectationid != undefined) {
        this.etudaffectationid = oMap.profaffectationid;
      }
      if (oMap.groupeeventid != undefined) {
        this.groupeeventid = oMap.groupeeventid;
      }
      if (oMap.etudiantid != undefined) {
        this.etudiantid = oMap.etudiantid;
      }
      if (oMap.note != undefined) {
        this.note = oMap.note;
      }
    }// oMap
  }// constructor
  //
  public get note(): number {
    return (this._note != undefined) ? this._note : null;
  }
  public set note(d: number) {
    this._note = (d != undefined) ? d : null;
  }
  public get has_note(): boolean {
    return (this.note != null);
  }
  //
  public get etudaffectationid(): any {
    return (this._aff != undefined) ? this._aff : null;
  }
  public set etudaffectationid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._aff = s;
    } else {
      this._aff = null;
    }
  }
  public get has_etudaffectationid(): boolean {
    return (this.etudaffectationid != null);
  }
  //
  public get etudiantid(): any {
    return (this._etud != undefined) ? this._etud : null;
  }
  public set etudiantid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._etud = s;
    } else {
      this._etud = null;
    }
  }
  public get has_etudiantid(): boolean {
    return (this.etudiantid != null);
  }
  public get groupeeventid(): any {
    return (this._grid != undefined) ? this._grid : null;
  }
  public set groupeeventid(s: any) {
    if ((s != undefined) && (s != null) && (s.toString().trim().length > 0)) {
      this._grid = s;
    } else {
      this._grid = null;
    }
  }
  public get has_groupeeventid(): boolean {
    return (this.groupeeventid != null);
  }
  //
  public get is_storeable(): boolean {
    return (this.type != null) && (this.collection_name != null) &&
      this.has_departementid && this.has_anneeid && this.has_semestreid &&
      this.has_groupeid &&
      this.has_uniteid && this.has_matiereid && this.has_genre &&
      this.has_date && this.has_etudiantid;
  }
  public to_insert_map(oMap: any): void {
    super.to_insert_map(oMap);
    if (this.has_etudaffectationid) {
      oMap.etudaffectationid = this.etudaffectationid;
    }
    if (this.has_etudiantid) {
      oMap.etudiantid = this.etudiantid;
    }
    if (this.has_groupeeventid) {
      oMap.groupeeventid = this.groupeeventid;
    }
    if (this.has_note) {
      oMap.note = this.note;
    }
  }// to_insert_map
  public get type(): string {
    return 'etudevent';
  }
  public get collection_name(): string {
    return 'etudevents';
  }
}// class EtudEvent
export = EtudEvent;
