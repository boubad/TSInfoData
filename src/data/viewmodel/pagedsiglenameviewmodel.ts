//pagedsiglenameviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedViewModel = require('./pagedviewmodel');
//
class PagedSigleNameViewModel extends PagedViewModel {
  constructor(dataMan: InfoData.IDataManager,
    xmodel: InfoData.ISigleNameItem) {
    super(dataMan, xmodel)
      }// constructor
  public get sigle():string {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.sigle !== undefined)) ? this.current.sigle : null;
  }
  public set sigle(s: string) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.sigle = s;
    }
  }
  public get name() :string {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.name !== undefined)) ? this.current.name : null;
  }
  public set name(s:string) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.name = s;
    }
  }
  public get description():string {
    return ((this.current !== undefined) && (this.current !== null) &&
      (this.current.remarks !== undefined)) ? this.current.remarks : null;
  }
  public set description(s:string) {
    if ((this.current !== undefined) && (this.current !== null)) {
      this.current.remarks = s;
    }
  }
}// class PagedSigleNameViewModel
export = PagedSigleNameViewModel;
