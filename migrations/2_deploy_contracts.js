var SecretBallot = artifacts.require("SecretBallot");
var Web3 = require("web3");

module.exports = function(deployer) {
    deployer.deploy(SecretBallot, [
        Web3.utils.asciiToHex('John'),
        Web3.utils.asciiToHex('Jeff'),
        Web3.utils.asciiToHex('Jim'),
    ])
};
