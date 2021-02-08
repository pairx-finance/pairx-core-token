
const hre = require("hardhat")
const ethers = require('ethers') 
const { formatEther } = ethers.utils  

async function main() {

  const PairXToken = await hre.ethers.getContractFactory("PairXToken");
  const token = await PairXToken.deploy();

  await token.deployed();
  
  const name = await token.name()
  const symbol = await token.symbol()
  const decimals = await token.decimals()
  const totalSupply = await token.totalSupply()
  console.log("PairXToken deployed to:", token.address);
  console.log(`Name:${name} Symbol:${symbol} Decimals:${decimals}`)
  console.log(`TotalSupply:${formatEther(totalSupply)}`)

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
