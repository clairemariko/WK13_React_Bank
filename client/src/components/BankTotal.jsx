var React = require('react');

var BankTotal = React.createClass({

  render: function(){
    return(
      <h4>The total in the bank: £{this.props.total}</h4>
    )
  }
})

module.exports = BankTotal;