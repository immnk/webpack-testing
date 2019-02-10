const loadashModule = (function() {
  const _ = require("lodash");
  const users = require("../data/users.data");

  const menCollection = _.filter(users, {
    "gender": "Male"
  });

  const womenCollection = _.filter(users, {
    "gender": "Female"
  });

  const getTemplateFn = function() {
    let cardTemplate = require("../templates/card.html");
    return _.template(cardTemplate);
  };

  return {
    men: menCollection,
    women: womenCollection,
    getTemplateFn: getTemplateFn
  };
})();

module.exports = loadashModule;
