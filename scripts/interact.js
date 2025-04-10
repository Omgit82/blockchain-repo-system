const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const [deployer] = await ethers.getSigners();

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // replace with actual address
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.attach(contractAddress);

  const unlockTime = await lock.unlockTime();
  console.log("Unlock time:", unlockTime.toString());

  const block = await ethers.provider.getBlock("latest");
  console.log("Current block timestamp:", block.timestamp);

  try {
    const tx = await lock.withdraw();
    await tx.wait();
    console.log("Withdrawal successful!");
  } catch (error) {
    console.error("Withdrawal failed:", error.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
