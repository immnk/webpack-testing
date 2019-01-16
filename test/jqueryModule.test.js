const chai = require("chai");
const expect = chai.expect;
const jqueryModule = require("../src/js/jqueryModule");

describe('jqueryModule', function() {
  describe('Module#getMessage', function() {
    it('should return a string', function() {
      expect(jqueryModule.message).to.be.a('string');
      expect(jqueryModule.message).to.not.empty;
    });
  });
});
