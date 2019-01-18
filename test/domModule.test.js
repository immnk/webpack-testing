const chai = require("chai");
const expect = chai.expect;
const domModule = require("../src/js/domModule");

describe('domModule', function() {
  describe('Module#getMessage', function() {
    it('should return a string', function() {
      expect(jqueryModule.message).to.be.a('string');
      expect(jqueryModule.message).to.not.empty;
    });
  });
});
