const loadashModule = (function() {
  const _ = require('lodash/core');
  const users = require("../data/users.data");
  const message = "Loaded lodashModule";

  const menCollection = _.filter(users, {
    "gender": "Male"
  });

  const womenCollection = _.filter(users, {
    "gender": "Female"
  });

  return {
    men: menCollection,
    women: womenCollection,
    message: message
  }
})();

module.exports = loadashModule;
