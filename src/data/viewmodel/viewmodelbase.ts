//viewmodelbase.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import Departement = require('../domain/departement');
import Annee = require('../domain/annee');
import Semestre = require('../domain/semestre');
import Unite = require('../domain/unite');
import Matiere = require('../domain/matiere');
import Groupe = require('../domain/groupe');
//
class ViewModelBase {
  public dataService: InfoData.IDataManager;
  private _model: InfoData.IBaseItem;
  //
  //
  public title: string;
  public error: string;
  public status: string;
  public info: string;
  //
  public _dep: Departement;
  public _annee: Annee;
  public _sem: Semestre;
  public _unite: Unite;
  public _mat: Matiere;
  public _groupe: Groupe;
  //
  constructor(dataMan: InfoData.IDataManager,xmodel: InfoData.IBaseItem) {
    this.dataService = dataMan;
    if (xmodel != undefined) {
      this._model = xmodel;
    } else {
      this._model = null;
    }
    this.title = null;
    this.error = null;
    this.status = null;
    this.info = null;
    this._dep = null;
    this._annee = null;
    this._sem = null;
    this._unite = null;
    this._mat = null;
    this._groupe = null;
  }// constructor
  //
  public get modelItem(): InfoData.IBaseItem {
    return (this._model != undefined) ? this._model : null;
  }
  public set modelItem(s : InfoData.IBaseItem){
    this._model = (s != undefined) ? s : null;
    this.refreshAll();
  }
  //
  public refreshAll():any{
    return true;
  }
  //
  public change_groupe(s: Groupe): void {
    this._groupe = (s != null) ? s : null;
  }
  public change_matiere(s: Matiere): void {
    this._mat = (s != null) ? s : null;
  }
  public change_unite(s: Unite): void {
    this._unite = (s != null) ? s : null;
  }
  public change_semestre(s: Semestre): void {
    this._sem = (s != null) ? s : null;
  }
  public change_annee(s: Annee): void {
    this._annee = (s != null) ? s : null;
  }
  public change_departement(s: Departement): void {
    this._dep = (s != undefined) ? s : null;
  }
  //
  public get departement(): Departement {
    return (this._dep != undefined) ? this._dep : null;
  }
  public set departement(s: Departement) {
    this.change_departement(s);
  }
  public get departementid(): any {
    return ((this.departement != null) && this.departement.has_id) ?
      this.departement.id : null;
  }
  public set departementid(id:any) {
    if ((!this.hasDataService) || (id == undefined) || (id == null)){
      this.departement = null;
    } else {
      var self = this;
      var model = new Departement();
      model.id = id;
      this.dataService.get_one_item(model).then((d:Departement)=>{
        self.departement = d;
      },(err) =>{
        self.internal_set_error(err);
      });
    }
  }// setDepartementid
  public get hasDepartement(): boolean {
    return (this.departementid != null);
  }
  //
  public get annee(): Annee {
    return (this._annee != undefined) ? this._annee : null;
  }
  public set annee(s: Annee) {
    this.change_annee(s);
  }
  public get anneeid(): any {
    return ((this.annee != null) && this.annee.has_id) ?
      this.annee.id : null;
  }
  public set anneeid(id:any) {
    if ((!this.hasDataService) || (id == undefined) || (id == null)){
      this.annee = null;
    } else {
      var self = this;
      var model = new Annee();
      model.id = id;
      this.dataService.get_one_item(model).then((d:Annee)=>{
        self.annee = d;
      },(err) =>{
        self.internal_set_error(err);
      });
    }
  }// setAnneeid
  public get hasAnnee(): boolean {
    return (this.anneeid != null);
  }
  //
  public get unite(): Unite {
    return (this._unite != undefined) ? this._unite : null;
  }
  public set unite(s: Unite) {
    this.change_unite(s);
  }
  public get uniteid(): any {
    return ((this.unite != null) && this.unite.has_id) ?
      this.unite.id : null;
  }
  public set uniteid(id:any) {
    if ((!this.hasDataService) || (id == undefined) || (id == null)){
      this.unite = null;
    } else {
      var self = this;
      var model = new Unite();
      model.id = id;
      this.dataService.get_one_item(model).then((d:Unite)=>{
        self.unite = d;
      },(err) =>{
        self.internal_set_error(err);
      });
    }
  }// setDepartementid
  public get hasUnite(): boolean {
    return (this.uniteid != null);
  }
  //
  public get groupe(): Groupe {
    return (this._groupe != undefined) ? this._groupe : null;
  }
  public set groupe(s: Groupe) {
    this.change_groupe(s);
  }
  public get groupeid(): any {
    return ((this.groupe != null) && this.groupe.has_id) ?
      this.groupe.id : null;
  }
  public set groupeid(id:any) {
    if ((!this.hasDataService) || (id == undefined) || (id == null)){
      this.groupe = null;
    } else {
      var self = this;
      var model = new Groupe();
      model.id = id;
      this.dataService.get_one_item(model).then((d:Groupe)=>{
        self.groupe = d;
      },(err) =>{
        self.internal_set_error(err);
      });
    }
  }// setGroupeid
  public get hasGroupe(): boolean {
    return (this.groupeid != null);
  }
  //
  public get semestre(): Semestre {
    return (this._sem != undefined) ? this._sem : null;
  }
  public set semestre(s: Semestre) {
    this.change_semestre(s);
  }
  public get semestreid(): any {
    return ((this.semestre != null) && this.semestre.has_id) ?
      this.semestre.id : null;
  }
  public set semestreid(id:any) {
    if ((!this.hasDataService) || (id == undefined) || (id == null)){
      this.semestre = null;
    } else {
      var self = this;
      var model = new Semestre();
      model.id = id;
      this.dataService.get_one_item(model).then((d:Semestre)=>{
        self.semestre = d;
      },(err) =>{
        self.internal_set_error(err);
      });
    }
  }// set semestreid
  public get hasSemestre(): boolean {
    return (this.semestreid != null);
  }
  //
  public get matiere(): Matiere {
    return (this._mat != undefined) ? this._mat : null;
  }
  public set matiere(s: Matiere) {
    this.change_matiere(s);
  }
  public get matiereid(): any {
    return ((this.matiere != null) && this.matiere.has_id) ?
      this.matiere.id : null;
  }
  public set matiereid(id:any) {
    if ((!this.hasDataService) || (id == undefined) || (id == null)){
      this.departement = null;
    } else {
      var self = this;
      var model = new Matiere();
      model.id = id;
      this.dataService.get_one_item(model).then((d:Matiere)=>{
        self.matiere = d;
      },(err) =>{
        self.internal_set_error(err);
      });
    }
  }// setMatiereid
  public get hasMatiere(): boolean {
    return (this.matiereid != null);
  }
  //
  public get hasDataService(): boolean {
    return ((this.dataService != undefined) && (this.dataService != null));
  }
  public get hasTitle(): boolean {
    return ((this.title != undefined) && (this.title != null) &&
      (this.title.trim().length > 0));
  }
  public get hasError(): boolean {
    return ((this.error != undefined) && (this.error != null) &&
      (this.error.trim().length > 0));
  }
  public get hasStatus(): boolean {
    return ((this.status != undefined) && (this.status != null) &&
      (this.status.trim().length > 0));
  }
  public get hasInfo(): boolean {
    return ((this.info != undefined) && (this.info != null) &&
      (this.info.trim().length > 0));
  }
  public internal_set_error(err?: any): void {
    if ((err != undefined) && (err != null)) {
      if ((err.message != undefined) && (err.message != null)) {
        this.error = err.message.toString();
      } else if ((err.msg != undefined) && (err.msg != null)) {
        this.error = err.msg.toString();
      } else if ((err.statusText != undefined) && (err.statusText != null)) {
        this.error = err.statusText;
      }
      else {
        this.error = err.toString();
      }
    } else {
      this.error = null;
    }
  }// internal_set_error
}// class ViewModelBase
export = ViewModelBase;
