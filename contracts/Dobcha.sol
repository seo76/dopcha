// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.0 <0.9.0;

contract dobcha_book{
    // struct Fundraising{
    //     string donationName;//agencyadd
    //     address dobcha;
    //     uint currentFund;
    //     uint targetFund; //퍼센테이지= 현재/타켓
    // }
    
    // //필요한 인덱스값을 이쪽으로
    // struct Donation{
    //     address useradd;
    //     address agencyadd;
    //     uint donaAmount;
    //     uint256 startDate; //endDate=startDate+60일
    //     uint256 currentDate;
    //     Fundraising[] fundraising;
    // }
    
    // // //enum 써서 절차로 변경할 수 있음
    
    // // enum DonationStatus{
    // //     enterAmount, // 금액입력
    // //     userToDob, // 기부자->돕차
    // //     dobToAgnecy, // 돕차->기부단체
    // //     agencyToUser // 돕차->사용자
    // // }
    
   
    
    // Fundraising[] public fundraising;
    // Donation [] public donation;
    
    // mapping (address => Donation[1]) public user;
    // mapping (uint256 => Donation[3]) public amount;
    // mapping (address => Fundraising[2]) public dobcha;
    mapping (address => uint256) public coinBalance;
    
    // constructor() payable{
    //     user = payable(msg.sender);
    //     _amount = msg.value;
    
    // // function transfer(address _to, uint256 _amount) public{
    // //     require(coinBalance[msg.sender] >= _amount);
    // //     require(coinBalance[_to] + _amount >= coinBalance[_to]);
    // //     coinBalance[msg.sender] -= _amount;
    // //     coinBalance[_to] += _amount;
        
    //  }
    
    
   
        function transferFrom(address user, address dobcha, uint256 _amount) public payable {//returns (bool success) {
            
            //user.transfer(msg.sender);
            //require(dobcha != 0x0);
            //require(coinBalance[user] > _amount);
            user = msg.sender;
            _amount = msg.value;
            coinBalance[user] -= _amount;
            coinBalance[dobcha] += _amount;
            //coinBalance[user][msg.sender] -= _amount;
            //emit transfer(user, dobcha, _amount);
            //return true;
            
            //dobcha.transfer(msg.value);
        }
        
    
}

//  0xa8482E942C795F24705799Db1bE3f01eB56012a2
//  0xFa8Da515bfa74c60585C7602c020e606E772E6C0
   

    

    
