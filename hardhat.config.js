require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goerli:{
      url: GOERLI_RPC_URL,
      accounts:[PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: "0.8.4",
};
