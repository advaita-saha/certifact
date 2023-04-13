const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("Certifact Contract", function () {
    let certifactInstance

    beforeEach(async () => {
        const Certifact = await ethers.getContractFactory("Certifact")
        certifactInstance = await Certifact.deploy()
        await certifactInstance.deployed()
    })

    it("should set the correct name and symbol", async () => {
        const name = await certifactInstance.name()
        const symbol = await certifactInstance.symbol()

        expect(name).to.equal("Certifact")
        expect(symbol).to.equal("CERFT")
    })

    it("should mint a new token", async () => {
        const owner = ethers.Wallet.createRandom().address
        const uri = "https://example.com/token/1"

        await certifactInstance.mint(owner, uri)

        const tokenURI = await certifactInstance.tokenURI(0)
        expect(tokenURI).to.equal(uri)

        const balance = await certifactInstance.balanceOf(owner)
        expect(balance).to.equal(1)
    })
})
