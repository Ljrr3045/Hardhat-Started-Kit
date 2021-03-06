require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: {
    compilers: [{
      version: "0.7.8"
    },
    {
      version: "0.8.8"
    }]
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.MAINNET_URL, 
        blockNumber: 15059534,
      }
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts:{
        mnemonic: process.env.MNEMONIC
      },
    },
    mainnet: {
      url: process.env.MAINNET_URL,
      accounts:{
        mnemonic: process.env.MNEMONIC
      },
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY
    }
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    token: "ETH",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
};
