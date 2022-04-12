var admin = require("firebase-admin");
var usersModule = require("./services/user");
var blockchainModule = require("./services/blockchain");
var serviceAccount = require("./firebasekey.json");
var transactionsModule = require("./services/transactions");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

transactionsModule.sendMoney("joshua@gmail.com", "lucy@gmail.com", 1000);
