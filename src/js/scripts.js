(function() {
  const jqueryModule = require("./jqueryModule");
  const loadashModule = require("./loadashModule");

  const femaleCount = loadashModule.femaleCount;


  if (femaleCount > 0) {
    let wrapperNode = document.getElementsByClassName("wrapper")[0];
    var p = document.createElement('p');
    p.innerHTML = `There are ${femaleCount} females in your data object`;
    wrapperNode.appendChild(p);
  }
})();
