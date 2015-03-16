//semestreviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedIntervalViewMode = require('./pagedintervalviewmodel');
import Departement = require('./../domain/departement');
import Annee = require('./../domain/annee');
import Semestre = require('./../domain/semestre');
//
class SemestreViewModel extends PagedIntervalViewMode {
  constructor(dataMan: InfoData.IDataManager) {
    super(dataMan, new Semestre());
  }// constructor
  public change_departement(s: Departement): void {
    super.change_departement(s);
    if ((s != undefined) && (s != null)) {
      var g = new Semestre();
      g.departementid = s.id;
      this.modelItem = g;
    }
  }
  public change_annee(s: Annee): void {
    super.change_annee(s);
    if ((s != undefined) && (s != null)){
      var g = new Semestre();
      g.anneeid = s.id;
      g.departementid = s.departementid;
      this.modelItem = g;
    }
  } // change_annee
}// class SemestreViewModel
export = SemestreViewModel;
