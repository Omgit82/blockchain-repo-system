const hre = require("hardhat");
const ethers = hre.ethers; // ✅ THIS IS IMPORTANT

async function main() {
  const unlockTime = Math.floor(Date.now() / 1000) + 60; // Unlock in 1 minute
  const lockedAmount = ethers.utils.parseEther("0.001"); // ✅ parseEther used properly

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();
  console.log("Lock contract deployed to:", lock.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
