var React = require('react');
var ReactDOM = require('react-dom');
// PokemonStore = require('./stores/pokemon.js');
// ApiUtils = require('./util/apiUtil');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<PokemonsIndex/>, document.getElementById("root"));
});
