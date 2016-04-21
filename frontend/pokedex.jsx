var React = require('react');
var ReactDOM = require('react-dom');
// PokemonStore = require('./stores/pokemon.js');
// ApiUtils = require('./util/apiUtil');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var PokemonDetail = require('./components/pokemons/pokemonDetail');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');


document.addEventListener("DOMContentLoaded", function () {

  var App = React.createClass({
    render: function() {
      return (
        <div id="pokedex">
          {this.props.children}
          <div className="pokemon-index-pane">
            <PokemonsIndex />
          </div>

        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <Route path="pokemon/:pokemonId" component={PokemonDetail}></Route>
    </Route>
  );

  ReactDOM.render(
    <Router>
      {routes}
     </Router>,
    document.getElementById("root")
  );
});
