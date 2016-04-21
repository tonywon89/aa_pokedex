var React = require("react");
var ToyIndexItem = require("./toyIndexItem");


var ToysIndex = React.createClass({
  getInitialState: function(){
    return{
      toys: this.props.toys
    };
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({toys: newProps.toys});
  },

  render: function() {
    var contents;
    if (this.state.toys) {
      contents = this.state.toys.map(function(toy) {
        return <ToyIndexItem key={toy.id} toy={toy}/>;
       });
     } else {
       contents = "";
     }

    return (
      <ul>
        {contents}
      </ul>
    );
  }
});

module.exports = ToysIndex;
