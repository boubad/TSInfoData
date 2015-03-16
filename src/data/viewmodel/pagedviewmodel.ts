//pagedviewmodel.ts
//
import InfoData = require('../../typings/infodata/infodata.d');
//
import ViewModelBase = require('./viewmodelbase');
import UIHelper = require('./uihelper');
//
class PagedViewModel extends ViewModelBase {

  private _current_item: InfoData.IBaseItem;
  private _old_item: InfoData.IBaseItem;
  private _items: InfoData.IBaseItem[];
  private _add_mode: boolean;
  private _items_count: number;
  private _pages_count: number;
  private _items_page: number;
  private _current_page: number;
  //
  constructor(dataMan: InfoData.IDataManager,
    xmodel: InfoData.IBaseItem) {
    super(dataMan,xmodel);
    this._current_item = null;
    this._old_item = null;
    this._items = [];
    this._add_mode = false;
    this._items_count = 0;
    this._pages_count = 0;
    this._items_page = 16;
    this._current_page = 0;
  }// constructor

  public get pagesCount(): number {
    return (this._pages_count != undefined) ? this._pages_count : 0;
  }
  public get hasPages(): boolean {
    return (this.pagesCount > 1);
  }
  public get items(): InfoData.IBaseItem[] {
    return ((this._items != undefined) && (this._items != null)) ?
      this._items : [];
  }
  public set items(pp: InfoData.IBaseItem[]) {
    this._items = ((pp != undefined) && (pp != null)) ? pp : [];
  }
  public get_current_value():InfoData.IBaseItem {
    return (this._current_item != undefined) ? this._current_item : null;
  }
  public set_current_value(s:InfoData.IBaseItem){
    this._current_item = (s != undefined) ? s : null;
  }
  public get current(): InfoData.IBaseItem {
    return this.get_current_value();
  }
  public set current(s: InfoData.IBaseItem) {
    this.set_current_value(s);
  }
  public get has_current(): boolean {
    return (this.current != null);
  }// has_current
  public get currentPage(): number {
    return (this._current_page !== undefined) ?
      this._current_page : 0;
  }
  public set currentPage(n: number) {
    if ((n !== undefined) && (n !== null) && (n >= 0) &&
      (n != this._current_page)) {
      if (n < this.pagesCount) {
        this._current_page = n;
        this.refresh();
      }
    }
  } // currentPage
  public get itemsPerPage(): number {
    return ((this._items_page !== undefined) &&
      (this._items_page !== null) &&
      (this._items_page > 0)) ? this._items_page : 16;
  }
  public set itemsPerPage(n) {
    if ((n !== undefined) && (n !== null) && (n > 0) &&
      (n != this.itemsPerPage)) {
      this._items_page = n;
      this.refreshAll();
    }
  }
  public get canPrevPage(): boolean {
    return (this.currentPage > 0);
  } // canPrevPage
  public get canNextPage(): boolean {
    var n = this.currentPage;
    var nm = this.pagesCount - 1;
    return (n < nm);
  } // canNextPage
  public firstPage(): void {
    this.currentPage = 0;
  } // firstPage
  public prevPage(): void {
    var n = this.currentPage;
    this.currentPage = n - 1;
  } // firstPage
  public nextPage(): void {
    var n = this.currentPage;
    var nm = this.pagesCount - 1;
    if (n < nm) {
      this.currentPage = n + 1;
    }
  } // nextPage
  public lastPage() {
    var n = this.currentPage;
    var nm = this.pagesCount - 1;
    if (n < nm) {
      this.currentPage = nm;
    }
  } // lastPage
  public refresh(): any {
    if ((!this.hasDataService) ||
      (this.modelItem == undefined) || (this.modelItem == null)) {
      this._items = [];
      this._current_item = null;
      return true;
    }
    var count = this._items_page;
    if (count < 1) {
      count = 16;
      this._items_page = count;
    }
    var start = this._current_page * count;
    if (start < 0) {
      this._current_page = 0;
      start = 0;
    }
    var self = this;
    var old = this.current;
    this.error = null;
    return this.dataService.get_items(this.modelItem, start, count).then((pp) => {
      self._add_mode = false;
      self.items = pp;
      var s = null;
      var nt = self.pagesCount;
      if (nt > 1) {
        var nx = self._current_page + 1;
        s = 'page ' + nx + ' sur ' + nt;
      }
      self.status = s;
      var pSel = null;
      if (self.items.length > 0) {
        if ((old === undefined) || (old === null)) {
          pSel = self.items[0];
        } else {
          if ((old.id !== undefined) && (old.id !== null)) {
            var id = old.id;
            for (var i = 0; i < self.items.length; ++i) {
              var x = self.items[i];
              if ((x !== undefined) && (x !== null) && (x.id !== undefined) &&
                (x.id == id)) {
                pSel = x;
                break;
              }
            } // i
            if (pSel === null) {
              pSel = self.items[0];
            }
          } else {
            pSel = self.items[0];
          }
        }
      }
      self.current = pSel;
      if (self.items.length < 1) {
        self.addNew();
      }
    },
      (err) => {
        self.internal_set_error(err);
      });
  }// refresh
  public get canAdd(): boolean {
    return (this._add_mode === false);
  }
  public cancel(): void {
    this.current = this._old_item;
    this._add_mode = false;
  }
  public get canCancel(): boolean {
    return this._add_mode;
  } // canCancel
  public get canSave(): boolean {
    return this.hasDataService && (this.current !== null) && (this.current.is_storeable !== undefined) &&
      this.current.is_storeable;
  }
  public get canRemove(): boolean {
    return (this.hasDataService && (this.current !== null) && (this.current.has_id));
  } // canRemove
  public remove(): void {
    var item = this.current;
    if (this.hasDataService && (item !== undefined) && (item !== null) && item.has_id) {
      var message = 'Voulez-vous vraiment supprimer ' + item.toString() + ' ?';
      var helper = new UIHelper();
      if (!helper.confirm(message)) {
        return;
      }
      var self = this;
      this.error = null;
      this.dataService.remove_one_item(item).then((res) => {
        self.refreshAll();
      }, (err) => {
          self.internal_set_error(err);
        });
    } // item
  } // remove
  public save(): void {
    var data = this.current;
    if ((!this.hasDataService) || (data === undefined) || (data === null)) {
      return;
    }
    if (!data.is_storeable) {
      return;
    }
    var self = this;
    this.error = null;
    var bOld = data.has_id;
    this.dataService.maintains_one_item(data).then((p) => {
      self._add_mode = false;
      if (bOld) {
        self.refresh();
      } else {
        self.refreshAll();
      }
    }, (err) => {
        self.internal_set_error(err);
      });
  } // save
  public addNew(): any {
    if ((this.dataService != null) &&
      (this.modelItem != undefined) && (this.modelItem != null)) {
      var oMap = {};
      this.modelItem.to_insert_map(oMap);
      var x = this.dataService.create_item(oMap);
      this._add_mode = true;
      this.current = x;
    }
  }// addNew
  public get itemsCount(): number {
    return ((this._items_count != undefined) && (this._items_count != null) &&
      (this._items_count > 0)) ? this._items_count : 0;
  }// utemsCount
  public set itemsCount(n: number) {
    var total = ((n != undefined) && (n != null) && (n >= 0)) ? n : 0;
    var nc = this._items_page;
    if (nc < 1) {
      this._items_page = 16;
      nc = 16;
    }
    var np = Math.floor(total / nc);
    if (total > 0) {
      if ((total % nc) !== 0) {
        ++np;
      }
    }
    this._current_page = 0;
    this._pages_count = np;
    if (np > 0) {
      this.refresh();
    } else {
      this._items = [];
      this.addNew();
    }
  }// itemsCount
  public get hasItems(): boolean {
    return (this.itemsCount > 0);
  }
  public refreshAll(): any {
    if ((this.dataService == null) ||
      (this.modelItem == undefined) || (this.modelItem == null)) {
      this.itemsCount = 0;
      return true;
    }
    var self = this;
    return this.dataService.get_items_count(this.modelItem).then((n) => {
      self.itemsCount = n;
    }, (err) => {
        self.internal_set_error(err);
      });
  }// refreshAll
}// class PagedViewModel
export = PagedViewModel;
