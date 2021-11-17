import './Agency_Registering.css';
import React, { useState,useRef,useMemo } from 'react';
import { Divider, DatePicker ,Button, InputNumber, Space,Input,Modal, Drawer, Upload, message} from 'antd';
import logo from '../images/dobcha_logo.png';
import { BankFilled,UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import Editor from './EditorComponent';
import Editor2 from './EditorComponent2';
import 'react-quill/dist/quill.snow.css';
import axios, { Axios } from 'axios'
import {useDispatch} from 'react-redux'
import { createdonate } from '../_actions/donate_action';
import FileUpload from '../components/utils/FileUpload'

const Agency_Registering=({history}) =>{
    const [desc, setDesc] = useState('');
    function onEditorChange(value) {
        setDesc(value)
    }

    const [desc2, setDesc2] = useState('');
    function onEditorChange2(value) {
        setDesc2(value)
    }


    const { RangePicker } = DatePicker;

    const {TextArea} = Input;

    function onChange(value) {
        console.log('changed', value);
        //setTargetFundraising(value)
      }
    
    
      const [Images, setImages] = useState([])
      const updateImages = (newImages) => {
        setImages(newImages)
    }
      
    const props = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log('업로드 내용', info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed. 실패`);
          }
        }
    };


    // 개인정보 이미지
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

    const dispatch = useDispatch();

    const [Title, setTitle] = useState("");
    const [TargetFundraising, setTargetFundraising] = useState("")
    
    const onTitleHandler = (event) =>{
      setTitle(event.currentTarget.value)
    }

    const [dates, setDates] = useState([]);
    const [hackValue, setHackValue] = useState();
    const [value, setValue] = useState();
    const disabledDate = current => {
      if (!dates || dates.length === 0) {
        return false;
      }
      const tooLate = dates[0] && current.diff(dates[0], 'days') > 60;
      const tooEarly = dates[1] && dates[1].diff(current, 'days') > 60;
      return tooEarly || tooLate;
    };

    const onOpenChange = open => {
      if (open) {
        setHackValue([]);
        setDates([]);
      } else {
        setHackValue(undefined);
      }
      console.log('날짜', value)
      console.log('anj', hackValue)
    };


    const onSubmitHandler = (event) =>{
      event.preventDefault();

      let body ={
        title: Title,
        company_name: agencyname, 
        content: desc,
        usage_plan: desc2,
        target_fundraising: TargetFundraising,
        Date: value,
        image: Images
      }

      dispatch(createdonate(body))
      .then(response => {
        if(response.payload.success){
         history.push('/homepage/Doing')
         alert('기부내역이 정상적으로 저장되었습니다.')
        } else{
          alert('기부가 저장되지 않았습니다.')
        }
      })

      
    }

    return(
        <div className='AR_frame'>
            <div className="registering_top">
                <Button style={{ border:'none'}}
                    ><img src={logo} alt ="dobcha_logo" 
                            onClick ={( )=> {history.push('/hompage/Agency')}}
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
                        onClick ={( )=> {history.push('/hompage/Agency_registering')}} 
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



              
            


            <div className="registering_middle">
                <div classname="ar_text" style={{marginLeft:'75px',fontSize:'17px',marginBottom:'5px'}}>글 등록</div>
                <div className="table_box">
                <div className="table_boxT">
                <div className='table_BoxNtext' style={{alignContent:'center'}}>
                        제목
                        </div>
                        <Input placeholder=" " value={Title} onChange={onTitleHandler}
                        style={{width:'500px', height:'30px',marginLeft:'15px'}
                        }
                        />
                </div>
                <div className="table_boxW">
                <div className='table_BoxWtext' style={{alignContent:'center', marginRight:'15px', marginLeft:'34px'}}>
                        내용
                        </div>
                        <Editor 
                        value={desc} onChange={onEditorChange} />
                        
                </div>
                <div className="table_boxUP">
                <div className='table_BoxUPtext' style={{alignContent:'center',marginRight:'15px', marginLeft:'9px'}}>
                        사용계획
                        </div>
                        <Editor2 
                        value={desc2} onChange={onEditorChange2} />
                        
                </div>
                <div className="table_boxM">
                <div className='table_BoxUPtext' styreact InputNumber={{alignContent:'center'}}>
                        목표금액
                        </div>
                        <InputNumber
                            style={{width:'265px', height:'33px',marginLeft:'15px',marginRight:'261px'}}      
                            value={TargetFundraising}
                            defaultValue={1000000}
                            formatter={value => `₩ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={setTargetFundraising}
                            min={0}
                            max={100000000} 
                        />
                </div>
                <div className="table_boxD">
                <div className='table_BoxUPtext' style={{alignContent:'center'}}>
                        모금기간
                        </div>
                        <Space size={12} style={{marginLeft:'15px',marginRight:'260px'}}>
                        <RangePicker
                          value={hackValue || value}
                          disabledDate={disabledDate}
                          onCalendarChange={val => setDates(val)}
                          onChange={val => setValue(val)}
                          onOpenChange={onOpenChange}
                        />
                        </Space>
                </div>




                <div className="regist_btn">
                <FileUpload refreshFunction={updateImages}/>
                
                    
                <Button block   //onSubmit={onSubmitHandler}
                    style={{display:'flex',width: '100px', height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginTop:'20px'}}
                    //onClick={()=> {history.push('/homepage/Doing')}} 
                    onClick =  {onSubmitHandler}
                    >등록</Button> {/* 진행중인 기부로 경로 바꾸기 */}
                    </div>

                </div>



            </div>


            <div className="registering_bottom">
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


export default Agency_Registering;