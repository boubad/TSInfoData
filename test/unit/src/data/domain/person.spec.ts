//person.spec.ts
//
/// <reference path="../../../../../src/typings/chai/chai.d.ts" />
/// <reference path="../../../../../src/typings/mocha/mocha.d.ts" />
//
import chai = require('chai');
//
import Person = require('../../../../../src/data/domain/person');
//
var expect = chai.expect;
//
describe('Person Tests', function() {
  // empty constructor
  describe(" empty constructor", function() {
    var data;
    beforeEach(function() {
      data = new Person();
    });
    it(" id property ", function() {
      expect(data.id).to.not.exist;
      expect(data.has_id).to.be.false;
    });
    it(" rev property ", function() {
      expect(data.rev).to.not.exist;
      expect(data.has_rev).to.be.false;
    });
    it(" remarks property ", function() {
      expect(data.remarks).to.not.exist;
      expect(data.has_remarks).to.be.false;
    });
    it(" avatarid property ", function() {
      expect(data.avatarid).to.not.exist;
      expect(data.has_avatarid).to.be.false;
    });
    it(" username property ", function() {
      expect(data.username).to.not.exist;
      expect(data.has_username).to.be.false;
    });
    it(" password property ", function() {
      expect(data.password).to.not.exist;
      expect(data.has_password).to.be.false;
    });
    it(" firstname property ", function() {
      expect(data.firstname).to.not.exist;
      expect(data.has_firstname).to.be.false;
    });
    it(" lastname property ", function() {
      expect(data.lastname).to.not.exist;
      expect(data.has_lastname).to.be.false;
    });
    it(" fullname property ", function() {
      expect(data.fullname).to.not.exist;
      expect(data.has_fullname).to.be.false;
    });
    it(" email property ", function() {
      expect(data.email).to.not.exist;
      expect(data.has_email).to.be.false;
    });
    it(" phone property ", function() {
      expect(data.phone).to.not.exist;
      expect(data.has_phone).to.be.false;
    });
    it(" roles property ", function() {
      expect(data.roles).to.exist;
      expect(data.has_roles).to.be.false;
    });
    it(" infoids property ", function() {
      expect(data.infoids).to.exist;
      expect(data.has_infoids).to.be.false;
    });
    it(" groupeids property ", function() {
      expect(data.groupeids).to.exist;
      expect(data.has_groupeids).to.be.false;
    });
    it(" departementids property ", function() {
      expect(data.departementids).to.exist;
      expect(data.has_departementids).to.be.false;
    });
    it(" anneeids property ", function() {
      expect(data.anneeids).to.exist;
      expect(data.has_anneeids).to.be.false;
    });
    it(" semestreids property ", function() {
      expect(data.semestreids).to.exist;
      expect(data.has_semestreids).to.be.false;
    });
    it(" uniteids property ", function() {
      expect(data.uniteids).to.exist;
      expect(data.has_uniteids).to.be.false;
    });
    it(" matiereids property ", function() {
      expect(data.matiereids).to.exist;
      expect(data.has_matiereids).to.be.false;
    });
    it(" type property ", function() {
      expect(data.type).to.equal('person');
    });
    it(" collection_name property ", function() {
      expect(data.collection_name).to.equal('persons');
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
      expect(oMap).not.to.have.property('username');
      expect(oMap).not.to.have.property('password');
      expect(oMap).not.to.have.property('firstname');
      expect(oMap).not.to.have.property('lastname');
      expect(oMap).not.to.have.property('email');
      expect(oMap).not.to.have.property('phone');
      expect(oMap).to.have.property('roles');
      expect(oMap).to.have.property('infoids');
      expect(oMap).to.have.property('departementids');
      expect(oMap).to.have.property('anneeids');
      expect(oMap).to.have.property('semestreids');
      expect(oMap).to.have.property('uniteids');
      expect(oMap).to.have.property('matiereids');
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
      expect(oMap).not.to.have.property('username');
      expect(oMap).not.to.have.property('password');
      expect(oMap).not.to.have.property('firstname');
      expect(oMap).not.to.have.property('lastname');
      expect(oMap).not.to.have.property('email');
      expect(oMap).not.to.have.property('phone');
      expect(oMap).to.have.property('roles', null);
      expect(oMap).to.have.property('infoids', null);
      expect(oMap).to.have.property('departementids', null);
      expect(oMap).to.have.property('anneeids', null);
      expect(oMap).to.have.property('semestreids', null);
      expect(oMap).to.have.property('uniteids', null);
      expect(oMap).to.have.property('matiereids', null);
    });
  });
  // normal constructor
  describe(" normal constructor", function() {
    var data;
    beforeEach(function() {
      data = new Person({
        _id: 12, _rev: 3,
        remarks: 'rem', avatarid: 5,
        username: 'TESTUSERNAME',
        password: 'testPassword',
        firstname: 'TESTFIRSTNAME',
        lastname: 'testlastname',
        email: 'testemail',
        phone: 'testphone',
        roles: ['admin', 'oper'],
        infoids: [1000, 2000],
        departementids: [1000, 2000],
        anneeids: [1000, 2000],
        semestreids: [1000, 2000],
        groupeids: [1000, 2000],
        uniteids: [1000, 2000],
        matiereids: [1000, 2000]
      });
    });
    it(" id property ", function() {
      expect(data.id).to.equal(12);
      expect(data.has_id).to.be.true;
    });
    it(" rev property ", function() {
      expect(data.rev).to.equal(3);
      expect(data.has_rev).to.be.true;
    });
    it(" remarks property ", function() {
      expect(data.remarks).to.equal('rem');
      expect(data.has_remarks).to.be.true;
    });
    it(" avatarid property ", function() {
      expect(data.avatarid).to.equal(5);
      expect(data.has_avatarid).to.be.true;
    });
    it(" username property ", function() {
      expect(data.username).to.equal('testusername');
      expect(data.has_username).to.be.true;
    });
    it(" password property ", function() {
      expect(data.password).to.equal('testPassword');
      expect(data.has_password).to.be.true;
    });
    it(" firstname property ", function() {
      expect(data.firstname).to.equal('Testfirstname');
      expect(data.has_firstname).to.be.true;
    });
    it(" lastname property ", function() {
      expect(data.lastname).to.equal('TESTLASTNAME');
      expect(data.has_lastname).to.be.true;
    });
    it(" fullname property ", function() {
      expect(data.fullname).to.equal('TESTLASTNAME Testfirstname');
      expect(data.has_fullname).to.be.true;
    });
    it(" email property ", function() {
      expect(data.email).to.equal('testemail');
      expect(data.has_email).to.be.true;
    });
    it(" phone property ", function() {
      expect(data.phone).to.equal('testphone');
      expect(data.has_phone).to.be.true;
    });
    it(" roles property ", function() {
      expect(data.roles).to.exist;
      expect(data.has_roles).to.be.true;
    });
    it(" infoids property ", function() {
      expect(data.infoids).to.exist;
      expect(data.has_infoids).to.be.true;
    });
    it(" groupeids property ", function() {
      expect(data.groupeids).to.exist;
      expect(data.has_groupeids).to.be.true;
    });
    it(" departementids property ", function() {
      expect(data.departementids).to.exist;
      expect(data.has_departementids).to.be.true;
    });
    it(" anneeids property ", function() {
      expect(data.anneeids).to.exist;
      expect(data.has_anneeids).to.be.true;
    });
    it(" semestreids property ", function() {
      expect(data.semestreids).to.exist;
      expect(data.has_semestreids).to.be.true;
    });
    it(" uniteids property ", function() {
      expect(data.uniteids).to.exist;
      expect(data.has_uniteids).to.be.true;
    });
    it(" matiereids property ", function() {
      expect(data.matiereids).to.exist;
      expect(data.has_matiereids).to.be.true;
    });
    it(" type property ", function() {
      expect(data.type).to.equal('person');
    });
    it(" collection_name property ", function() {
      expect(data.collection_name).to.equal('persons');
    });
    it(" is_storeable property ", function() {
      expect(data.is_storeable).to.exist;
      expect(data.is_storeable).to.be.true;
    });
    it(" to_insert_map method ", function() {
      var oMap = {};
      expect(data.to_insert_map).to.exist;
      data.to_insert_map(oMap);
      expect(oMap).not.to.have.property('_id');
      expect(oMap).not.to.have.property('_rev');
      expect(oMap).to.have.property('remarks', 'rem');
      expect(oMap).to.have.property('avatarid', 5);
      expect(oMap).to.have.property('username', 'testusername');
      expect(oMap).to.have.property('password', 'testPassword');
      expect(oMap).to.have.property('firstname', 'Testfirstname');
      expect(oMap).to.have.property('lastname', 'TESTLASTNAME');
      expect(oMap).to.have.property('email', 'testemail');
      expect(oMap).to.have.property('phone', 'testphone');
      expect(oMap).to.have.property('roles');
      expect(oMap).to.have.property('infoids');
      expect(oMap).to.have.property('departementids');
      expect(oMap).to.have.property('anneeids');
      expect(oMap).to.have.property('semestreids');
      expect(oMap).to.have.property('uniteids');
      expect(oMap).to.have.property('matiereids');
    });
    it(" to_fetch_map method ", function() {
      var oMap = {};
      expect(data.to_fetch_map).to.exist;
      data.to_fetch_map(oMap);
      expect(oMap).to.have.property('_id', 12);
      expect(oMap).to.have.property('_rev', 3);
      expect(oMap).to.have.property('remarks', 'rem');
      expect(oMap).to.have.property('avatarid', 5);
      expect(oMap).to.have.property('username', 'testusername');
      expect(oMap).to.have.property('password', 'testPassword');
      expect(oMap).to.have.property('firstname', 'Testfirstname');
      expect(oMap).to.have.property('lastname', 'TESTLASTNAME');
      expect(oMap).to.have.property('email', 'testemail');
      expect(oMap).to.have.property('phone', 'testphone');
      expect(oMap).to.have.property('roles', null);
      expect(oMap).to.have.property('infoids', null);
      expect(oMap).to.have.property('departementids', null);
      expect(oMap).to.have.property('anneeids', null);
      expect(oMap).to.have.property('semestreids', null);
      expect(oMap).to.have.property('uniteids', null);
      expect(oMap).to.have.property('matiereids', null);
    });
  });
  //
  describe(' password methods',function(){
    var data, src, dest;
    beforeEach(function(){
      src = 'bouba256';
      dest = 'eb2b7a4cdb39d84c45261dac74bc8116';
      data = new Person({
        username: src
      });
    });
    it(" reset_password", function(){
      expect(data.has_username).to.be.true;
      expect(data.has_password).to.be.false;
      data.reset_password();
      expect(data.has_password).to.be.true;
      expect(data.password).to.equal(dest);
    });
    it(" check_password ", function(){
      expect(data.has_username).to.be.true;
      expect(data.has_password).to.be.false;
      data.reset_password();
      expect(data.has_password).to.be.true;
      expect(data.password).to.equal(dest);
      expect(data.check_password(src)).to.be.true;
      expect(data.check_password('obiwan')).to.be.false;
    });
  });
  //
});
//
