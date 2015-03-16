//pagedintervalviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedSigleNameViewModel = require('./pagedsiglenameviewmodel');
import moment = require('moment');
//
class PagedIntervalViewModel extends PagedSigleNameViewModel {
  private _start: string;
  private _end: string;
  private _format: string;
  constructor(dataMan: InfoData.IDataManager,
    xmodel: InfoData.IIntervalItem) {
    super(dataMan, xmodel);
    this._format = 'YYYY-MM-DD';
  }// constructor
  public get startDate(): string {
    return (this._start != undefined) ? this._start : null;
  }
  public set startDate(s: string) {
    this._start = (s != undefined) ? s : null;
  }
  public get endDate(): string {
    return (this._end != undefined) ? this._end : null;
  }
  public set endDate(s: string) {
    this._end = (s != undefined) ? s : null;
  }
  public get_current_value():InfoData.IIntervalItem {
    return super.get_current_value();
  }
  public set_current_value(s:InfoData.IIntervalItem){
    this.startDate = null;
    this.endDate = null;
    if ((s != undefined) && (s != null)){
       var d1 = s.startDate;
       if ((d1 != undefined) && (d1 != null)){
         this.startDate = moment(d1).format(this._format);
       }
       var d2 = s.endDate;
       if ((d2 != undefined) && (d2 != null)){
         this.endDate = moment(d2).format(this._format);
       }
    }
    super.set_current_value(s);
  }
  public get canSave() : boolean {
    var bRet = false;
    var s = ((this.sigle != null) &&
    (this.sigle.trim().length > 0)) ? this.sigle : null;
    if ((s == null) || (!this.hasDepartement)){
      return false;
    }
    var d1:Date = null;
    var d2:Date = null;
    try {
      var s1 = ((this.startDate != null) && (this.startDate.trim().length > 0)) ?
      this.startDate : null;
      var s2 = ((this.endDate != null) && (this.endDate.trim().length > 0)) ?
      this.endDate : null;
      if ((s1 != null) && (s2 != null)){
        var dd1 = moment(s1,this._format);
        var dd2 = moment(s2,this._format);
        if ((dd1 != null) && (dd2 != null) && dd1.isValid() && dd2.isValid()){
          d1 = dd1.toDate();
          d2 = dd2.toDate();
          bRet = (d1.getTime() <= d2.getTime());
        }
      }
    }catch(e){}
    return bRet;
  }// canSave
  public save():void {
    var bRet = false;
    var s = ((this.sigle != null) &&
    (this.sigle.trim().length > 0)) ? this.sigle : null;
    if ((s == null) || (!this.hasDepartement) || (this.current == null)){
      return;
    }
    var d1:Date = null;
    var d2:Date = null;
    try {
      var s1 = ((this.startDate != null) && (this.startDate.trim().length > 0)) ?
      this.startDate : null;
      var s2 = ((this.endDate != null) && (this.endDate.trim().length > 0)) ?
      this.endDate : null;
      if ((s1 != null) && (s2 != null)){
        var dd1 = moment(s1,this._format);
        var dd2 = moment(s2,this._format);
        if ((dd1 != null) && (dd2 != null) && dd1.isValid() && dd2.isValid()){
          d1 = dd1.toDate();
          d2 = dd2.toDate();
          bRet = (d1.getTime() <= d2.getTime());
          if (bRet){
            this.current.startDate = d1;
            this.current.endDate = d2;
            super.save();
          }
        }
      }
    }catch(e){}
  }// save
  public addNew(): any {
    super.addNew();
    this.startDate = moment().format(this._format);
    this.endDate = moment().format(this._format);
  }// addNew
}// class PagedIntervalViewModel
export = PagedIntervalViewModel;
