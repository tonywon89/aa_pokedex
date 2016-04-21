var ServerActions = require('../actions/serverActions.js');

var ApiUtils = {
  fetchAllPokemons: function(){
    $.ajax({
      url: "api/pokemon",
      type: "GET",
      success: function(pokemons){
        ServerActions.receiveAllPokemons(pokemons);
      }
    });
  },

  fetchSinglePokemon: function (id) {
    $.ajax({
      url: "api/pokemon/" + id,
      type: "GET",
      success: function(pokemon) {
        ServerActions.receiveSinglePokemon(pokemon);
      }
    });
  }
};
module.exports = ApiUtils;
