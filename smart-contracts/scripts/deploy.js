const main = async () => {
    const CertifactFactory = await hre.ethers.getContractFactory("Certifact")
    const CertiFactContract = await CertifactFactory.deploy()

    await CertiFactContract.deployed()

    console.log("Certifact:", CertiFactContract.address)
}

;(async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
})()
