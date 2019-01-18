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
      <img src="<%= avatar %>" alt="Profile Image" class="profile-img profile-img__dummy">
      <a href="#">
        <img src="<%= avatar %>" alt="Profile Image" class="profile-img profile-img__expand">
      </a>
      <div class="card-body">
        <h4 class="title"><%= first_name %> <%= last_name %></h4>
        <p class="email"><%= email %></p>
      </div>
    </div>
    `;
    return _.template(userTemplate);
  }

  return {
    men: menCollection,
    women: womenCollection,
    message: message,
    getTemplateFn: getTemplateFn
  };
})();

module.exports = loadashModule;
