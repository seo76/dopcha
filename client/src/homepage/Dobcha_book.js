import Web3 from 'web3';
import  './Sc2';


const Dobcha_book=({history}) => {



//const web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "dobcha",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "donation",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "Aaccount",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_Aaccount",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

var DobchaAbi = web3.eth.contract(abi);
var DobchaInstance = DobchaAbi.at("0xBE3e2e2e7C8efaB58100b896B8D13eD7c40fD6e8");

var accounts = web3.eth.accounts;

// function refereshAccountsTable(){
//     var innerHtml = "<tr><td>Account</td><td>Balance</td></tr>";

//     for (var i=0; i < accounts.length; i++) {
//         var account = accounts[i];
//         var balance = DobchaInstance.coinBalance(account);
//         innerHtml = innerHtml + "<tr><td>" + account + "</td><td>" + balance + "</td></tr>";
//     }
//     $("#accountsBalanceTable").html(innerHtml);
// }
//accountsBalanceTable
function refereshAccountsTable(){
    var innertable = "Account";
    for (var i=0; i<accounts.length; i++){
        var account = accounts[i];
        innertable = innertable + account;
        
    }
    document.getElementById('accountsBalanceTable');
  
}

function transferCoins(){
    var from = document.getElementById('owner').value=web3.eth.accounts[0];//기부자 계정을 첫번째 계정으로 설정
    var to = document.getElementById('Aaccount').value=web3.eth.accounts[9];//기부 단체 계정을 첫번째 계정으로 설정
    var f_donation = document.getElementById('d_amount').value();
    DobchaInstance.transfer(to,f_donation,{owner:from, gas:200000},
        function(e,result){
            if(!e)
            refereshAccountsTable();
            else
                console.error(e);
        }
        );
        document.ready(transferCoins());
}
// document.ready(transferCoins(){
    
// };



}

export default Dobcha_book;