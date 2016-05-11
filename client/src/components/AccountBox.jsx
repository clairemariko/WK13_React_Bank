var React = require('react');
var AccountList = require('./AccountList');

var AccountBox = React.createClass({

  render: function(){

    return(
      <div>
        <h4>Account: {this.props.type}</h4>
        <AccountList account={this.props.accountType}/>
      </div>
    )
  }
})
module.exports =AccountBox;