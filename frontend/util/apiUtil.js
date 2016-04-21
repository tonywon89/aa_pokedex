// we'll make ajax requests that fetch information served by our rails controllers, and on success call a front end action creator.
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
  }
};
module.exports = ApiUtils;
