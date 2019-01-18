(function() {
  const jqueryModule = require("./jqueryModule");
  const loadashModule = require("./loadashModule");

  const womenCollection = loadashModule.women;
  const menCollection = loadashModule.men;
  const wrapperNode = document.getElementsByClassName("wrapper")[0];

  if (jqueryModule) {
    addMessageToDom("p", `Message from Module1: ${jqueryModule.message}`);
  }

  if(loadashModule) {
    addMessageToDom("p", `Message from Module2: ${loadashModule.message}`);
  }

  if (womenCollection.length > 0) {
    const template = require("../templates/card.html");
    womenCollection.forEach(function(women) {
      let list
    });
    addMessageToDom("p", `There are ${womenCollection.length} females in your data object`);
  }

  function addMessageToDom(elementName, message) {
    var p = document.createElement(elementName);
    p.innerHTML = message;
    wrapperNode.appendChild(p);
  }
})();
