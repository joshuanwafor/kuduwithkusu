var userModule = require("./user");
var algosdk = require("algosdk");
var blockchainModule = require("./blockchain");

function getUserAccountBalance() {}

async function sendMoney(senderEmail, receiverEmail, amount) {
    console.log("about to send funds from a to b")
  let senderAccount = await userModule.getUserByEmail(senderEmail);
  let receiverAccount = await userModule.getUserByEmail(receiverEmail);
  if (senderAccount != undefined && receiverAccount != undefined) {
    // let
    console.log("got participadsdsds info")
    let account = algosdk.mnemonicToSecretKey(
      senderAccount.algoAccount.mnemonic
    );

    blockchainModule.sendFunds(account, receiverAccount.algoAccount.addr);
  }
}

function getUserTransactions() {}

function getAllTransactions() {}

module.exports = {
  sendMoney: sendMoney,
};
