import React,{useEffect,useState} from "react";
import { Progress, Col, Row } from "antd";
import "./DonationCard.css";
import axios from "axios";

const DonationCard = ({  type, history }) => {

  const [List, setList] = useState([])

  useEffect(() => {
    axios.post('/api/donate/donateList')
      .then(response => {
        if(response.data.success) {
          console.log("정보", response.data)
          setList(response.data.donationList)
        }else{
          alert("리스트가져오기 실패")
        }
      })
  }, [])

  const renderList = List.map((donationList, index) =>{
    console.log("정보", donationList)
    return (
      <Col  key={index}>
      <a className="donation-card"
      href={type === "closed" ? `/campaign/closed/${donationList._id}` : `/campaign/open/${donationList._id}`} 
      >
        
        <img
          className="donation-card__thumbnail"
          alt="example"
          src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201808/29/6ebd8751-bf4a-4e5e-9fab-a2076668fc69.jpg"
        />

        <div className="donation-card__contents" >
          <div className="donation-card__title">{donationList.title}</div>
          <div className="donation-card__group">{donationList.company_name}</div>
          
          <div className="donation-card__progress">
            <Progress percent={30} showInfo={false} />
            <div className="donation-card__progress__info">
              <div>30%</div>
              <div>{donationList.target_fundraising}원</div> 
            </div>
          </div>
        </div>
      </a>
      </Col>
    )
  })

  return (
    <Row gutter={16, 16}>
    {renderList}
    </Row>

    
  );
};

export default DonationCard;
