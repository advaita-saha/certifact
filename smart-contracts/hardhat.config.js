require("@nomiclabs/hardhat-waffle")
require("dotenv").config()
require("solidity-coverage")

module.exports = {
    solidity: "0.8.6",
    networks: {
        sepolia: {
            url: process.env.SEPOLIA,
            accounts: [process.env.PVT_KEY],
            chainId: 11155111,
        },
        mumbai: {
            url: process.env.MUMBAI,
            accounts: [process.env.PVT_KEY],
            chainId: 80001,
        },
    },
}
