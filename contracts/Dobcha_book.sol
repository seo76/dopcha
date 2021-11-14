pragma solidity  >=0.4.1 <0.9.0;
//pragma solidity  ^0.4.21;


contract Dobcha_book {

    address public owner; //기부자 계좌 주소 선언
    // address public D_account; //돕차 계좌 주소
    // address public A_account; // 기부단체 계좌 주소
    mapping(address => uint256) public wallet;

    event Transfer(address indexed owner, address indexed D_account, uint256 value);
    event Transfer2(address indexed D_account, address indexed A_account, uint256 value);

  

    // constructor () public{
    //     owner = msg.sender;
    //     // D_account = msg.sender;
    // }
    modifier cost(uint _amount){
        require(msg.value >= _amount, "Please send at least 1 ETH.");
        _;
    }

    function transfer(address D_account, uint256 _amount) payable cost(1 ether) public {
        msg.sender == owner;
        if (wallet[msg.sender] < _amount) revert();
        else{
            wallet[msg.sender] -= _amount; //기부자 계좌는 보낸 금액만큼 차감됨
            wallet[D_account] += _amount; //돕차계좌는 받은 금액만큼 추가됨
            emit Transfer(msg.sender, D_account, _amount);//기부자가 돕차계좌에 보낸 금액이 기록됨
        }    
    }//기부자 => 돕차


    // 시간 설정 하기....


    // function transfer2(address A_account1, uint256 _amount)  public {
    //     msg.sender == D_account;
    //     if (wallet[msg.sender] < _amount) revert();
    //     else{
    //         wallet[msg.sender] -= _amount; //돕차 계좌는 보낸 금액만큼 차감됨
    //         wallet[A_account1] += _amount; //기부단체 계좌는 받은 금액만큼 추가됨
    //         emit Transfer2(msg.sender, A_account1, _amount);//돕차계좌에서 기부단체 계좌에 보낸 금액이 기록됨
    //     }    
    // }//돕차 => 기부 단체


}
   

    

    





// }