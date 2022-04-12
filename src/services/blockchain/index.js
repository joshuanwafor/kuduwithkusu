var createAccountModule = require("./createAccount");
var clientModule = require("./client");
var actions = require("./actions")

async function checkAlgoBalance( myAddress ) {

  let accountInfo = await clientModule.client
    .accountInformation(myAddress)
    .do();
  console.log("Account balance: %d microAlgos", accountInfo.amount);
}

module.exports = {
  createAlgoWallet: createAccountModule.createAlgoAccount,
  checkAlgoBalance: checkAlgoBalance,
  sendFunds: actions.sendAlgoFunds
};
