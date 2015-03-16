//anneeviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedIntervalViewMode = require('./pagedintervalviewmodel');
import Departement = require('./../domain/departement');
import Annee = require('./../domain/annee');
//
class AnneeViewModel extends PagedIntervalViewMode {
  constructor(dataMan: InfoData.IDataManager) {
    super(dataMan, new Annee());
  }// constructor
  public change_departement(s: Departement): void {
    super.change_departement(s);
    if ((s != undefined) && (s != null)) {
      var g = new Annee();
      g.departementid = s.id;
      this.modelItem = g;
    }
  }
}// class AnneeViewModel
export = AnneeViewModel;
