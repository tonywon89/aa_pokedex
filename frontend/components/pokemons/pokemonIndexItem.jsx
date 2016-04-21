var React = require('react');
var HashHistory = require('react-router').hashHistory;

var PokemonIndexItem = React.createClass({
  handleClick: function (event) {
    HashHistory.push("pokemon/" + this.props.pokemon.id);
  },

  render: function(){
    return(
      <li className="poke-list-item" onClick={this.handleClick}> Name: {this.props.pokemon.name} Type: {this.props.pokemon.poke_type} </li>
    );
  }
});

module.exports = PokemonIndexItem;
