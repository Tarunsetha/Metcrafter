pragma solidity ^0.8.0;

contract Token {

    string public name;
    string public nickname;
    uint public supply;

    mapping(address => uint) public balances;

    constructor() {
        name = "bitcoin";
        nickname = "BTC";
        supply = 0;
    }

    function mint(address _address, uint _value) public {
        supply += _value;
        balances[_address] += _value;
    }

    function burn(address _address, uint _value) public {
        require(balances[_address] >= _value, "Insufficient balance");
        supply -= _value;
        balances[_address] -= _value;
    }
}