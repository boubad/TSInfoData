//departementpersonviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PersonViewModel = require('./personviewmodel');
import Departement = require('./../domain/departement');
//
class DepartementPersonViewModel extends PersonViewModel {
  constructor(dataMan: InfoData.IDataManager, xmodel: InfoData.IPerson) {
    super(dataMan, xmodel);
  }// constructor
  public change_departement(s: Departement): void {
    super.change_departement(s);
    if ((s != undefined) && (s != null)) {
      var g = this.current;
      if (g != null) {
        g.departementid = s.id;
        this.refreshAll();
      }
    }
  }
  public get canSave(): boolean {
    return (this.hasDepartement && (this.current != null) &&
      this.current.is_storeable);
  }
}// class DepartementPersonViewModel
export = DepartementPersonViewModel;
