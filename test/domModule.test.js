const chai = require("chai");
const assert = chai.assert;

describe('domModule', function () {
  describe('Module#addMessageToDom', function () {
    before(function () {
      const fs = require('fs');
      let htmlString = fs.readFileSync("./src/index.html").toString();
      this.jsdom = require("jsdom-global")(htmlString);
      this.domModule = require("../src/js/domModule");
    });

    after(function () {
      this.jsdom()
    });

    it("tests if dom can be created", function () {
      let testMessage = "create test p element";
      this.domModule.addMessageToDom("p", testMessage, "testClass");
      let testElement = document.getElementsByClassName("testClass")[0].innerHTML;
      assert.equal(testElement, testMessage);
    })
  });
});