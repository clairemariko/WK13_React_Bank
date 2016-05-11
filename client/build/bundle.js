/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Bank = __webpack_require__(1);
	var Account = __webpack_require__(2);
	var sampleAccounts = __webpack_require__(3);
	
	var createItemForAccount = function createItemForAccount(account) {
	  var accountListItem = document.createElement('li');
	  accountListItem.innerText = account.owner + ": £" + account.amount;
	  return accountListItem;
	};
	
	var populateAccountList = function populateAccountList(listElement, accounts) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = accounts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var account = _step.value;
	
	      listElement.appendChild(createItemForAccount(account));
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	};
	
	window.onload = function () {
	  var bank = new Bank();
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = sampleAccounts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var account = _step2.value;
	
	      bank.addAccount(account);
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	
	  var totalDisplay = document.getElementById('total');
	  var businessTotalDisplay = document.getElementById('business-total');
	  var personalTotalDisplay = document.getElementById('personal-total');
	
	  totalDisplay.innerText = "Total: £" + bank.totalCash();
	  businessTotalDisplay.innerText = "Total Business: £" + bank.totalCash('business');
	  personalTotalDisplay.innerText = "Total Personal: £" + bank.totalCash('personal');
	
	  var businessAccountList = document.getElementById('business-accounts');
	  var personalAccountList = document.getElementById('personal-accounts');
	
	  populateAccountList(businessAccountList, bank.filteredAccounts('business'));
	  populateAccountList(personalAccountList, bank.filteredAccounts('personal'));
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var Bank = function Bank() {
	  this.accounts = [];
	};
	
	Bank.prototype = {
	  addAccount: function addAccount(account) {
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName: function findAccountByOwnerName(ownerName) {
	    var foundAccount = null;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = this.accounts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var account = _step.value;
	
	        if (account.owner === ownerName) {
	          foundAccount = account;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    return foundAccount;
	  },
	  filteredAccounts: function filteredAccounts(type) {
	    if (!type) return this.accounts;
	    var filteredAccounts = [];
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	      for (var _iterator2 = this.accounts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var account = _step2.value;
	
	        if (type === account.type) filteredAccounts.push(account);
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	
	    return filteredAccounts;
	  },
	  totalCash: function totalCash(type) {
	    var total = 0;
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	      for (var _iterator3 = this.filteredAccounts(type)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var account = _step3.value;
	
	        total += account.amount;
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }
	
	    return total;
	  },
	  accountAverage: function accountAverage() {
	    return this.totalCash() / this.accounts.length;
	  }
	};
	
	module.exports = Bank;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var Account = function Account(params) {
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "jay",
	    "amount": 125.50,
	    "type": "personal"
	  },
	  { "owner": "val",
	    "amount": 55125.10,
	    "type": "personal"
	  },
	  { "owner": "marc",
	    "amount": 400.00,
	    "type": "personal"
	  },
	  { "owner": "keith",
	    "amount": 220.25,
	    "type": "business"
	  },
	  { "owner": "rick",
	    "amount": 100000.00,
	    "type": "business"
	  }
	]

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map