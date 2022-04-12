// import firestore from "firebase-admin/firestore";
var firestore = require("firebase-admin/firestore");
var blockchainModule = require("./blockchain");
function createUser(fullname, email, phone) {
  let db = firestore.getFirestore();
  db.collection("users")
    .doc(email)
    .set({
      fullname: fullname,
      email: email,
      phone: phone,
      algoAccount: blockchainModule.createAlgoWallet(),
    })
    .then(function (resp) {
      console.log("added user successfully");
    })
    .catch(function (error) {});
}

function updateUser(email, updateObject) {
  let db = firestore.getFirestore();
  db.collection("users")
    .doc(email)
    .set(updateObject)
    .then(function (resp) {
      console.log("updated user successfully");
    })
    .catch(function (error) {});
}

function deleteUser(email) {
  let db = firestore.getFirestore();
  db.collection("users")
    .doc(email)
    .delete()
    .then(function (resp) {
      console.log("deleted user successfully");
    })
    .catch(function (error) {});
}

async function getUserByEmail(email) {
  let db = firestore.getFirestore();
  try {
    let resp = await db.collection("users").doc(email).get();
    return resp.data();
  } catch (error) {
    console.log("Something went wrong while retriving user");
  }
}

function getAllUsers() {}

module.exports = {
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  getUserByEmail: getUserByEmail,
};
