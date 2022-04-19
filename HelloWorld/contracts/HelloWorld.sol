// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <= 0.8.10;

contract HelloWorld {
  string public message;
  
  constructor (string memory _message){
    message = _message;
  }

  function sayHello() public view returns(string memory){
    return 'Hello world!';
  }

  function printMessage(string memory _message) public view returns (string memory){
    return _message;
  }

  function setMessage(string memory _message) public payable {
    // Pay me! 0.01 ETH!
    require(msg.value >= 0.01 ether);
    message = _message;
  }

  function getMessage() public view returns (string memory){
    return message;
  }

}
