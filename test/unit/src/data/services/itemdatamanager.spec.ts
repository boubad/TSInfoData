//itemdatamanager.spec.ts
/// <reference path="../../../../../src/typings/chai/chai.d.ts" />
/// <reference path="../../../../../src/typings/mocha/mocha.d.ts" />
//
import chai = require('chai');
//
import NodeJsHttpManager = require('../../../../../src/server/nodejshttpmanager');
import ItemDataManager = require('../../../../../src/data/services/itemdatamanager');
import Person = require('../../../../../src/data/domain/person');

//
var expect = chai.expect;
var host = 'localhost';
var port = 52999;
//
describe(" ItemDataManager Tests ", ()=>{
    var man;
    var pServer;
    beforeEach((done)=>{
      pServer = new NodeJsHttpManager(host,port);
      man = new ItemDataManager(pServer);
      done();
    });
    //
    it(" get_items_count",(done)=>{
      var item = new Person();
      man.get_items_count(item).then((n)=>{
        done();
        //console.log("Persons count: " + n);
        expect(n).to.be.greaterThan(0);
      }).catch((err)=>{
        done();
        console.log(err);
        expect(false).to.be.true;
      });
    });
    //
    it(" get_items",(done)=>{
      var item = new Person();
      man.get_items(item).then((rr)=>{
        done();
        expect(rr).to.exist;
        expect(rr.length).to.be.greaterThan(0);
      }).catch((err)=>{
        done();
        console.log(err);
        expect(false).to.be.true;
      });
    });
    //
    it(" get_one_item",(done)=>{
      var item = new Person();
      item.username = 'admin';
      man.get_one_item(item).then((rr)=>{
        done();
        expect(rr).to.exist;
        expect(rr).not.to.be.null;
      //  console.log(rr.toString());
      }).catch((err)=>{
        done();
        console.log(err);
        expect(false).to.be.true;
      });
    });
    //
    it(" get_one_item (fail) ",(done)=>{
      var item = new Person();
      item.username = 'machin';
      man.get_one_item(item).then((rr)=>{
        done();
        expect(rr).to.be.null;
      }).catch((err)=>{
        done();
        console.log(err);
        expect(false).to.be.true;
      });
    });
    //
    it(" get_by_id",(done)=>{
      var item = new Person();
      item.username = 'admin';
      man.get_one_item(item).then((rr)=>{
        expect(rr).to.exist;
        expect(rr).not.to.be.null;
        expect(rr.has_id).to.be.true;
        var id = rr.id;
        var item2 = new Person();
        item2.id = id;
        man.get_by_id(item2).then((z)=>{
          done();
          expect(z).to.exist;
          expect(z).not.to.be.null;
          expect(z.has_id).to.be.true;
          expect(z.id).to.equal(id);
        }).catch((e)=>{
          done();
          console.log(e);
          expect(false).to.be.true;
        });
      //  console.log(rr.toString());
      }).catch((err)=>{
        done();
        console.log(err);
        expect(false).to.be.true;
      });
    });
    //
    
    //
});
