require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
//require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/JIlNjCp3bWmgTEFCJ5QDlEYQc7OHGHKh",
      accounts: [
        "63c970dedafdfb8dcf0637c748cb436c4bdfed2b4e4bc9919665bc55b7b0f36f",
      ],
    },

    polygon: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/LSLO36nb1vf79rmhBg25OtTYn-1NvXQo",
      accounts: [
        "acde3ed71703eef498d1bfc5930ccf0bb3d8b107c319bd6fd882e942e0b75c7e",
      ],
    },
  },
};
