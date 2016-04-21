var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var HashHistory = require('react-router').hashHistory;
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
    <Router history={HashHistory}>
      {routes}
     </Router>,
    document.getElementById("root")
  );
});
