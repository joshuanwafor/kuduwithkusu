var algosdk = require("algosdk");

const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";
const token = { "X-API-key": "LlrOj34yv29o1H2WNwyY5k7gyTzmNdT4owgQ6dI0" };

const client = new algosdk.Algodv2(token, server, port);

(async () => {
  console.log(await client.status().do());
})().catch((e) => {
  console.log(e);
});

module.exports = {
  client: client,
};
