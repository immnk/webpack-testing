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
    womenCollection.forEach(function(women) {
      women.avatar += "?" + women.id;
      let templateHTML = templateFn(women);
      wrapperNode.innerHTML += templateHTML;
    });
  }

  function addMessageToDom(elementName, message) {
    var p = document.createElement(elementName);
    p.innerHTML = message;
    wrapperNode.appendChild(p);
  }
})();
