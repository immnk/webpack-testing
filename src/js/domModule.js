const domModule = (function() {
  const wrapperNode = document.getElementsByClassName("wrapper")[0];

  const addMessageToDom = function(elementName, message, className) {
    var node = document.createElement(elementName);
    node.innerHTML = message;
    if (className) {
      node.className = className;
    }
    wrapperNode.appendChild(node);
  };

  return {
    addMessageToDom: addMessageToDom
  };
})();

module.exports = domModule;
