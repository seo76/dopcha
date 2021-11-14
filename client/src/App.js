import './App.css';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import Login from './login/Login';
import Main from './homepage/Main';
import Agency from './homepage/Agency';
import Agency_Registering from './homepage/Agency_Registering';
import Individual from './homepage/Individual';
import Individual_Detail from './homepage/Individual_Detail';
import Volunteer from './homepage/Volunteer';
import Finding_id from './login/Finding_id';
import Finding_id2 from './login/Finding_id2';
import Finding_pw from './login/Finding_pw';
import Finding_pw2 from './login/Finding_pw2';

import 'antd/dist/antd.css';
import React ,{useEffect,useState} from 'react';
import axios from 'axios';

import Doing from "./homepage/Doing";
import Done from "./homepage/Done";
import CampaignDetail from "./homepage/CampaignDetail";
import Registration from "./registration/Registration";
import RegistrationForm from "./registration/RegistrationForm";
import RegistrationDone from "./registration/RegistrationDone";
// import index2 from "./index2"
// import MyComponent from "./homepage/MyComponent"
import Sc from "./homepage/Sc"
import Sc2 from "./homepage/Sc2"

import Web3 from 'web3';



const App = () => {
  // const ethereum = window.ethereum
  // const[addr,setAddr] = useState('')

  // if(ethereum){
  //   ethereum.on('accountsChanged', function(accounts){
  //     setAddr(accounts[0])
  //   })

  // }
 
  


  const callApi = async()=>{
    const reponse = await fetch('/api/main');
    const body = await reponse.json();
    if (reponse.status !==200) throw Error(body.message);

    return body;
    //axios.get("/api").then((res)=>console.log(res.data.test));
  };

// const App = () => {
//   const callApi = async()=>{
//     axios.get("/").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Agency").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Agency_Registering").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Individual").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Individual_Detail").then((res)=>console.log(res.data.test));
//     axios.get("/login/Login").then((res)=>console.log(res.data.test));
//     axios.get("/login/Finding_id").then((res)=>console.log(res.data.test));
//     axios.get("/login/Finding_id2").then((res)=>console.log(res.data.test));
//     axios.get("/login/Finding_pw").then((res)=>console.log(res.data.test));
//     axios.get("/login/Finding_pw2").then((res)=>console.log(res.data.test));
//     axios.get("/registration/Registration").then((res)=>console.log(res.data.test));
//     axios.get("/registration/AgencyForm").then((res)=>console.log(res.data.test));
//     axios.get("/registration/IndividualForm").then((res)=>console.log(res.data.test));
//     axios.get("/registration/RegistrationDone").then((res)=>console.log(res.data.test));

//     axios.get("/homepage/Doing").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/Done").then((res)=>console.log(res.data.test));
//     axios.get("/homepage/CampaignDetail").then((res)=>console.log(res.data.test));



//   };

  useEffect(()=>{
    callApi();
  }, []);

  return(
  
    <>
   
    <Router>

      <Route path ='/' exact component = {Main}/>
      <Route path ='/homepage/Agency' exact component = {Agency}/>
     <Route path='/homepage/Agency_Registering' exact component={Agency_Registering}/>
      <Route path ='/homepage/Individual' exact component = {Individual}/>
      <Route path ='/homepage/Individual_Detail' exact component = {Individual_Detail}/>
      <Route path ='/homepage/Volunteer' exact component = {Volunteer}/>
      <Route path ='/login/Login' exact component = {Login}/>
      <Route path ='/login/Finding_id' exact component = {Finding_id}/>
      <Route path ='/login/Finding_id2' exact component = {Finding_id2}/>
      <Route path='/login/Finding_pw' exact component = {Finding_pw}/>
      <Route path='/login/Finding_pw2' exact component = {Finding_pw2}/>
      <Route path='/registration/Registration' exact component = {Registration} />
      <Route path="/homepage/Doing" exact component={Doing} />
      <Route path="/homepage/Done" exact component={Done} />
      <Route path="/campaign/:type/:id" exact component={CampaignDetail} />
      <Route path="/homepage/Sc" exact component={Sc} />
      <Route path="/homepage/Sc2" exact component={Sc2} />

      {/* <Route path="./index2" exact component={index2}/>
      <Route path="homepage/MyComponent" exact component={MyComponent}/> */}
       {/* 기관, 개인 회원가입 모두 하나의 컴포넌트에서 처리합니다. 대신 URL의 type이라는 이름의 props로 회원가입 유형을 구분합니다. */}
       <Route path="/registration/:type" exact component={RegistrationForm} />
        {/* 위와 동일합니다 */}
        <Route
          path="/registration/done/:type"
          exact
          component={RegistrationDone} />

    </Router>
    </>
  )
}


export default App;