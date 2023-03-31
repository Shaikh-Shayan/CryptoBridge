require("dotenv").config();
const Web3 = require("web3");

const REV_TOKEN_JSON = require("./RevToken.json");
const REV_TOKEN_JSON_POLY = require("./RevTokenPoly.json");

const BRIDGE_WALLET = process.env.BRIDGE_WALLET;
const BRIDGE_WALLET_KEY = process.env.BRIDGE_PRIV_KEY;

const ORIGIN_TOKEN_CONTRACT_ADDRESS = process.env.ORIGIN_TOKEN_CONTRACT_ADDRESS;
const originWebSockerProvider = new Web3(process.env.ORIGIN_WSS_ENDPOINT);

//web socket for destination contract
const DESTINATION_TOKEN_CONTRACT_ADDRESS =
  process.env.DESTINATION_TOKEN_CONTRACT_ADDRESS;
const destinationHttpSockerProvider = new Web3(
  process.env.DESTINATION_HTTPS_ENDPOINT
);

// adds account to sign transactions on origin
originWebSockerProvider.eth.accounts.wallet.add(BRIDGE_WALLET_KEY);

// origin contract
const originTokenContract = new originWebSockerProvider.eth.Contract(
  REV_TOKEN_JSON.abi,
  ORIGIN_TOKEN_CONTRACT_ADDRESS
);

// adds account to sign transactions on destination
destinationHttpSockerProvider.eth.accounts.wallet.add(BRIDGE_WALLET_KEY);

// destination contract
const destinationTokenContract = new destinationHttpSockerProvider.eth.Contract(
  REV_TOKEN_JSON_POLY.abi,
  DESTINATION_TOKEN_CONTRACT_ADDRESS
);

// mints token to the provided address
const mintTokens = async (provider, contract, amount, address) => {
  try {
    const trx = contract.methods.mint(address, amount);
    const gas = await trx.estimateGas({ from: BRIDGE_WALLET });
    console.log("gas :>> ", gas);
    const gasPrice = await provider.eth.getGasPrice();
    console.log("gasPrice :>> ", gasPrice);
    const data = trx.encodeABI();
    console.log("data :>> ", data);
    const nonce = await provider.eth.getTransactionCount(BRIDGE_WALLET);
    console.log("nonce :>> ", nonce);
    const trxData = {
      // trx is sent from the bridge wallet
      from: BRIDGE_WALLET,
      // destination of the transaction is the ERC20 token address
      to: DESTINATION_TOKEN_CONTRACT_ADDRESS,
      data,
      gas,
      gasPrice,
      nonce,
    };
    console.log("Transaction ready to be sent");
    const receipt = await provider.eth.sendTransaction(trxData);
    console.log(`Transaction sent, hash is ${receipt.transactionHash}`);
    console.log(
      `mintTokens > You can see this transaction in ${process.env.DESTINATION_EXPLORER}${receipt.transactionHash}`
    );
  } catch (error) {
    console.error("Error in mintTokens >", error);
    return false;
  }
};

//Transfer events listner
let options = {};
originTokenContract.events
  .Transfer(options)
  .on("data", async (event) => {
    //console.log(event);
    if (event.returnValues.to == BRIDGE_WALLET) {
      mintTokens(
        destinationHttpSockerProvider,
        destinationTokenContract,
        event.returnValues.value,
        event.returnValues.from
      );
    }
    //   destinationWebSockerProvider,
    //   destinationTokenContract
  })
  .on("error", (err) => {
    console.error("Error: ", err);
  });
console.log(`Waiting for Transfer events on ${ORIGIN_TOKEN_CONTRACT_ADDRESS}`);
