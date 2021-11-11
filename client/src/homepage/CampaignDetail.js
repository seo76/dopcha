import React,{ useState,Component } from "react";
import { Divider, Button, Carousel, Progress } from "antd";
import logo from "../images/dobcha_logo.png";
import "./CampaignDetail.css";
import axios from "axios";


// import { MetaMaskButton } from "rimble-ui";
// import Web3 from "web3";


// import Modal from "react-bootstrap/Modal";
// import MyComponent from "./MyComponent";

// var detect = require("detect-browser").detect;
// var isMobile;
// var path = window.location.href;



const CampaignDetail = ({

  history,
  match: {
    params: { type, id },
  },
}) => {
  const [tab, setTab] = useState(1);
  


  // const connectWallet = async () => {
  //   // 사용자의 브라우저에 Metamask가 설치되어 있는지 확인
  //   if(window.ethereum) {
  //    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  //    const chainId = await window.ethereum.request({ method: 'eth_chainId'});

  //     // Check if user is connected to Mainnet
  //   if(chainId != '0x1') {
  //     alert("Please connect to Mainnet");
  //   } else {
  //     let wallet = accounts[0];
  //     setWalletAddress(wallet);
  //   }


  //   } else {
  //     // 없으면 경고창
  //     alert("MetaMask를 설치해주세요");
  //   }
  // }
  



  return (
    <div className="main_frame">
      <div className="main_top">
        <Button style={{ border: "none" }}>
          <img
            src={logo}
            alt="dobcha_logo"
            onClick={() => {
              history.push("/");
            }}
          />
        </Button>
        <div className="main_click">
          <a
            onClick={() => {
              history.push("/homepage/Doing");
            }}
            style={{
              padding: "10px",
              marginLeft: "20px",
              marginRight: "20px",
              color: "#000000",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            {" "}
            진행중인 기부
          </a>

          <a
            onClick={() => {
              history.push("/homepage/Done");
            }}
            style={{
              padding: "10px",
              marginRight: "20px",
              marginLeft: "20px",
              color: "#000000",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            {" "}
            마감된 기부{" "}
          </a>
        </div>

        <div className="main_btn">
          <Button
            block
            style={{
              display: "flex",
              width: "100px",
              height: "30px",
              justifyContent: "center",
              borderRadius: "5px",
              marginTop: "10px",
              marginRight: "15px",
            }}
            onClick={() => {
              history.push("/login/Login");
            }}
          >
            로그인
          </Button>
          <Button
            block
            style={{
              display: "flex",
              width: "100px",
              height: "30px",
              justifyContent: "center",
              borderRadius: "5px",
              marginTop: "10px",
            }}
            onClick={() => {
              history.push("/registration/Registration");
            }}
          >
            회원가입{" "}
          </Button>
        </div>
      </div>
      <Divider />

      <div className="main_middle">
        <div className="campaign-detail">
          <div className="campaign-detail__info">
            <Carousel autoplay>
              <div className="campaign-detail__info__carousel-item">
                <img
                  src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201808/29/6ebd8751-bf4a-4e5e-9fab-a2076668fc69.jpg"
                  alt="Carousel Image"
                />
              </div>
              <div className="campaign-detail__info__carousel-item">
                <img
                  src="https://img0.yna.co.kr/photo/yna/YH/2018/07/25/PYH2018072514390006200_P4.jpg"
                  alt="Carousel Image"
                />
              </div>
              <div className="campaign-detail__info__carousel-item">
                <img
                  src="https://d2ilb6aov9ebgm.cloudfront.net/1614319241488204.jpg"
                  alt="Carousel Image"
                />
              </div>
            </Carousel>

            <div className="campaign-detail__info__progress">
              <div className="campaign-detail__info__progress__detail">
                <div>30%</div>
                <div>서초동물사랑센터</div>
              </div>
              <Progress percent={30} showInfo={false} />
              <div className="campaign-detail__info__progress_period">
                2021.00.00. ~ 2021.00.00. 까지
              </div>
            </div>

            <div className="campaign-detail__info__price">
              <div>4,200,000 원</div>
              <div>목표 : 9,970,000 원</div>
            </div>

            {type !== "closed" ? (
              <div className="campaign-detail__info__button">

                <button  
                >모금함 기부하기</button>

                <label>
                  <input type="checkbox" />
                  익명으로 기부하기
                </label>
              </div>
            ) : null}
          </div>

          <div className="campaign-detail__content">
            <div className="campaign-detail__content__tab">
              <div
                className={tab === 1 ? "active" : ""}
                onClick={() => setTab(1)}
              >
                소개
              </div>
              <div
                className={tab === 2 ? "active" : ""}
                onClick={() => setTab(2)}
              >
                사용계획
              </div>
              <div
                className={tab === 3 ? "active" : ""}
                onClick={() => setTab(3)}
              >
                소식
              </div>
            </div>

            {/* 소개 탭 내용 */}
            {tab === 1 ? (
              <div className="campaign-detail__content__detail">
                <div className="introduce_title">
                  유기동물들의 친구가 되어주세요!
                </div>

                <div className="introduce_sub_title">
                  170마리 유기동물들에게 매달 약 1톤의 사료가 필요합니다.
                </div>

                <div className="introduce_content">
                  위드는 지난 5년간 약 850여 마리의 개와 고양이를 구조하여 보호
                  및 치료를 통해 입양을 보내고 있고, ...
                </div>

                <div className="introduce_sub_title">
                  동물의 구조는 이제 시작이라고 말하고 있습니다.
                </div>

                <div className="introduce_content">
                  위드는 지난 5년간 약 850여 마리의 개와 고양이를 구조하여 보호
                  및 치료를 통해 입양을 보내고 있고, ...
                </div>
              </div>
            ) : null}

            {/* 사용계획 탭 내용 */}
            {tab === 2 ? (
              <div className="campaign-detail__content__detail">
                <div className="usage_plan_title">
                  여러분의 소중한 기부금 이렇게 사용돼요!!!
                </div>

                <div className="usage_plan_table">
                  <div className="usage_plan_table_head">
                    <div>총 집행금액</div>
                    <div>
                      <span>9,970,000</span>원 (목표금액 9,970,000원)
                    </div>
                  </div>
                  <div className="usage_plan_table_item">
                    <div>사업비</div>
                    <div>강아지사료 335포 X 22,000원</div>
                    <div>7,370,000원</div>
                  </div>
                  <div className="usage_plan_table_item">
                    <div>사업비</div>
                    <div>강아지사료 335포 X 22,000원</div>
                    <div>7,370,000원</div>
                  </div>
                </div>
              </div>
            ) : null}

            {/* 소식 탭 내용 */}
            {tab === 3 ? (
              <div className="campaign-detail__content__detail">
                <div className="news_item">
                  <div>2021.11.04.</div>
                  <div>ABC</div>
                </div>
                <div className="news_item">
                  <div>2021.11.04.</div>
                  <div>ABC</div>
                </div>
                <div className="news_item">
                  <div>2021.11.04.</div>
                  <div>ABC</div>
                </div>
                <div className="news_item">
                  <div>2021.11.04.</div>
                  <div>ABC</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="main_bottom">
          <a herf="#" style={{ color: "#8c8c8c" }}>
            돕차 소개
          </a>
          <Divider type="vertical" />
          <a herf="#" style={{ color: "#8c8c8c" }}>
            돕차 이용 약관
          </a>
          <Divider type="vertical" />
          <a herf="#" style={{ color: "#8c8c8c" }}>
            개인정보 처리 방침{" "}
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dobcha ©2021
        </div>
      </div>
    </div>
  );
  
};

export default CampaignDetail;



