var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher.js');

var _pokemons = {};
var PokemonStore = new Store(Dispatcher);

PokemonStore.resetPokemons = function(pokemons){
  _pokemons = {};
  pokemons.forEach(function(pokemon){
    _pokemons[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "POKEMONS_RECEIVED":
      this.resetPokemons(payload.pokemons);
      break;
    case "SINGLE_POKEMON_RECEIVED":
      this.resetSinglePokemon(payload.pokemon);
      break;
  }
};

PokemonStore.resetSinglePokemon = function(pokemon){
  _pokemons[pokemon.id] = pokemon;
  PokemonStore.__emitChange();
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

PokemonStore.find = function(id){
  return _pokemons[id];
};

module.exports = PokemonStore;
