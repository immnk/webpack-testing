(function() {
  const domModule = require("./domModule");
  const usersModule = require("./usersModule");

  const womenCollection = usersModule.women;
  const menCollection = usersModule.men;

  if (domModule) {
    domModule.addMessageToDom("p", `Message from Module1: ${domModule.message}`);
  }

  if (usersModule) {
    domModule.addMessageToDom("p", `Message from Module2: ${usersModule.message}`);
  }

  if (womenCollection.length > 0) {
    domModule.addMessageToDom("p", `There are ${womenCollection.length} females in your data object`);
    domModule.addMessageToDom("p", `There are ${menCollection.length} males in your data object`);
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
