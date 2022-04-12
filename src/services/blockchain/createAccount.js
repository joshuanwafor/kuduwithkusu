const algosdk = require("algosdk");
const createAlgoAccount = function () {
  try {
    const myaccount = algosdk.generateAccount();
    let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
    return {
      addr: myaccount.addr,
      mnemonic: account_mnemonic,
    };
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = {
  createAlgoAccount: createAlgoAccount,
};
