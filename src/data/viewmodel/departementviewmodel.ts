//departementviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedSigleNameViewModel = require('./pagedsiglenameviewmodel');
import Departement = require('./../domain/departement');
//
class DepartementViewModel extends PagedSigleNameViewModel {
  constructor(dataMan: InfoData.IDataManager) {
    super(dataMan, new Departement());
  }// constructor
}// class DepartementViewModel
export = DepartementViewModel;
