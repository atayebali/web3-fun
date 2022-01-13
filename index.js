var Web3 = require('web3')
var web3 = new Web3("HTTP://127.0.0.1:8545")
const nonce = web3.eth.getTransactionCount("0xa282Fb30919d18CFe2fFC5d348D7b78DeD36F99B")

async function main() {
  var receiving = "0xb25cD86B796BDC9eDB41668b74c6a48f47c9cEeE"
  var rawtx = {
    nonce: nonce,
    to: receiving,
    gasPrice: 21000,
    gasLimit: 100000,
    value: 100,
    data: ""
  }

  //web3.eth.getBlockUncleCount().then(account => console.log(account))
  //web3.eth.getBlock("latest").then(account => console.log(account))
  web3.eth.getBlockTransactionCount(6).then(account => console.log(account))
  // web3.eth.getBlock("latest").then(account => console.log(account))


  try {
    const signedTx = await web3.eth.accounts.signTransaction(rawtx, '0xec5a317dafcc75e73134093db9984b6d753a4cfee81dd64e6f4773a8457eee75')
    const tx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    // console.log(tx)
  } catch (e) {
    console.log(e)
  }

  // web3.eth.getBalance('0xa282Fb30919d18CFe2fFC5d348D7b78DeD36F99B').then(r => console.log(r))
  // web3.eth.getBalance('0xb25cD86B796BDC9eDB41668b74c6a48f47c9cEeE').then(r => console.log(r))

}

main()

