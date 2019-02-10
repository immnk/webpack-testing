const chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const usersModule = require("../src/js/usersModule");
const dummyObject = {
  "id": 1,
  "first_name": "Aradhana",
  "last_name": "Mani",
  "email": "AradhanaM@nationalgeographic.com",
  "gender": "Female",
  "ip_address": "68.207.239.110",
  "avatar": "https://i.imgur.com/Re7kdwm.jpg"
};

describe('usersModule', function() {
  it('should expect an object as module value', function() {
    expect(usersModule).to.be.a("object");
  });
  describe('Module#getTemplateFn', function() {
    it('should return a string', function() {
      const generatorFn = usersModule.getTemplateFn();
      const generatedTemplate = generatorFn(dummyObject);
      expect(generatedTemplate).to.be.a("string");
      expect(generatedTemplate).to.not.empty;
    });
  });
  describe('Module#femaleCount', function() {
    it('should return femaleCount to be 10', function() {
      expect(usersModule.women).to.be.a('Array');
      assert.equal(usersModule.women.length, 10);
    });
  });
  describe('Module#menCount', function() {
    it('should return men count to be 10', function() {
      expect(usersModule.men).to.be.a('Array');
      assert.equal(usersModule.men.length, 10);
    });
  });
});
