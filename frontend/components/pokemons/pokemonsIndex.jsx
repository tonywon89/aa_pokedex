var React = require("react");
var PokemonStore = require("../../stores/pokemon.js");
var ClientActions = require("../../actions/clientActions.js");


var PokemonIndex = React.createClass({
  getInitialState: function () {
    return {pokemons: PokemonStore.all()};
  },

  componentDidMount: function () {
    this.listener = PokemonStore.addListener(this._onChange);
    ClientActions.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {
    this.setState({pokemons: PokemonStore.all()});
  },

  render: function () {
    var pokemonItems = this.state.pokemons.map(function(pokemon){
      return (<PokemonIndexItem key={pokemon.id} pokemon={pokemon}/>);
    });
    return(
      <div>
        {pokemonItems}
      </div>
    );
  }
});

module.exports = PokemonIndex;
