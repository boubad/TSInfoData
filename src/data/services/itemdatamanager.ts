// itemdatamanager.ts
//
/// <reference path="../../typings/infodata/infodata.d.ts" />
//
import Q = require('q');
//
import BaseItem = require('../domain/baseitem');
import Departement = require('../domain/departement');
import Person = require('../domain/person');
import EtudiantPerson = require('../domain/etudperson');
import Unite = require('../domain/unite');
import Groupe = require('../domain/groupe');
import Matiere = require('../domain/matiere');
import Etudiant = require('../domain/etudiant');
import Enseignant = require('../domain/enseignant');
import Annee = require('../domain/annee');
import Semestre = require('../domain/semestre');
import AttachedDoc = require('../domain/attacheddoc');
import ProfAffectation = require('../domain/profaffectation');
import EtudAffectation = require('../domain/etudaffectation');
import GroupeEvent = require('../domain/groupeevent');
import EtudEvent = require('../domain/etudevent');
//
class ItemDataManager implements InfoData.IDataManager {
  manager: InfoData.IHttpManager;
  //
  constructor(man: InfoData.IHttpManager) {
    this.manager = man;
  }// constructor
  //
  private _create_item(oMap: any): InfoData.IBaseItem {
    if (oMap.type == undefined) {
      return null;
    }
    var t: string = oMap.type;
    if (t == 'departement') {
      return new Departement(oMap);
    } else if (t == 'person') {
      return new Person(oMap);
    } else if (t == 'etudperson') {
      return new EtudiantPerson(oMap);
    } else if (t == 'unite') {
      return new Unite(oMap);
    } else if (t == 'groupe') {
      return new Groupe(oMap);
    } else if (t == 'matiere') {
      return new Matiere(oMap);
    } else if (t == 'etudiant') {
      return new Etudiant(oMap);
    } else if (t == 'enseignant') {
      return new Enseignant(oMap);
    } else if (t == 'annee') {
      return new Annee(oMap);
    } else if (t == 'semestre') {
      return new Semestre(oMap);
    } else if (t == 'attacheddoc') {
      return new AttachedDoc(oMap);
    } else if (t == 'profaffectation') {
      return new ProfAffectation(oMap);
    } else if (t == 'etudaffectation') {
      return new EtudAffectation(oMap);
    } else if (t == 'groupeevent') {
      return new GroupeEvent(oMap);
    } else if (t == 'etudevent') {
      return new EtudEvent(oMap);
    }
    return null;
  }// create_item
  public form_url(prefix?: string, params?: string[], query?: any): string {
    var sRet = '/api/';
    if ((prefix != undefined) && (prefix != null)) {
      sRet = sRet + prefix;
    }
    if ((params != undefined) && (params != null)) {
      var n = params.length;
      for (var i = 0; i < n; ++i) {
        sRet = sRet + '/' + encodeURIComponent(params[i]);
      } // i
    }
    if ((query != undefined) && (query != null)) {
      var bFirst = true;
      for (var key in query) {
        var v = query[key];
        if (v != null) {
          if (bFirst) {
            bFirst = false;
            sRet = sRet + '?';
          } else {
            sRet = sRet + '&';
          }
          sRet = sRet + key + '=' + encodeURIComponent(v);
        } // v
      } // key
    } // query
    return sRet;
  } // form_url
  //
  private _perform_get(prefix: string, oMap: any,
    bCount?: boolean, start?: number, count?: number): Q.IPromise<any> {
    if ((bCount != undefined) && (bCount != null) && (bCount == true)) {
      oMap['$count'] = 1;
    } else {
      if ((start != undefined) && (start != null) && (start > 0)) {
        oMap['$skip'] = start;
      }
      if ((count != undefined) && (count != null) && (count > 0)) {
        oMap['$limit'] = count;
      }
    }
    var url = this.form_url(prefix, null, oMap);
    return this.manager.perform_get(url);
  }// _perform_get
  //
  private _perform_post(item: InfoData.IBaseItem): Q.IPromise<any> {
    var oMap = {};
    item.to_insert_map(oMap);
    var url = item.collection_name;
    return this.manager.perform_post(url, oMap);
  }// _perform_post
  //
  private _perform_put(item: InfoData.IBaseItem): Q.IPromise<any> {
    var oMap = {};
    item.to_insert_map(oMap);
    var url = this.form_url(item.collection_name, [item.id.toString()]);
    return this.manager.perform_put(url, oMap);
  }// _perform_put
  //
  private _perform_delete(item: InfoData.IBaseItem): Q.IPromise<any> {
    var oMap = {};
    item.to_insert_map(oMap);
    var url = this.form_url(item.collection_name, [item.id.toString()]);
    return this.manager.perform_remove(url);
  }// _perform_delete
  //
  public get_items_count(item: InfoData.IBaseItem): Q.IPromise<number> {
    var oMap = {};
    item.to_fetch_map(oMap);
    return this._perform_get(item.collection_name, oMap, true).then((r) => {
      return r['count'];
    });
  }// get_items_count
  public get_items(item: InfoData.IBaseItem, skip?: number, limit?: number):
    Q.IPromise<InfoData.IBaseItem[]> {
    var oMap = {};
    item.to_fetch_map(oMap);
    var self = this;
    return this._perform_get(item.collection_name, oMap, false, skip, limit).then((dd) => {
      var vRet: InfoData.IBaseItem[] = [];
      var n = dd.length;
      for (var i = 0; i < n; ++i) {
        var x = self._create_item(dd[i]);
        if (x != null) {
          vRet.push(x);
        }
      }// i
      return vRet;
    });
  }//get_items
  public get_one_item(item: InfoData.IBaseItem):
    Q.IPromise<InfoData.IBaseItem> {
    return this.get_items(item, 0, 1).then((dd) => {
      var vRet = ((dd != undefined) && (dd != null) && (dd.length > 0)) ?
        dd[0] : null;
      return vRet;
    });
  }// get_one_item
  public get_by_id(item: InfoData.IBaseItem): Q.IPromise<InfoData.IBaseItem> {
    var oMap = { _id: item.id };
    var self = this;
    return this._perform_get(item.collection_name, oMap, false, 0, 1).then((dd) => {
      var vRet: InfoData.IBaseItem = null;
      if (dd.length > 0) {
        vRet = self._create_item(dd[0]);
      }
      return vRet;
    });
  }// get_by_id

  public insert_one_item(item: InfoData.IBaseItem): Q.IPromise<any> {
    return this._perform_post(item);
  }
  public update_one_item(item: InfoData.IBaseItem): Q.IPromise<any> {
    return this._perform_put(item);
  }
  public maintains_one_item(item: InfoData.IBaseItem): Q.IPromise<any> {
    if (item.has_id) {
      return this._perform_put(item);
    } else {
      return this._perform_post(item);
    }
  }
  public remove_one_item(item: InfoData.IBaseItem): Q.IPromise<any> {
    return this._perform_delete(item);
  }
}// class ItemDataManager
export = ItemDataManager;
