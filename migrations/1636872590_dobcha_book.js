var Dobcha_book = artifacts.require("Dobcha_book");

module.exports = function(deployer) {
  let ownerAddress = web3.eth.accounts[0];
  deployer.deploy(Dobcha_book, ownerAddress);
};