var ApiUtils = require("../util/apiUtil.js");

var ClientActions = {
  fetchAllPokemons: function () {
    ApiUtils.fetchAllPokemons();
  },

  fetchSinglePokemon: function(id) {
    ApiUtils.fetchSinglePokemon(id);
  }
};

module.exports = ClientActions;
