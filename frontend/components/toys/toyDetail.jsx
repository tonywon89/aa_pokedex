var React = require("react");
var PokemonStore = require("../../stores/pokemon.js");

var ToyDetail = React.createClass({
  getInitialState: function(){
    return{
      toy: undefined
    };
  },

  componentWillReceiveProps: function(){
    this.getStateFromStore();
  },

  getStateFromStore: function () {

    var pokemon = PokemonStore.find(this.props.params.pokemonId);
    var toys = pokemon.toys;
    var result;
    toys.forEach(function(toy) {
      if (toy.id === parseInt(this.props.params.toyId)) {
        result = toy;
      }
    });
    this.setState({toy: result});
  },

  render: function(){
    return(
      <div className="toy-detail-pane">
        <div className='detail'>
        </div>
      </div>
    );
  }
});

module.exports = ToyDetail;
