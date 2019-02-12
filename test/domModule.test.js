const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

describe('domModule', function () {
    describe('Module#addMessageToDom', function () {
        before(function () {
            this.timeout(0);
            const fs = require('fs');
            let htmlString = fs.readFileSync("./src/index.html").toString();
            this.jsdom = require("jsdom-global")(htmlString);
            this.domModule = require("../src/js/domModule");
        });

        after(function () {
            this.jsdom()
        });

        it('should expect an object as module value', function () {
            expect(this.domModule).to.be.a("object");
        });

        it("test if empty dom is created with empty class", function () {
            let testMessage = "";
            this.domModule.addMessageToDom("p", testMessage, "");
            let testElement = document.getElementsByTagName("p")[0].innerHTML;
            let className = document.getElementsByTagName("p")[0].classList[0];
            assert.equal(testElement, testMessage);
            assert.equal(className, undefined);
        });

        it("tests if dom can be created", function () {
            let testMessage = "create test p element";
            this.domModule.addMessageToDom("p", testMessage, "testClass");
            let testElement = document.getElementsByClassName("testClass")[0].innerHTML;
            let className = document.getElementsByClassName("testClass")[0].classList[0];
            assert.equal(testElement, testMessage);
            assert.equal(className, "testClass");
        });
    });
});