const { expect, assert } = require("chai")
const { ethers } = require("hardhat")

describe("Certifact Contract - Staging", function () {
    let certifactInstance

    beforeEach(async () => {
        const Certifact = await ethers.getContractFactory("Certifact")
        certifactInstance = await Certifact.deploy()
        await certifactInstance.deployed()
    })

    it("should only allow the owner to mint new tokens", async () => {
        const owner = ethers.Wallet.createRandom().address
        const nonOwner = ethers.Wallet.createRandom().address
        const uri = "https://example.com/token/2"

        await expect(
            certifactInstance
                .connect(ethers.provider.getSigner(nonOwner))
                .mint(nonOwner, uri)
        ).to.be.revertedWith("Ownable: caller is not the owner")
    })
})
