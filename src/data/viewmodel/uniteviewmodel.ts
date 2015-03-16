//uniteviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedSigleNameViewModel = require('./pagedsiglenameviewmodel');
import Departement = require('./../domain/departement');
import Unite = require('./../domain/unite');
//
class UniteViewModel extends PagedSigleNameViewModel {
  constructor(dataMan: InfoData.IDataManager) {
    super(dataMan, new Unite());
  }// constructor
  public change_departement(s: Departement): void {
    super.change_departement(s);
    if ((s != undefined) && (s != null)) {
      var g = new Unite();
      g.departementid = s.id;
      this.modelItem = g;
    }
  }
}// class UniteViewModel
export = UniteViewModel;
