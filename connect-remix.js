var Web3 = require('web3')
var web3 = new Web3("HTTP://127.0.0.1:8545")

web3.eth.getTransactionCount("0xDB25177eF0d365AFea12efd63173B5FbC937e076").then(a => console.log(a))