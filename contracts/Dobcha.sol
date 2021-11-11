pragma solidity  >=0.4.23 <0.9.0;

contract Dobcha{
    address public owner; //public으로 선언하여 자동 getter 생성

    constructor() public{
        owner = msg.sender;
    }

    function getSomeValue() public pure returns (uint256 value){
        return 5;
    }
}