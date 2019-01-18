(function() {
  const domModule = require("./domModule");
  const usersModule = require("./usersModule");

  const womenCollection = usersModule.women;

  if (womenCollection.length > 0) {
    const templateFn = usersModule.getTemplateFn();
    var cardCollection = "";
    womenCollection.forEach(function(women) {
      women.avatar += "?" + women.id;
      let templateHTML = templateFn(women);
      cardCollection += templateHTML;
    });
    domModule.addMessageToDom("ul", cardCollection, "users");
  }


})();
