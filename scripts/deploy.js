const hre = require("hardhat");
const ethers = hre.ethers; // still fine

async function main() {
  const unlockTime = Math.floor(Date.now() / 1000) + 60;
  const lockedAmount = ethers.parseEther("0.001"); // ✅ FIXED for Ethers v6

  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.waitForDeployment(); // ✅ updated method for Ethers v6 + Hardhat
  console.log("Lock contract deployed to:", await lock.getAddress()); // ✅ also updated
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
