//personviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import PagedViewModel = require('./pagedviewmodel');
import Departement = require('./../domain/departement');
//
class PersonViewModel extends PagedViewModel {
  constructor(dataMan: InfoData.IDataManager,xmodel:InfoData.IPerson) {
    super(dataMan, xmodel);
  }// constructor
  public get username():string {
    return (this.current != null) ? this.current.username : null;
  }
  public set username(s:string){
    if (this.current != null){
      this.current.username = s;
    }
  }
  public get firstname():string {
    return (this.current != null) ? this.current.firstname : null;
  }
  public set firstname(s:string){
    if (this.current != null){
      this.current.firstname = s;
    }
  }
  public get lastname():string {
    return (this.current != null) ? this.current.lastname : null;
  }
  public set lastname(s:string){
    if (this.current != null){
      this.current.lastname = s;
    }
  }
  public get email():string {
    return (this.current != null) ? this.current.email : null;
  }
  public set email(s:string){
    if (this.current != null){
      this.current.email = s;
    }
  }
  public get phone():string {
    return (this.current != null) ? this.current.username : null;
  }
  public set phone(s:string){
    if (this.current != null){
      this.current.phone = s;
    }
  }
  public get fullname():string {
    return (this.current != null) ? this.current.fullname : null;
  }
  public reset_password(): void {
    var item = this.current;
    if ((item == undefined) || (item == null)){
      return;
    }
    if (!item.has_id){
      return;
    }
    item.reset_password();
    var self = this;
    this.dataService.update_one_item(item).then((r)=>{
       self.info = "Mot de passe initialisé";
    },(err)=>{
      self.internal_set_error(err);
    });
  }
}// class PersonViewModel
export = PersonViewModel;
