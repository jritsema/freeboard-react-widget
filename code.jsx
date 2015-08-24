module.exports = React.createClass({
  render: function() {
    return (
      <div>Hello {this.props.data.firstName} {this.props.data.lastName}!</div>
    );
  }
});
