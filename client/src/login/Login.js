import React, { useState } from  'react'
import './Login.css';
import { Divider, Input, Button, Checkbox, message } from 'antd';
import { BankFilled ,LockFilled, PropertySafetyFilled} from '@ant-design/icons';
import logo from '../images/dobcha_logo.png'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router'
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import { loginAgency } from '../_actions/agency_actions';
import { set } from 'mongoose';
//import { Agency } from '../../../server/models/Agency';
import { loginUser } from '../_actions/user_actions';
import AgencyForm from '../registration/AgencyForm';
//import { response } from 'express';


const LoginForm = (history) => {
    const dispatch = useDispatch();
    //const history = useHistory();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (event) =>{
        setId(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event)=>{
        console.error();
        event.preventDefault();
        let body = {
            id:id,
            password:password,
        };
        dispatch(loginAgency(body)).then((response)=>{
            console.error();
            if (response.payload.success){
                history.push('../homepage/Agency')
                console.error();
            } else {
                console.error();
                alert('Error');
                message.error('등록되지 않은 사용자입니다.')
            }
        });
    }


    return(
        <div className ='container'>
            <div className='loginWrapper'>
                <div className='top'>
                    {/* 로고 버튼 클릭 시 홈 화면으로 이동 */}
                    <Button style={{border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                    onClick ={( )=> {AgencyForm.push('/')}}
                    /></Button>
                </div>
                <div className='middle'>
                    <div className='middle_left' onSubmit={onSubmitHandler}>
                        <div className="title"> 기관 회원</div>
                        <div className="aa">
                        <div className="aa1">{<BankFilled />}</div>
                        <div className="aa2">
                        <Input placeholder="ID" onChange={onIdHandler}
                        className='keyBox1'
                        maxLength='10'
                        style={{padding: 10}}
                        />
                        </div>
                        </div>
                        <div className="bb">
                        <div className="bb1">{<LockFilled />}</div>
                        <div className="bb2">
                        <Input placeholder="PW" onChange={onPasswordHandler}
                        />
                        </div>
                        </div>

                        <div className="cc">   
                        
                            <a onClick={() => {AgencyForm.push('/login/Finding_id')}} style={{color:'#000000'}}>
                                ID/PW 찾기
                            </a>
                        </div>
                         
                        <Button type='primary' 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginTop:'10px', marginLeft: '20px'
                            , border:'none',borderRadius:'5px'}}
                            onClick={onSubmitHandler}> 로그인</Button>

                        <Button type='primary' onClick={() => {
                            AgencyForm.push('/registration/agency')}} 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center', marginLeft: '20px',marginTop:'8px'
                            , border:'none',borderRadius:'5px'}}> 기관 회원가입</Button>
                    
                        {/* 기관 버튼부분 링크 바꾸기!!
                        로그인: 기관 로그인 시 나오는 페이지(Agency)
                        회원가입: 기관 회원가입 페이지 (Agency_R) */}
                    
                    </div>
                
                    <div className = 'middle_right'>
                    <div className='middle_left'>
                        <div className="title1"> 개인 회원</div>
                        <div className="aaa">
                        <div className="aaa1">{<BankFilled />}</div>
                        <div className="aaa2">
                        <Input placeholder="ID" 
                        onChange={onIdHandler}
                        className='keyBox'
                        maxLength='10'
                        style={{padding: 10}}
                        />
                        </div>
                        </div>
                        <div className="bbb">
                        <div className="bbb1">{<LockFilled />}</div>
                        <div className="bbb2">
                        <Input placeholder="PW"
                        onChange= {onPasswordHandler}
                        />
                        </div>
                        </div>
                        <div className="ccc">
                            <a onClick={() => {AgencyForm.push('/login/Finding_id')}} style={{color:'#000000'}}>
                                ID/PW 찾기
                            </a>
                        </div>
                        
                        <Button type='primary'
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginTop:'10px', marginLeft: '20px'
                            , border:'none',borderRadius:'5px'}}> 로그인</Button>

                        <Button type='primary' onClick={() => {
                            AgencyForm.push('/registration/individual')}} 
                            style={{display:'flex',width: '300px', height: 'auto', justifyContent: 'center',marginTop:'8px', marginLeft: '20px'
                            , border:'none',borderRadius:'5px'}}> 개인 회원가입</Button>
                    
                        {/* 개인 버튼부분 링크 바꾸기!!
                        로그인: 개인 로그인 시 나오는 페이지(Individual)
                        회원가입: 개인 회원가입 페이지 (Individual_R) */}
                            
                    </div>

                </div>

                </div>
                <div className="bottom">
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 소개</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>돕차 이용 약관</a>
                    <Divider type="vertical"/>
                    <a herf = "#" style={{color:'#8c8c8c'}}>개인정보 처리 방침 </a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Dobcha ©2021
                    </div>
            </div>
        
        </div>
    )
}




export default withRouter (LoginForm);