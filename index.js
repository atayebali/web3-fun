var Web3 = require('web3')

var web3 = new Web3("HTTP://127.0.0.1:8545")

web3.eth.getAccounts().then(accounts => console.log(accounts))