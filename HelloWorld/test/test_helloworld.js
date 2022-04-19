const Helloworld = artifacts.require('HelloWorld')

contract("HelloWorld", account => {
    it("constructor", async () => {
        let instance = await Helloworld.deployed();

        console.log("= = = Start testing = = =");
        
        let message = await instance.sayHello();
        console.log('sayHello() : ', message);

        message = await instance.printMessage('print 123');
        console.log('printMessage() : ', message);
        
        message = await instance.setMessage("set to 123", {value: web3.utils.toWei("0.1", "ether")});
        console.log('setMessage() : ', message);

        message = await instance.getMessage();
        console.log('getMessage() : ', message);

    })
})

// =======================
// Try this in Truffle cli
// =======================

// let instance = await HelloWorld.deployed()

// instance.sayHello()
// instance.getMessage()
// instance.setMessage("new message", {value: web3.utils.toWei("1", "ether")})
