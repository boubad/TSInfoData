//crypto.spec.ts
//
/// <reference path="../../../../../src/typings/chai/chai.d.ts" />
/// <reference path="../../../../../src/typings/mocha/mocha.d.ts" />
//
import chai = require('chai');
//
import MyCrypto = require('../../../../../src/data/domain/crypto');
//
var expect = chai.expect;
//
describe("My Crypto tests ", function() {
  var man;
  beforeEach(function() {
    man = new MyCrypto();
  });
  it(" md5 method ", function() {
    var src = 'bouba256';
    var dest = 'eb2b7a4cdb39d84c45261dac74bc8116';
    var x = man.md5(src);
    expect(x).to.equal(dest);
  });
});
