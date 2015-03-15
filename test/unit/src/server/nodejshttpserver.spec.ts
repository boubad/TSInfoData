// nodejshttpserver.spec.ts
/// <reference path="../../../../src/typings/chai/chai.d.ts" />
/// <reference path="../../../../src/typings/mocha/mocha.d.ts" />
//
import chai = require('chai');
//
import NodeJsHttpManager = require('../../../../src/server/nodejshttpmanager');
//
var expect = chai.expect;
//
var host = 'localhost';
var port = 52999;
//
describe(" NodeJsHttpManager Tests",()=>{
    var man;
    beforeEach(function(done){
      man = new NodeJsHttpManager(host,port);
      done();
    });
    //
    it(" perform_get count",(done)=>{
      var url = "/api/persons?$count=5";
      man.perform_get(url).then((r)=>{
        done();
        expect(r).not.to.be.null;
        expect(r.count).to.exist;
        expect(r.count).to.be.greaterThan(0);
      }).catch((err)=>{
        done();
        expect(false).to.be.true;
      });
    });
    //
    it(" perform_get ",(done)=>{
      var url = "/api/persons";
      man.perform_get(url).then((r)=>{
        done();
        expect(r).not.to.be.null;
        expect(r.length).to.exist;
        expect(r.length).to.be.greaterThan(0);
        //console.log(r);
      }).catch((err)=>{
        done();
        expect(false).to.be.true;
      });
    });
    //
    /*
    it(" perform_post ",(done)=>{
      var url = "/api/totos";
      var data = {
        _rev:6,
        modified:true,
        date: new Date(2015,0,32),
        nom: 'testName'
      };
      man.perform_post(url,data).then((r)=>{
        done();
        expect(r).not.to.be.null;
        //console.log(r);
      }).catch((err)=>{
        done();
        console.log(err);
        expect(false).to.be.true;
      });
    });
    */
    //
});
