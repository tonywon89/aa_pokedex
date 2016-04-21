var Dispatcher = require('../dispatcher/Dispatcher');
var PokemonConstants = require('../constants/PokemonConstants');

var ServerActions = {
  receiveAllPokemons: function(pokemons){
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function(pokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.SINGLE_POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = ServerActions;
