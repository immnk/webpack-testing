(function() {
  const jqueryModule = require("./jqueryModule");
  const loadashModule = require("./loadashModule");

  const femaleCount = loadashModule.femaleCount;
  const wrapperNode = document.getElementsByClassName("wrapper")[0];

  if (jqueryModule) {
    addMessageToDom("p", `Message from Module1: ${jqueryModule.message}`);
  }

  if(loadashModule) {
    addMessageToDom("p", `Message from Module2: ${loadashModule.message}`);
  }

  if (femaleCount > 0) {
    addMessageToDom("p", `There are ${femaleCount} females in your data object`);
  }

  function addMessageToDom(elementName, message) {
    var p = document.createElement(elementName);
    p.innerHTML = message;
    wrapperNode.appendChild(p);
  }
})();
