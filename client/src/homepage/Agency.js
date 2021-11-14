
import './Agency.css';
import React, { useState } from 'react';
import { Divider,  Button, Carousel, Menu, Dropdown,Modal, Drawer, Upload, message} from 'antd';
import logo from '../images/dobcha_logo.png';
import img_banner1 from '../images/img_banner1.png';
import img_banner2 from '../images/img_banner2.png';
import img_donation from '../images/img_donation.png';
import img_volunteer from '../images/img_volunteer.png';
import { BankFilled } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import axios from 'axios';






const Agency=({history}) => {
   
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
    

    const agencyname = '기부단체'
    //임의로 설정했습니다. 나중에 db에서 가져와주세요~~

    const [isModal, setIsModal] = React.useState(false);

    

      React.useEffect(() => {
        alert(`${agencyname}님 안녕하세요`)
    },[])
      
  
    return(
        <div className='main_frame'>
            <div className='main_top'>
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

                <div className='main_btn'>
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
            




export default Agency;