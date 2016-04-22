var React = require("react");
var HashHistory = require('react-router').hashHistory;


var ToyIndexItem = React.createClass({

  showToy: function() {
    HashHistory.push("toys/" + this.props.toy.id);
  },

  render: function () {
    return (
      <li className="toy-list-item" onClick={this.showToy}>
        <ul>
          <li>{"name: " + this.props.toy.name}</li>
          <li>{"happiness: " + this.props.toy.happiness}</li>
          <li>{"price: " + this.props.toy.price}</li>
        </ul>
      </li>
    );
  }
});

module.exports = ToyIndexItem;
