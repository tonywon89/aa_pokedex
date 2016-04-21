var React = require('react');

var PokemonIndexItem = React.createClass({
  render: function(){
    return(
      <li className="poke-list-item"> Name: {this.props.pokemon.name} Type: {this.props.pokemon.poke_type} </li>
    );
  }
});

module.exports = PokemonIndexItem;
