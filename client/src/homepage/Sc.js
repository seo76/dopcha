
import "./CampaignDetail.css";
import logo from "../images/dobcha_logo.png";
import React, {Component} from 'react';
import { Link,BrowserRouter as Router, Route }  from 'react-router-dom';
import { Button} from "antd";
import Web3 from 'web3';
import CampaignDetail from "./CampaignDetail";





class Sc extends Component {

  async componentDidMount() {
    await this.initWeb3();
    console.log(this.web3);
  let accounts = await this.web3.eth.getAccounts();
  console.log(accounts);
  }

  initWeb3 = async () => {
    if (window.ethereum) {
      console.log('Recent mode')
      this.web3 = new Web3(window.ethereum);
      try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          // this.web3.eth.sendTransaction({/* ... */});
      } catch (error) {
          // User denied account access...
          console.log(`User denied account access error : ${error}`)
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      console.log('legacy mode')
      this.web3 = new Web3(Web3.currentProvider);
      // Acccounts always exposed
      // web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  render() {
    return (
      <>
      <p style={{display:'flex', justifyContent:'center',fontSize:'15px',fontWeight:'bold',marginTop:'300px'}}
      >Meta Mask와 연결 후 버튼을 눌러주세요.</p>
      <Link style={{display:'flex',justifyContent:'center'}}
      to = "/campaign/:type/:id">
      <Button type='primary'
      style={{display:'flex',width: '150px', height: '40px', alignItems:'center',justifyContent:'center',borderRadius:'5px'}}
      > 기부페이지로 돌아가기 </Button>
      </Link>

      <Router>
      <Route path="/campaign/:type/:id" exact component={CampaignDetail} />
      </Router>
      </>
    );
  }
}
// index address challenge answer pot status answerBlockNumber
export default Sc;
