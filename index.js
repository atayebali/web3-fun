var Web3 = require('web3')
var web3 = new Web3("HTTP://127.0.0.1:8545")

async function main() {
  var receiving = "hash"
  var rawtx = {
    nonce: 7,
    to: receiving,
    gasPrice: 20000000000,
    gasLimit: 300000,
    value: 1,
    data: ""
  }

  try {
    const signedTx = await web3.eth.accounts.signTransaction(rawtx, 'pkey')
    const tx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    console.log(tx)

  } catch (e) {
    console.log(e)
  }

}

main()

