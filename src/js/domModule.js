const domModule = (function() {
  const message = "Loaded jQuery module";
  const wrapperNode = document.getElementsByClassName("wrapper")[0];

  const addMessageToDom = function(elementName, message, className) {
    var node = document.createElement(elementName);
    node.innerHTML = message;
    if (className) {
      node.className = className;
    }
    wrapperNode.appendChild(node);
  }

  return {
    message: message,
    addMessageToDom: addMessageToDom
  };
})();

module.exports = domModule;
