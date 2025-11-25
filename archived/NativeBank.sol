// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract NativeBank {
    mapping(address => uint256) public balanceOf;
    bool lock;

    constructor() {}

    modifier noreentrancy() {
        require(!lock, "is now working on");
        lock = true;
        _;
        lock = false;
    }

    function withdraw() external {
        uint256 balance = balanceOf[msg.sender];
        require(balance > 0, "Insufficient balance");

        
        (bool success,) = msg.sender.call{value: balance}(""); //얼마나 보낼지를 중괄호 안에 contract가 만드는 tx
        require(success, "failed to send native token");

        balanceOf[msg.sender] = 0;
    }
                                    //payable이 있어야 native token 받을 수 있음
    receive() external payable { //receive나 fallback이 있어야 token 받을 수 있음
        balanceOf[msg.sender] += msg.value;
    }

}