const contract_json = require('./build/contracts/HelloWorld.json')
const infura_key = require('./secrets.json').infura_rinkeby
const Web3 = require('web3')
const web3 = new Web3(infura_key)

const contract_addr_hello = contract_json.networks[4].address // Rinkeby ID : 4
const test_account = '0xc607C1950f8dE518F2626A93f22F12AFA59b2B69'
const abi = contract_json.abi

// Check connection:
// console.log(web3)

// Read balacnce of a wallet on ethereum:
// web3.eth.getBalance(test_account, function(err, result) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(web3.utils.fromWei(result, "ether") + " ETH")
//     }
//   })

// or:
web3.eth.getBalance(test_account, (err, result) => {console.log(web3.utils.fromWei(result, "ether"))})


// Create contract instance:
const contract = new web3.eth.Contract(abi, contract_addr_hello)
console.log('Contract addr: ', contract_addr_hello)

// Check contract instance:
// console.log(contract)

// Try the function of sayHello(), by passing a callback function:
// console.log(contract.methods.sayHello().call( (err, result) => {console.log(result)} ))
// or just:
// contract.methods.sayHello().call( (err, result) => {console.log(result)} )
// contract.methods.getMessage().call( (err, result) => {console.log(result)} )

// contract.methods.setMessage("set 123", {value: web3.utils.toWei("0.1", "ether")}).call( (err, result) => {console.log(err)} )
contract.methods.setMessage("set 123").call( {from: test_account, value: web3.utils.toWei("0.1", "ether")}, (err, result)=> {console.log(err)} )

// contract.methods.getMessage().call( (err, result) => {console.log(result)} )
