//groupeviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedSigleNameViewModel = require('./pagedsiglenameviewmodel');
import Departement = require('./../domain/departement');
import Groupe = require('./../domain/groupe');
//
class GroupeViewModel extends PagedSigleNameViewModel {
  constructor(dataMan: InfoData.IDataManager) {
    super(dataMan, new Groupe());
  }// constructor
  public change_departement(s: Departement): void {
    super.change_departement(s);
    if ((s != undefined) && (s != null)){
      var g = new Groupe();
      g.departementid = s.id;
      this.modelItem = g;
    }
  }
}// class GroupeViewModel
export = GroupeViewModel;
