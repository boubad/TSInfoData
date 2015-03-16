//matiereviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedSigleNameViewModel = require('./pagedsiglenameviewmodel');
import Departement = require('./../domain/departement');
import Unite = require('./../domain/unite');
import Matiere = require('./../domain/matiere');
//
class MatiereViewModel extends PagedSigleNameViewModel {
  //
  private _coef: string;
  private _ecs: string;
  //
  constructor(dataMan: InfoData.IDataManager) {
    super(dataMan, new Matiere());
  }// constructor
  public change_departement(s: Departement): void {
    super.change_departement(s);
    if ((s != undefined) && (s != null)) {
      var g = new Matiere();
      g.departementid = s.id;
      this.modelItem = g;
    }
  }
  public change_unite(s: Unite): void {
    super.change_unite(s);
    if ((s != undefined) && (s != null)) {
      var g = new Matiere();
      g.uniteid = s.id;
      g.departementid = s.departementid;
      this.modelItem = g;
    }
  } // change_unite
  public get mat_module(): string {
    return (this.current != null) ? this.current.mat_module : null;
  }
  public set mat_module(s: string) {
    if (this.current != null) {
      this.current.mat_module = s;
    }
  }
  public get genre(): string {
    return (this.current != null) ? this.current.genre : null;
  }
  public set genre(s: string) {
    if (this.current != null) {
      this.current.genre = s;
    }
  }
  public get ecs(): number {
    return (this.current != null) ? this.current.ecs : null;
  }
  public set ecs(s: number) {
    if (this.current != null) {
      this.current.ecs = s;
    }
  }
  public get coefficient(): number {
    return (this.current != null) ? this.current.coefficient : null;
  }
  public set coefficient(s: number) {
    if (this.current != null) {
      this.current.coefficient = s;
    }
  }
}// class MatiereViewModel
export = MatiereViewModel;
