//local: 0x200167D98e8f03810298ac19f0C7eE69a87780B9
//goerli: 0x8268fd77E2644bDdBc8e642514b927A0de1bCdd7

const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
 
  const WhiteList = await ethers.getContractFactory("Whitelist");

  // deploy the contract
  const deployedCryptoDevsContract = await WhiteList.deploy(20);

  // Wait for it to finish deploying
  await deployedCryptoDevsContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Whitelist Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });