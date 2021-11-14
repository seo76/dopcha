import React from "react";
import "./Doing.css";
import {
  Divider,
  Button,
  Carousel,
  Menu,
  Dropdown,
  Card,
  Col,
  Row,
} from "antd";
import logo from "../images/dobcha_logo.png";
import DonationCard from "./DonationCard";
import axios from "axios";

const { Meta } = Card;
const Doing = ({ history }) => {

  


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
        <div className="donation">
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
          <DonationCard />
        </div>
        {/** 나중에 main_donation, main_volunteer 부분 css 바꾸기!! 등록된 종류가 늘어나면...결론: 백엔드와 같이 상의 */}

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

export default Doing;