var Web3 = require('web3')
var web3 = new Web3("HTTP://127.0.0.1:8545")
const nonce = web3.eth.getTransactionCount("0xa282Fb30919d18CFe2fFC5d348D7b78DeD36F99B")
const receiving = "0x1F52D184549CC038455D2651C122281686203581"
const sending = "0xEAD861B6190402993082071457f89B195E885642"
const sending_pk = "0x8fa73c4b901a1064e7c382e50667d2f0f7100b7be018aa54cbe923902639ee62"
async function main() {
  var rawtx = {
    nonce: nonce,
    to: receiving,
    gasPrice: 100_000, //in wei
    gasLimit: 100_000, //units of gas so limit * gasPrice ( will be the max) ,min 21_000
    value: 100, // in wei
    data: ""
  }

  //web3.eth.getBlockUncleCount().then(account => console.log(account))
  //web3.eth.getBlock("latest").then(account => console.log(account))
  // web3.eth.getBlockTransactionCount(6).then(account => console.log(account))
  web3.eth.getBlock("latest").then(account => console.log(account))


  // try {
  //   const signedTx = await web3.eth.accounts.signTransaction(rawtx, sending_pk)
  //   const tx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
  //   // console.log(tx)
  // } catch (e) {
  //   console.log(e)
  // }

  web3.eth.getBalance(receiving).then(r => console.log(r))
  web3.eth.getBalance(sending).then(r => console.log(r))

}

main()

