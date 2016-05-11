var React = require('react');
var AccountList = React.createClass({

render: function(){
  var accountList = this.props.account.map(function(account){
    return <li key={account.owner}>{account.owner} : £{account.amount}</li>
  })

    return(
      <div>
          <ul>
            {accountList}
          </ul>
      </div>
    )
  }
})

module.exports =AccountList;