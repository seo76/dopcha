import React, { useState } from 'react';
import './Sc2.css';
import { Divider,  Button, Carousel, Menu, Dropdown,Modal, Drawer, Upload, message} from 'antd';
import logo from '../images/dobcha_logo.png';
import Web3 from 'web3';
import { BankFilled ,UserOutlined} from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import './Dobcha_book.js';
import Dobcha_book from './Dobcha_book.js';



const Sc2=({history}) => {
    // var web3 = require('web3');
    // this.state ={
    //     DobchaInstance: Dobcha_book.at('0x4aec828df82E632Caef44829AE71f3244bf84611')
    // };

    // const Dobcha_book = window.web3.eht.contract
    // ([
    //     {
    //         "constant": false,
    //         "inputs": [],
    //         "name": "dobcha",
    //         "outputs": [],
    //         "payable": false,
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "constant": true,
    //         "inputs": [],
    //         "name": "owner",
    //         "outputs": [
    //             {
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "payable": false,
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "constant": false,
    //         "inputs": [],
    //         "name": "donation",
    //         "outputs": [],
    //         "payable": true,
    //         "stateMutability": "payable",
    //         "type": "function"
    //     },
    //     {
    //         "constant": true,
    //         "inputs": [],
    //         "name": "Aaccount",
    //         "outputs": [
    //             {
    //                 "name": "",
    //                 "type": "address"
    //             }
    //         ],
    //         "payable": false,
    //         "stateMutability": "view",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [
    //             {
    //                 "name": "_owner",
    //                 "type": "address"
    //             },
    //             {
    //                 "name": "_Aaccount",
    //                 "type": "address"
    //             }
    //         ],
    //         "payable": false,
    //         "stateMutability": "nonpayable",
    //         "type": "constructor"
    //     }
    // ]
    // );

    // var from = React.createRef('owner')

    // function transferCoins(metaAddress){
    //     const {dobcha} = this.state.DobchaInstance;
    //     dobcha(
    //         metaAddress,{
    //         //from : window.web3.eth.accounts[0],
    //         from : React.createRef('owner'),
    //         to : window.web3.eth.accounts[9],
        
    //         },
    //     );
    // };



//var contractInstance = new web3.eth.Contract(abi, '0xe1623AAf57fCbe260F022404C730ae32aebe39F6');

//var DobchaAbi = new web3.eth.Contract(abi);
//var DobchaInstance = DobchaAbi.at("0xBE3e2e2e7C8efaB58100b896B8D13eD7c40fD6e8");
//var accounts = web3.eth.accounts;

// function transferCoins(){
//     var from = React.createRef('owner');//.web3.eth.accounts[0];//기부자 계정을 첫번째 계정으로 설정
//     var to = React.createRef('Aaccount');
//     var f_donation = React.createRef('d_amount');
//     //var to = document.getElementById('Aaccount').value=web3.eth.accounts[9];//기부 단체 계정을 첫번째 계정으로 설정
//     //var f_donation = document.getElementById('d_amount');
//     //const btn = document.getElementById('donation');
//     DobchaInstance.dobcha(to, f_donation ,{owner:from, gas:200000});
            
// }

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

// function refereshAccountsTable(){
//     var innertable = "Account";
//     for (var i=0; i<accounts.length; i++){
//         var account = accounts[i];
//         innertable = innertable + account;
        
//     }
//     document.getElementById('accountsBalanceTable');
  
// }

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

var DobchaAbi = [
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

var DobchaInstance = new web3.eth.Contract(DobchaAbi,'0xCB962e9c77806B74efC44dA8c4484483652e7927');
var exports =  {};

exports.owner = function(address){
    return DobchaInstance.owner(address);
}// 기부자 주소 조회

exports.Agency = function(address){
    return DobchaInstance.Aaccount(address);
}// 기관단체 주소 조회




exports.transferCoins= function(from,to,amount,callback){
    
    web3.eth.transferCoins({
        from: from.React.createRef('owner').window.web3.eth.accounts[0],
        to: to.React.createRef('Aaccount').window.web3.eth.accounts[9],
        amount: React.createRef('d_amount').web3.toWei(amount,'ether'),
        gas:100000}, function(err,hash){
            if(err){
                return callback(err,"");
            }else{
                return callback(null,hash);
            }
        });
};








    const getBase64=(img, callback) =>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      const beforeUpload=(file) =>{
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }
      
     

        const handleChange = (info) =>{ 
           
            if (info.file.status === 'uploading') {
              this.setState({ loading: true });
              return;
            }
            if (info.file.status === 'done') {

              getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                  imageUrl,
                  loading: false,
                }),
              );
            
        }
          };
          
    

        const [visible, setVisible] = useState(false);
        const showDrawer = () => {
          setVisible(true);
        };
        const onClose = () => {
          setVisible(false);
        };
    

    const agencyname = '가나다라'
    //임의로 설정했습니다. 나중에 db에서 가져와주세요~~

    const [isModal, setIsModal] = React.useState(false);
    
    return(
        <div className="Sc_frame">
            <div className='Sc_top'>
                <Button style={{ border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                            onClick ={( )=> {history.push('/homepage/Agency')}}
                            /></Button>
                <div className='main_click'>
                
                <a onClick={() => {history.push('/homepage/Doing')}} 
                 style={{padding:'10px',marginRight:'50px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 진행중인 기부  {/* 진행중인 기부 페이지로 경로 바꾸기*/} </a>
                 
                <a onClick={() => {history.push('/homepage/Done')}} 
                 style={{padding:'10px', marginRight:'20px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/} </a>
                </div>

                <div className='Sc_btn'>
                    <div className='agency_icon'  style={{marginTop:'12px', marginRight:'30px'}}>
                        {<BankFilled onClick={showDrawer}
                    style={{fontSize:'20px'}}/>
                    }  
                    
                    <Drawer title="Mypage" placement="right" onClose={onClose} visible={visible}
                    style={{fontWeight:'bold'}} 
                    >


                    <div style={{display:'flex', justifyContent:'center', marginLeft:'50px'}}>
                    
                        
                       <ImgCrop rotate>
                        <Upload {...handleChange}
                        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
       
       
         >
                     <BankFilled style={{fontSize:'40px', width:'100%'}}/> 
                        </Upload>
                        </ImgCrop>

                    </div>

                    

                        <div style={{display:'flex', justifyContent:'center'}}>
                        <text style={{color: 'black',fontSize:'15px',  fontWeight:'bold', marginTop:'10px'}}>
                    {`${agencyname} 님`}</text>
                    </div>

                        <div style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                        <Button  type='primary' style={{ border:'none', borderRadius:'10px'}}
                        onClick ={( )=> {history.push('/homepage/Agency_Registering')}} 
                        >글 등록하기</Button> </div>
                    </Drawer>



                    &nbsp;&nbsp;
                    <text style={{color: 'black',fontSize:'17px',  fontWeight:'bold'}}>
                    {`${agencyname} 님`}
                </text>

                    </div> 
                    <div style={{marginTop:'12px'}}>
                    <a onClick={() => setIsModal(true)} 
                    style={{fontSize:'17px', fontWeight:'bold'}}>&nbsp;&nbsp; 로그아웃</a>
                    </div>
                    <Modal
                visible={isModal}
                onCancel={() => setIsModal(false)}
                onOk={() => {
                    setIsModal(false)
                    history.push('/')
                }}
                title={'로그아웃'}
            >
                <div
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%'}}
                >
                    <h2>로그아웃을 하시겠습니까?</h2>
                </div>
            </Modal>
                </div>



            </div>
            <Divider/>

            <div className="Sc_middle">
                <div className="Sc_container">
                    
                    <div className="transferCoins">
                        <div style={{display:'flex', flexDirection:'row', marginTop:'20px'}}>
                            From:  &nbsp;
                            <input type="text" className="owner" />
                        </div>
                        <div style={{display:'flex', flexDirection:'row',marginTop:'10px'}}>
                            To: &nbsp;
                            <input type="text" className = "Aaccount" style={{marginLeft:'20px'}}
                            />
                        </div>
                        <div style={{display:'flex', flexDirection:'row', marginTop:'10px'}}>
                            금액: &nbsp;
                            <input type="text" className = "d_amount"  style={{marginLeft:'12px'}}/>

                            <Button type='bold' className = "donation" onClick="transferCoins"
                        style={{display:'flex',width: '100px', height: '30px', alignItems:'center',
                        justifyContent:'center', marginLeft:'15px'}}
                             > 기부하기 </Button>
                        </div>
                        <div style={{display:'flex', flexDirection:'row',marginLeft:'45px'}}>
                        <Button type='primary' onClick ={( )=> {history.push('/campaign/:type/:id')}}
                        style={{display:'flex',width: '150px', marginTop:'20px',height: '30px', alignItems:'center',marginLeft:'20px',
                        justifyContent:'center',borderRadius:'5px'}}
                             > 기부페이지로 돌아가기 </Button>     
                            
                        </div>
                    </div>

                </div>
            </div>





            <div className="Sc_bottom">
            <a herf = "#" style={{color:'#8c8c8c'}}>돕차 소개</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 이용 약관</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>개인정보 처리 방침 </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  Dobcha ©2021
            </div>
        </div>
    )
}

export default Sc2;