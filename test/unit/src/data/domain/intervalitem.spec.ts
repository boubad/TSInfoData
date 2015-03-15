//intervalitem.spec.ts
//
/// <reference path="../../../../../src/typings/chai/chai.d.ts" />
/// <reference path="../../../../../src/typings/mocha/mocha.d.ts" />
//
import chai = require('chai');
//
import IntervalItem = require('../../../../../src/data/domain/intervalitem');
//
var expect = chai.expect;
//
describe('IntervalItem Tests', function() {
  // empty constructor
  describe(" empty constructor", function() {
    var data;
    beforeEach(function() {
      data = new IntervalItem();
    });
    it(" id property ", function() {
      expect(data.id).to.not.exist;
      expect(data.has_id).to.exist;
      expect(data.has_id).to.be.false;
    });
    it(" rev property ", function() {
      expect(data.rev).to.not.exist;
      expect(data.has_rev).to.exist;
      expect(data.has_rev).to.be.false;
    });
    it(" remarks property ", function() {
      expect(data.remarks).to.not.exist;
      expect(data.has_remarks).to.exist;
      expect(data.has_remarks).to.be.false;
    });
    it(" avatarid property ", function() {
      expect(data.avatarid).to.not.exist;
      expect(data.has_avatarid).to.exist;
      expect(data.has_avatarid).to.be.false;
    });
    it(" departementid property ", function() {
      expect(data.departementid).to.not.exist;
      expect(data.has_departementid).to.exist;
      expect(data.has_departementid).to.be.false;
    });
    it(" sigle property ", function() {
      expect(data.sigle).to.not.exist;
      expect(data.has_sigle).to.exist;
      expect(data.has_sigle).to.be.false;
    });
    it(" name property ", function() {
      expect(data.name).to.not.exist;
      expect(data.has_name).to.exist;
      expect(data.has_name).to.be.false;
    });
    it(" startDate property ", function() {
      expect(data.startDate).to.not.exist;
      expect(data.has_startDate).to.exist;
      expect(data.has_startDate).to.be.false;
    });
    it(" endDate property ", function() {
      expect(data.endDate).to.not.exist;
      expect(data.has_endDate).to.exist;
      expect(data.has_endDate).to.be.false;
    });
    it(" type property ", function() {
      expect(data.type).to.not.exist;
    });
    it(" collection_name property ", function() {
      expect(data.collection_name).to.not.exist;
    });
    it(" is_storeable property ", function() {
      expect(data.is_storeable).to.exist;
      expect(data.is_storeable).to.be.false;
    });
    it(" to_insert_map method ", function() {
      var oMap = {};
      expect(data.to_insert_map).to.exist;
      data.to_insert_map(oMap);
      expect(oMap).not.to.have.property('_id');
      expect(oMap).not.to.have.property('_rev');
      expect(oMap).not.to.have.property('remarks');
      expect(oMap).not.to.have.property('avatarid');
      expect(oMap).not.to.have.property('departementid');
      expect(oMap).not.to.have.property('sigle');
      expect(oMap).not.to.have.property('name');
      expect(oMap).not.to.have.property('startDate');
      expect(oMap).not.to.have.property('endDate');
    });
    it(" to_fetch_map method ", function() {
      var oMap = {};
      expect(data.to_fetch_map).to.exist;
      data.to_fetch_map(oMap);
      expect(oMap).not.to.have.property('_id');
      expect(oMap).not.to.have.property('_rev');
      expect(oMap).not.to.have.property('remarks');
      expect(oMap).not.to.have.property('avatarid');
      expect(oMap).not.to.have.property('departementid');
      expect(oMap).not.to.have.property('sigle');
      expect(oMap).not.to.have.property('name');
      expect(oMap).not.to.have.property('startDate');
      expect(oMap).not.to.have.property('endDate');
    });
  });
  // normal constructor
  describe(" normal constructor", function() {
    var data;
    beforeEach(function() {
      data = new IntervalItem({
        _id: 12, _rev: 3,
        remarks: 'rem', avatarid: 5, departementid: 10,
        sigle: 'testsigle', name: 'testname',
        startDate: new Date(1990, 10, 6),
        endDate: new Date(1990, 11, 1)
      });
    });
    it(" id property ", function() {
      expect(data.id).to.equal(12);
      expect(data.has_id).to.exist;
      expect(data.has_id).to.be.true;
    });
    it(" rev property ", function() {
      expect(data.rev).to.equal(3);
      expect(data.has_rev).to.exist;
      expect(data.has_rev).to.be.true;
    });
    it(" remarks property ", function() {
      expect(data.remarks).to.equal('rem');
      expect(data.has_remarks).to.exist;
      expect(data.has_remarks).to.be.true;
    });
    it(" avatarid property ", function() {
      expect(data.avatarid).to.equal(5);
      expect(data.has_avatarid).to.exist;
      expect(data.has_avatarid).to.be.true;
    });
    it(" departementid property ", function() {
      expect(data.departementid).to.equal(10);
      expect(data.has_departementid).to.exist;
      expect(data.has_departementid).to.be.true;
    });
    it(" sigle property ", function() {
      expect(data.sigle).to.equal('testsigle');
      expect(data.has_sigle).to.exist;
      expect(data.has_sigle).to.be.true;
    });
    it(" name property ", function() {
      expect(data.name).to.equal('testname');
      expect(data.has_name).to.exist;
      expect(data.has_name).to.be.true;
    });
    it(" startDate property ", function() {
      expect(data.startDate).to.exist;
      expect(data.has_startDate).to.exist;
      expect(data.has_startDate).to.be.true;
    });
    it(" endDate property ", function() {
      expect(data.endDate).to.exist;
      expect(data.has_endDate).to.exist;
      expect(data.has_endDate).to.be.true;
    });
    it(" type property ", function() {
      expect(data.type).to.not.exist;
    });
    it(" collection_name property ", function() {
      expect(data.collection_name).to.not.exist;
    });
    it(" is_storeable property ", function() {
      expect(data.is_storeable).to.exist;
      expect(data.is_storeable).to.be.false;
    });
    it(" to_insert_map method ", function() {
      var oMap = {};
      expect(data.to_insert_map).to.exist;
      data.to_insert_map(oMap);
      expect(oMap).not.to.have.property('_id');
      expect(oMap).not.to.have.property('_rev');
      expect(oMap).to.have.property('remarks', 'rem');
      expect(oMap).to.have.property('avatarid', 5);
      expect(oMap).to.have.property('departementid', 10);
      expect(oMap).to.have.property('sigle', 'testsigle');
      expect(oMap).to.have.property('name', 'testname');
      expect(oMap).to.have.property('startDate');
      expect(oMap).to.have.property('endDate');
    });
    it(" to_fetch_map method ", function() {
      var oMap = {};
      expect(data.to_fetch_map).to.exist;
      data.to_fetch_map(oMap);
      expect(oMap).to.have.property('_id', 12);
      expect(oMap).to.have.property('_rev', 3);
      expect(oMap).to.have.property('remarks', 'rem');
      expect(oMap).to.have.property('avatarid', 5);
      expect(oMap).to.have.property('departementid', 10);
      expect(oMap).to.have.property('sigle', 'testsigle');
      expect(oMap).to.have.property('name', 'testname');
      expect(oMap).to.have.property('startDate');
      expect(oMap).to.have.property('endDate');
    });
  });
});
