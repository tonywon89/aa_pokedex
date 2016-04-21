var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');

var _pokemons = {};
var PokemonStore = new Store(Dispatcher);

PokemonStore.resetPokemons = function(pokemons){
  _pokemons = {};
  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
};

PokemonStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "POKEMONS_RECEIVED":
      this.resetPokemons(payload.pokemons);
      break;
  }
};

PokemonStore.all = function(){
  var result = [];
  for (var pokemonId in _pokemons){
    if (_pokemons.hasOwnProperty(pokemonId)){
      result.push(_pokemons[pokemonId]);
    }
  }
  return result;
};

module.exports = PokemonStore;
