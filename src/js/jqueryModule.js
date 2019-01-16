const jqueryModule = (function() {
  const message = "Loaded jQuery module";
  console.log(message);
  
  return {
    message: message
  }
})();

module.exports = jqueryModule;
