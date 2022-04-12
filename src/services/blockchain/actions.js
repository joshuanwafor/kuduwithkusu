var c = require("./client");
var algosdk= require("algosdk")
const algodClient = c.client;

async function sendAlgoFunds(senderAccount, receiver_address) {
  let params = await algodClient.getTransactionParams().do();
  // comment out the next two lines to use suggested fee
  params.fee = algosdk.ALGORAND_MIN_TX_FEE;
  params.flatFee = true;

  const receiver = receiver_address;
  const enc = new TextEncoder();
  const note = enc.encode("Hello World");
  let amount = 1000000; // equals 1 ALGO
  let sender = senderAccount.addr;

  let txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: sender,
    to: receiver,
    amount: amount,
    note: note,
    suggestedParams: params,
  });

  // Sign the transaction
  let signedTxn = txn.signTxn(senderAccount.sk);
  let txId = txn.txID().toString();
  console.log("Signed transaction with txID: %s", txId);

  // Submit the transaction
  await algodClient.sendRawTransaction(signedTxn).do();

  // Wait for confirmation
  let confirmedTxn = await algosdk.waitForConfirmation(algodClient, txId, 4);
  //Get the completed Transaction
  console.log(
    "Transaction " +
      txId +
      " confirmed in round " +
      confirmedTxn["confirmed-round"]
  );
  // let mytxinfo = JSON.stringify(confirmedTxn.txn.txn, undefined, 2);
  // console.log("Transaction information: %o", mytxinfo);
  let string = new TextDecoder().decode(confirmedTxn.txn.txn.note);
  console.log("Note field: ", string);
  accountInfo = await algodClient.accountInformation(myAccount.addr).do();
  console.log("Transaction Amount: %d microAlgos", confirmedTxn.txn.txn.amt);
  console.log("Transaction Fee: %d microAlgos", confirmedTxn.txn.txn.fee);
  console.log("Account balance: %d microAlgos", accountInfo.amount);
}

module.exports = {
  sendAlgoFunds: sendAlgoFunds,
};
