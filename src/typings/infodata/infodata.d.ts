// infodata.d.ts
/// <reference path="../q/Q.d.ts" />
//
declare module InfoData {
  //
  export interface IBaseItem {
    id: any;
    rev: any;
    type: string;
    collection_name: string;
    //
    remarks?: string;
    avatarid?: any;
    sigle?: string;
    name?: string;
    startDate?: Date;
    endDate?: Date;
    uniteid?: any;
    coefficient?: number;
    ecs?: number;
    genre?: string;
    mat_module?: string;
    departementid?:any;
    anneeid?:any;
    semestreid?:any;
    matiereid?:any;
    groupeid?:any;
    //
    has_uniteid?: boolean;
    //
    has_sigle?: boolean;
    //
    has_id: boolean;
    has_rev: boolean;
    is_storeable: boolean;
    //
    to_insert_map: (oMap: any) => void;
    to_fetch_map: (oMap: any) => void;
  }// interface IBaseItem
  export interface IDescriptionItem extends IBaseItem {
    remarks?: string;
    avatarid?: any;
    //
    has_remarks?: boolean;
    has_avatarid?: boolean;
  }// interface IDescriptionItem
  export interface IAttachedDoc extends IBaseItem {
    mimetype?: string;
    genre?: string;
    name?: string;
    data?: number[];
    remarks?: string;
    //
    has_mimetype?: boolean;
    has_genre?: boolean;
    has_name?: boolean;
    has_data?: boolean;
    has_remarks?: boolean;
  }// interface IAttachedDoc
  export interface IPerson extends IDescriptionItem {
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
  export interface IEtudiantPerson extends IPerson {
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
  export interface IDepartement extends IDescriptionItem {
  }// interface IDepartement
  export interface IDepartementChild extends IDescriptionItem {
    departementid?: any;
    has_departementid?: boolean;
  }// interface IDepartementChild
  export interface ISigleNameItem extends IDepartementChild {
    sigle?: string;
    name?: string;
    //
    has_sigle?: boolean;
    has_name?: boolean;
  }// interface ISigleNameItem
  export interface IIntervalItem extends ISigleNameItem {
    startDate?: Date;
    endDate?: Date;
  }// interface ISigleNameItem
  export interface IAnnee extends IIntervalItem {
  }
  export interface IGroupe extends ISigleNameItem {

  }// interface IGroupe
  export interface IUnite extends ISigleNameItem {

  }// interface IUnite
  export interface ISemestre extends IIntervalItem {
    anneeid: any;
    has_anneeid: boolean;
  }// interface ISemestre
  export interface IMatiere extends ISigleNameItem {
    uniteid?: any;
    coefficient?: number;
    ecs?: number;
    genre?: string;
    mat_module?: string;
    //
    has_uniteid?: boolean;
  }// interface IMatiere
  //
  export interface IDepartementPerson extends IDescriptionItem {
    personid: any;
    departementid: any;
    has_departementid: boolean;
    has_personid: boolean;
  }// interface IDepartementPerson
  //
  export interface IEtudiant extends IDepartementPerson {
  }// interface IEtudiant
  export interface IEnseignant extends IDepartementPerson {
  }// interface IEnseignant
  export interface IOperator extends IDepartementPerson {
  }// interface IOperator
  //
  export interface IAffectation extends IDescriptionItem {
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
  export interface IEtudAffectation extends IAffectation {
    etudiantid: any;
    has_etudiantid: boolean;
  }// interface IEtudAffectation
  export interface IProfAffectation extends IAffectation {
    uniteid?: any;
    matiereid: any;
    enseignantid: any;
    //
    has_uniteid: boolean;
    has_matiereid: boolean;
    has_enseignantid: boolean;
  }// interface IProfAffectation
  //
  export interface IBaseEvent extends IDescriptionItem {
    departementid?:any;
    groupeid?:any;
    uniteid?:any;
    semestreid?: any;
    matiereid?: any;
    documentids?: any[];
    status?:string;
    anneeid?:any;
    personid?:any;
    date: Date;
    genre: string;
  }// interface IBaseEvent
  //
  export interface IGroupeEvent extends IBaseEvent {
    profaffectationid: any;
    enseignantid?: any;
    name: string;
    location?: string;
    startTime?: Date;
    endTime?: Date;
    coefficient?: number;
  }// interface IGroupeEvent
  export interface IEtudEvent extends IBaseEvent {
    etudaffectationid: any;
    groupeeventid: any;
    note?: number;
    etudiantid?: any;
  }// interface IGroupeEvent
  //
  export interface IHttpManager {
    perform_get: (url: string) => Q.IPromise<any>;
    perform_post: (url: string, data: any) => Q.IPromise<any>;
    perform_put: (url: string, data: any) => Q.IPromise<any>;
    perform_remove: (url: string) => Q.IPromise<any>;
  }// interface IHttpManager
  //
  export interface IDataManager {
    create_item : (oMap: any) => InfoData.IBaseItem
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
export = InfoData;
