const algosdk = require("algosdk")

const token = 'dj3beARCI5W04CtvCMe2twyfXAMJsX4H6OSB7m40';
const server = 'http://127.0.0.1';
const port = 8080;
const client = new algosdk.Algodv2(token, server, port);

(async () => {
  console.log(await client.status().do());
})().catch((e) => {
  console.log(e);
});
