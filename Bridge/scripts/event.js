const Web3 = require("web3");
const CHSD_ABIJSON = require("./abi.json");

const ORIGIN_TOKEN_CONTRACT_ADDRESS =
  "0x1F7081E69CFd2B35f3A7331358c63F46cc4bED0d";
const ORIGIN_WSS_ENDPOINT =
  "wss://polygon-mumbai.g.alchemy.com/v2/LSLO36nb1vf79rmhBg25OtTYn-1NvXQo";

const originWebSockerProvider = new Web3(ORIGIN_WSS_ENDPOINT);
const WALLET = "0x9Cc9b0926837549c7b5Cbe56fb90FC9bb5beB756";
const WALLET_KEY =
  "63c970dedafdfb8dcf0637c748cb436c4bdfed2b4e4bc9919665bc55b7b0f36f";

originWebSockerProvider.eth.accounts.wallet.add(WALLET_KEY);
let oriNetworkId = "";
async function start() {
  oriNetworkId = await originWebSockerProvider.eth.net.getId();
}
start();

const originTokenContract = new originWebSockerProvider.eth.Contract(
  CHSD_ABIJSON,
  ORIGIN_TOKEN_CONTRACT_ADDRESS
);

let options = {};
originTokenContract.events
  .Transfer(options)
  .on("data", async (event) => {
    console.log("trigger");
  })
  .on("error", (err) => {
    console.error("Error: ", err);
  });
console.log(`Waiting for Transfer events on ${ORIGIN_TOKEN_CONTRACT_ADDRESS}`);
