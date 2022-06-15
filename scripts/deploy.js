const { ethers } = require("hardhat")

async function main() {
  const helloFactory = await ethers.getContractFactory("HelloWorld")
  console.log("Deploying Contract...")

  const hello = await helloFactory.deploy("Hello World!")
  console.log("Contract deployed to address:", hello.address);
  await hello.deployed()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
