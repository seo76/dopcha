import React from  'react'
import './Main.css';
import { Divider,  Button, Carousel, Menu, Dropdown} from 'antd';
import logo from '../images/dobcha_logo.png';
import img_banner1 from '../images/img_banner1.png';
import img_banner2 from '../images/img_banner2.png';
import img_donation from '../images/img_donation.png';
import img_volunteer from '../images/img_volunteer.png';
import axios from 'axios';
import DonationCard from "./DonationCard";


const Main=({history}) => {
  
    return(
        <div className='main_frame'>
            <div className='main_top'>
                <Button style={{ border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                            onClick ={( )=> {history.push('/')}}
                            /></Button>
                <div className='main_click'>
                <a onClick={() => {history.push('./homepage/Doing')}} 
                 style={{padding:'10px',marginRight:'50px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 진행중인 기부  {/* 진행중인 기부 페이지로 경로 바꾸기*/} </a>

                 
                <a onClick={() => {history.push('/homepage/Done')}} 
                 style={{padding:'10px', marginRight:'20px',marginLeft:'20px',
                     color:'#000000' , fontSize:'17px', fontWeight:'bold' 
                }}> 마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/} </a>
                </div>

                <div className='main_btn'>
                    <Button block 
                    style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginTop:'10px', marginRight:'15px'}}
                    onClick={()=> {history.push('/login/Login')}}
                    >로그인</Button>
                    <Button block 
                    style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginTop:'10px'}}
                    onClick={()=> {history.push('/registration/Registration')}}
                    >회원가입 </Button>{/* 회원가입 페이지로 경로 바꾸기*/}
                </div>
            </div>
            <Divider/>


            
            <div className='main_middle'>
                <div className='main_banner'>
                            <Carousel autoplay>
                <div>
                <img src={img_banner1} alt="img_banner1"/>{/* 경로 추가하기 누르면 해당 기부 페이지로 이동바꾸기*/}
                </div>
                <div>
                <img src={img_banner2} alt="img_banner2"/>{/* 경로 추가하기 누르면 해당 기부 페이지로 이동바꾸기*/}
                </div>
                
                </Carousel>
                </div>


                <div className='main_list_sort'>
                    <div className='sort'>
                        <div className='main_donation'>
                            <Button style={{ border:'none'}}
                                ><img src={img_donation} alt ="btn_donation" 
                                        onClick ={( )=> {history.push('../homepage/Doing')}} /* 기부메뉴(Donation_Menu) 경로 바꾸기*/
                                        /></Button>
                        </div>
                        {/** 나중에 main_donation, main_volunteer 부분 css 바꾸기!! 등록된 종류가 늘어나면...결론: 백엔드와 같이 상의 */}

                        <div className='main_volunteer'>
                        <Button style={{ border:'none'}}
                            ><img src={img_volunteer} alt ="btn_volunteer" 
                                    onClick ={( )=> {history.push('../homepage/Volunteer')}}
                                    /></Button>
                        </div>
                    </div>
                    <div className='main_list'>
                        <DonationCard/>
                    </div>
                </div>
                
            </div>

            
            
            <div className='main_bottom'>
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



export default Main;