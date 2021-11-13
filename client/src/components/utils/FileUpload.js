import React, { useState } from 'react'
import axios from 'axios';
import {Button, Upload} from 'antd'
import {UploadOutlined } from '@ant-design/icons'

function FileUpload(props) {
    const [Images, setImages] = useState([])

    const onChangeHandler = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])

        axios.post('/api/donate/image', formData, config)
            .then(response => {
                if (response.data.success) {
                    setImages([...Images, response.data.filePath])
                    props.refreshFunction([...Images, response.data.filePath])


                } else {
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }
    return(
        <div>
            <Upload beforeUpload={onChangeHandler} action='//jsonplaceholder.typicode.com/posts/' listType= 'picture'>
                    <Button style={{display:'flex',width: '120px', marginLeft:'28px',height: '30px', justifyContent: 'center'
                    ,borderRadius:'5px', marginRight:'10px', marginTop:'20px'}} icon={<UploadOutlined style={{fontSize:"15px"
                    }}/>}> File Upload
                        </Button>
                </Upload>
        </div>
    )
}

export default FileUpload
