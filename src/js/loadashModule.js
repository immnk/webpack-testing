const loadashModule = (function() {
  const _ = require('lodash/core');
  const users = require("../data/users.data");
  const message = "Loaded lodashModule";

  console.log(message);
  
  const femaleCount = _.filter(users, {
    "gender": "Female"
  }).length;

  console.log(femaleCount);

  return {
    femaleCount: femaleCount,
    message: message
  }
})();

module.exports = loadashModule;
