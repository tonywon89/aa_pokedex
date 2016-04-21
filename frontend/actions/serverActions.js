var Dispatcher = require('../dispatcher/Dispatcher');
var PokemonConstants = require('../constants/PokemonConstants');

var ServerActions = {
  receiveAllPokemons: function(pokemons){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};

module.exports = ServerActions;
