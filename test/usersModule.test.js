const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const usersModule = require("../src/js/usersModule");

describe('usersModule', function() {
  describe('Module#getMessage', function() {
    it('should return a string', function() {
      expect(usersModule.message).to.be.a('string');
      expect(usersModule.message).to.not.empty;
    });
  });
  describe('Module#femaleCount', function() {
    it('should return femaleCount to be 10', function() {
      assert.equal(usersModule.femaleCount, 10);
    });

    it('should expect an object as module value', function() {
      expect(usersModule).to.be.a('object');
    });
  });
});
