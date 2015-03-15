// infodata.d.ts
/// <reference path="../q/Q.d.ts" />
//
declare module InfoData {
  //
  interface IBaseItem {
    id: any;
    rev: any;
    type: string;
    collection_name: string;
    //
    has_id: boolean;
    has_rev: boolean;
    is_storeable: boolean;
    //
    to_insert_map: (oMap: any) => void;
    to_fetch_map: (oMap: any) => void;
  }// interface IBaseItem
  interface IDescriptionItem extends IBaseItem {
    remarks: string;
    avatarid: any;
    //
    has_remarks: boolean;
    has_avatarid: boolean;
  }// interface IDescriptionItem
  interface IAttachedDoc extends IBaseItem {
    mimetype: string;
    genre: string;
    name: string;
    data: number[];
    remarks: string;
    //
    has_mimetype: boolean;
    has_genre: boolean;
    has_name: boolean;
    has_data: boolean;
    has_remarks: boolean;
  }// interface IAttachedDoc
  interface IPerson extends IDescriptionItem {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email?: string;
    phone?: string;
    roles?: string[];
    departementids?: any[];
    anneeids?: any[];
    semestreids?: any[];
    matiereids?: any[];
    uniteids?: any[];
    groupeids?: any[];
    infoids?: any[];
    //
    fullname: string;
    //
    reset_password: () => void;
    check_password: (ct: string) => boolean;
    change_password: (ct: string) => void;
    //
    hasrole?: (r: string) => boolean;
    is_super?: boolean;
    is_admin?: boolean;
    is_oper?: boolean;
    is_prof?: boolean;
    is_etud?: boolean;
    is_reader?: boolean;
  }// interface IPerson
  interface IEtudiantPerson extends IPerson {
    dossier?: string;
    sexe?: string;
    birthDate?: Date;
    ville?: string;
    etablissement?: string;
    serieBac?: string;
    optionBac?: string;
    mentionBac?: string;
    etudesSuperieures?: string;
  }// interface IEtudiantPerson
  interface IDepartement extends IDescriptionItem {
  }// interface IDepartement
  interface IDepartementChild extends IDescriptionItem {
    departementid: any;
    has_departementid: boolean;
  }// interface IDepartementChild
  interface ISigleNameItem extends IDepartementChild {
    sigle: string;
    name: string;
    //
    has_sigle: boolean;
    has_name: boolean;
  }// interface ISigleNameItem
  interface IIntervalItem extends ISigleNameItem {
    startDate?: Date;
    endDate?: Date;
  }// interface ISigleNameItem
  interface IAnnee extends IIntervalItem {
  }
  interface IGroupe extends ISigleNameItem {

  }// interface IGroupe
  interface IUnite extends ISigleNameItem {

  }// interface IUnite
  interface ISemestre extends IIntervalItem {
    anneeid: any;
    has_anneeid: boolean;
  }// interface ISemestre
  interface IMatiere extends ISigleNameItem {
    uniteid: any;
    coefficient?: number;
    ecs?: number;
    genre?: string;
    mat_module?: string;
    //
    has_uniteid: boolean;
  }// interface IMatiere
  //
  interface IDepartementPerson extends IDescriptionItem {
    personid: any;
    departementid: any;
    has_departementid: boolean;
    has_personid: boolean;
  }// interface IDepartementPerson
  //
  interface IEtudiant extends IDepartementPerson {
  }// interface IEtudiant
  interface IEnseignant extends IDepartementPerson {
  }// interface IEnseignant
  interface IOperator extends IDepartementPerson {
  }// interface IOperator
  //
  interface IAffectation extends IDescriptionItem {
    semestreid: any;
    groupeid: any;
    departementid?:any;
    anneeid?:any;
    personid?: any;
    startDate?: Date;
    endDate?: Date;
    //
    has_semestreid: boolean;
    has_groupeid: boolean;
    has_personid: boolean;
    has_startDate: boolean;
    has_endDate: boolean;
  } // interface IAffectation
  interface IEtudAffectation extends IAffectation {
    etudiantid: any;
    has_etudiantid: boolean;
  }// interface IEtudAffectation
  interface IProfAffectation extends IAffectation {
    uniteid?: any;
    matiereid: any;
    enseignantid: any;
    //
    has_uniteid: boolean;
    has_matiereid: boolean;
    has_enseignantid: boolean;
  }// interface IProfAffectation
  //
  interface IGroupeEvent extends IDescriptionItem {
    semestreid?: any;
    matiereid?: any;
    profaffectationid: any;
    enseignantid?: any;
    date: Date;
    genre: string;
    name: string;
    location?: string;
    startTime?: Date;
    endTime?: Date;
    coefficient?: number;
    documentids?: any[];
  }// interface IGroupeEvent
  interface IEtudEvent extends IDescriptionItem {
    etudaffectationid: any;
    groupeeventid: any;
    genre: string;
    note?: number;
    semestreid?: any;
    matiereid?: any;
    etudiantid?: any;
    groupeid?: any;
    date: Date;
    documentids?: any[];
  }// interface IGroupeEvent
  //
  interface IHttpManager {
    perform_get: (url: string) => Q.IPromise<any>;
    perform_post: (url: string, data: any) => Q.IPromise<any>;
    perform_put: (url: string, data: any) => Q.IPromise<any>;
    perform_remove: (url: string) => Q.IPromise<any>;
  }// interface IHttpManager
  //
  interface IDataManager {
    get_items_count: (item: IBaseItem) => Q.IPromise<number>;
    get_items: (item: IBaseItem, skip?: number, limit?: number) => Q.IPromise<IBaseItem[]>;
    get_one_item: (item: IBaseItem) => Q.IPromise<IBaseItem>;
    get_by_id: (item: IBaseItem) => Q.IPromise<IBaseItem>;
    insert_one_item: (item: IBaseItem) => Q.IPromise<any>;
    update_one_item: (item: IBaseItem) => Q.IPromise<any>;
    maintains_one_item: (item: IBaseItem) => Q.IPromise<any>;
    remove_one_item: (item: IBaseItem) => Q.IPromise<any>;
  }// interface IDataManager
}// module InfoData
