const loadashModule = (function() {
  const _ = require("lodash");
  const users = require("../data/users.data");
  const message = "Loaded lodashModule";

  const menCollection = _.filter(users, {
    "gender": "Male"
  });

  const womenCollection = _.filter(users, {
    "gender": "Female"
  });

  const getTemplateFn = function() {
    const userTemplate = `
    <div class="card">
      <div class="profile-img profile-img__dummy" style="background-image: url('<%= avatar %>');"></div>
      <a href="#">
        <div class="profile-img profile-img__expand" style="background-image: url('<%= avatar %>');"></div>
      </a>
      <div class="card-body">
        <h4 class="title"><%= first_name %> <%= last_name %></h4>
        <p class="email"><%= email %></p>
      </div>
    </div>
    `;
    return _.template(userTemplate);
  };

  return {
    men: menCollection,
    women: womenCollection,
    getTemplateFn: getTemplateFn
  };
})();

module.exports = loadashModule;
