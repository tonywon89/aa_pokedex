var React = require("react");

var ToyIndexItem = React.createClass({
  render: function () {
    return (
      <li className="toy-list-item">
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
