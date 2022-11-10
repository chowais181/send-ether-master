require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const GOERLI_URL = "https://goerli.infura.io/v3/";
const PRIVATE_KEY =
  "de5c465f9187fbeeca2f105d602e205fb52e556378757522c60bba697c002693";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./frontend/src/artifacts",
  },
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
