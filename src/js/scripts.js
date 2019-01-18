(function() {
  const jqueryModule = require("./jqueryModule");
  const lodashModule = require("./loadashModule");

  const womenCollection = lodashModule.women;
  const menCollection = lodashModule.men;
  const wrapperNode = document.getElementsByClassName("wrapper")[0];

  if (jqueryModule) {
    addMessageToDom("p", `Message from Module1: ${jqueryModule.message}`);
  }

  if(lodashModule) {
    addMessageToDom("p", `Message from Module2: ${lodashModule.message}`);
  }

  if (womenCollection.length > 0) {
    addMessageToDom("p", `There are ${womenCollection.length} females in your data object`);
    const templateFn = lodashModule.getTemplateFn();
    var cardCollection = "";
    womenCollection.forEach(function(women) {
      women.avatar += "?" + women.id;
      let templateHTML = templateFn(women);
      cardCollection += templateHTML;
    });
    addMessageToDom("ul", cardCollection, "users");
  }

  function addMessageToDom(elementName, message, className) {
    var node = document.createElement(elementName);
    node.innerHTML = message;
    if(className) {
      node.className = className;
    }
    wrapperNode.appendChild(node);
  }
})();
