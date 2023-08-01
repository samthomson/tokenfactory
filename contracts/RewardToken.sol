// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    address public contractOwner;
    uint256 public rewardAmount;

    constructor() ERC20("RewardToken", "ReToke") {
        contractOwner = msg.sender;
        uint256 preMintAmount = 20000000 * 10**18;  // Pre-mint 20 million tokens for rewards
        uint256 initialOwnerAmount = 1000000 * 10**18; // Mint 1 million tokens to owner
        rewardAmount = 10000 * 10**18;  // Set initial reward amount to 10000 tokens per transaction
        _mint(address(this), preMintAmount); // Pre-mint reward tokens and store them in the contract
        _mint(contractOwner, initialOwnerAmount); // Mint tokens for the owner
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(balanceOf(msg.sender) >= amount, "Not enough tokens to transfer");
        _transfer(msg.sender, recipient, amount);

        if (msg.sender != contractOwner) {
            // Calculate the new reward amount based on the current supply
            uint256 currentSupply = balanceOf(address(this));
            uint256 initialSupply = totalSupply();
            uint256 rewardBase = 10**18;

            if (currentSupply <= initialSupply / 10) {
                rewardBase = 10**17; // 1000 tokens
            } 
            if (currentSupply <= initialSupply / 100) {
                rewardBase = 10**16; // 100 tokens
            }
            if (currentSupply <= initialSupply / 1000) {
                rewardBase = 10**15; // 10 tokens
            } 
            if (currentSupply <= initialSupply / 10000) {
                rewardBase = 10**14; // 1 token
            }
            if (currentSupply <= initialSupply / 100000) {
                rewardBase = 10**13; // 0.1 tokens
            }
            if (currentSupply <= initialSupply / 1000000) {
                rewardBase = 10**12; // 0.01 tokens
            }
            if (currentSupply <= initialSupply / 10000000) {
                rewardBase = 5 * 10**11; // 0.005 tokens
            }

            rewardAmount = rewardBase;

            require(balanceOf(address(this)) >= rewardAmount, "Not enough tokens left for reward");
            _transfer(address(this), msg.sender, rewardAmount);  // Reward the transaction sender
        }

        return true;
    }
}
