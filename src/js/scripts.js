(function() {
  const jqueryModule = require("./jqueryModule");
  const loadashModule = require("./loadashModule");

  const femaleCount = loadashModule.femaleCount;
  const wrapperNode = document.getElementsByClassName("wrapper")[0];

  if (jqueryModule) {
    var p = document.createElement('p');
    p.innerHTML = `Message from Module1: ${jqueryModule.message}`;
    wrapperNode.appendChild(p);
  }

  if(loadashModule) {
    var p = document.createElement('p');
    p.innerHTML = `Message from Module2: ${loadashModule.message}`;
    wrapperNode.appendChild(p);
  }

  if (femaleCount > 0) {
    var p = document.createElement('p');
    p.innerHTML = `There are ${femaleCount} females in your data object`;
    wrapperNode.appendChild(p);
  }
})();
