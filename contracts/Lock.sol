// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Lock {
    uint public unlockTime;
    address public owner;

    constructor(uint _unlockTime) payable {
        unlockTime = _unlockTime;
        owner = msg.sender;
    }

    function withdraw() public {
        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        payable(msg.sender).transfer(address(this).balance);
    }
}
