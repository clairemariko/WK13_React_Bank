var React = require('react');
var Bank = require('../bank/bank.js');
var Account = require('../bank/account.js');
var BankTotal = require('./BankTotal.jsx');
var AccountBox = require('./AccountBox.jsx');
var sampleAccounts = require('../sample.json');



var BankBox= React.createClass({
  getInitialState:function(){
    return{account: sampleAccounts}
  },



//this is like window.onload so we need to  new a up a bank. 
  render: function(){
    var bank = new Bank();
    bank.accounts = this.state.account;
    var bankTotal = bank.totalCash();
    var accountPersonal = bank.filteredAccounts("personal");
    var accountBusiness = bank.filteredAccounts("business");

    return(
      <div>
        <h1>React Bank</h1>
        <BankTotal total={bankTotal}/>
        <AccountBox type="personal" accountType={accountPersonal}/>
        <AccountBox type="business" accountType={accountBusiness}/>
      </div>
    )
  } 
})

module.exports = BankBox;