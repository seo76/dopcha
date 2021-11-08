import RegistrationProgress from "./RegistrationProgress";
import { Divider, Button } from "antd";
import logo from "../images/dobcha_logo.png";
import "antd/dist/antd.css";
import "./Registration.css";

const Registration = ({ history }) => {
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
            진행중인 기부 {/* 진행중인 기부 페이지로 경로 바꾸기*/}{" "}
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
            마감된 기부 {/* 마감된 기부 페이지로 경로 바꾸기*/}{" "}
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

      <div className="content">
        {/* 재사용되는 모듈인 회원가입 프로세스 설명 부분은 따로 컴포넌트로 분리했습니다. */}
        {/* progess라는 prop로 몇 번째 스탭인지 전달합니다. 여기서는 가장 첫 번째 단계이므로 1을 전달합니다. */}
        <RegistrationProgress progress="1" />

        <Divider />

        <div className="ag">
          <div className="in">
            <Button
              style={{
                width: "300px",
                height: "100px",
              }}
            >
              <a
                onClick={() => {
                  history.push("/registration/agency");//기관 회원가입 폼 불러오기
                }}
              >
                <h1>기관 회원가입 하기</h1>
              </a>
            </Button>
            <Divider />
            <Button
              style={{
                width: "300px",
                height: "100px",
              }}
            >
              <a
                onClick={() => {
                  history.push("/registration/individual");//개인 회원가입 폼 불러오기
                }}
              >
                <h1>개인 회원가입 하기</h1>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="bottom">
        <a
          herf="#"
          style={{
            color: "#8c8c8c",
          }}
        >
          돕차 소개
        </a>
        <Divider type="vertical" />
        <a
          herf="#"
          style={{
            color: "#8c8c8c",
          }}
        >
          돕차 이용 약관
        </a>
        <Divider type="vertical" />
        <a
          herf="#"
          style={{
            color: "#8c8c8c",
          }}
        >
          개인정보 처리 방침
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dobcha ©2021
      </div>
    </div>
  );
};

export default Registration;
