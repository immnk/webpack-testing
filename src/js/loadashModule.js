const loadashModule = (function() {
  const _ = require('lodash/core');
  const users = require("../data/users.data");

  const femaleCount = _.filter(users, {
    "gender": "Female"
  }).length;

  console.log(femaleCount);

  return {
    femaleCount: femaleCount
  }
})();

module.exports = loadashModule;
