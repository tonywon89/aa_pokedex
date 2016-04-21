var React = require("react");
var PokemonStore = require("../../stores/pokemon");
var ClientActions = require("../../actions/clientActions");
var ToysIndex = require("../toys/toysIndex");

var PokemonDetail = React.createClass({

  getInitialState: function(){
    this.pokemonId = parseInt(this.props.params.pokemonId);
    return {pokemon: PokemonStore.find(this.pokemonId)};
  },

  componentDidMount: function () {
    PokemonStore.addListener(this.getStateFromStore);
  },

  getStateFromStore: function(){
    var pokemon = PokemonStore.find(this.props.params.pokemonId);
    this.setState({pokemon: pokemon});
  },

  componentWillReceiveProps: function(newProps){
    ClientActions.fetchSinglePokemon(parseInt(newProps.params.pokemonId));
  },

  render: function(){
    var imageContent;
    var textContent = [];
    var toys;
    var pokemon = this.state.pokemon;

    if (pokemon){
      imageContent = <img src={pokemon.image_url}/>;
      textContent.push(<li>{"Name: " + pokemon.name}</li>);
      textContent.push(<li>{"Attack: " + pokemon.attack}</li>);
      textContent.push(<li>{"Defense: " + pokemon.defense}</li>);
      textContent.push(<li>{"Type: " + pokemon.poke_type}</li>);
      textContent.push(<li>{"Moves: [" + pokemon.moves + "]"}</li>);

      toys = pokemon.toys;
    } else {
      imageContent = "Loading...";
      toys = undefined;
    }



    return(
      <div>
        <div className='pokemon-detail-pane'>
          <div className='detail'>
            {imageContent}
            <ul>
              {textContent}
            </ul>

          </div>
          <h3> Toys: </h3>
          <ToysIndex toys={toys}/>
        </div>
      </div>
    );
  }
});

module.exports = PokemonDetail;
