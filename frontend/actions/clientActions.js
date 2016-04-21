var ApiUtils = require("../util/apiUtil.js");

var ClientActions = {
  fetchAllPokemons: function () {
    ApiUtils.fetchAllPokemons();
  }
};

module.exports = ClientActions;
