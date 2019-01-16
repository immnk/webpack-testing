const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const lodashModule = require("../src/js/loadashModule");

describe('lodashModule', function() {
  describe('Module#getMessage', function() {
    it('should return a string', function() {
      expect(lodashModule.message).to.be.a('string');
      expect(lodashModule.message).to.not.empty;
    });
  });
  describe('Module#femaleCount', function() {
    it('should return femaleCount to be 10', function() {
      assert.equal(lodashModule.femaleCount, 10);
    });

    it('should expect an object as module value', function() {
      expect(lodashModule).to.be.a('object');
    });
  });
});
