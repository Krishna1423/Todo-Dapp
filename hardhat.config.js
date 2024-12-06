require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config({ path: "D:/hardhat/config.env" });

module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url:
        "https://eth-sepolia.g.alchemy.com/v2/" +
        process.env.ALCHEMY_SEPOLIA_URL,
      accounts: [process.env.METAMASK_ACCOUNT_PRIVATE_KEY],
    },
  },
};
