// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC4907.sol";

contract RentalNFT is ERC4907 {
    constructor(
        string memory name,
        string memory symbol
    ) ERC4907(name, symbol) {}

    function mint(uint256 tokenId, address to) public {
        _mint(to, tokenId);
    }
}
