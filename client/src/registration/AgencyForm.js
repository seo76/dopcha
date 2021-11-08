import {
  Form,
  Input,
  Checkbox,
  AutoComplete,
  Upload,
  message,
  Button,
} from "antd";
import "antd/dist/antd.css";
import "./AgencyForm.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../_actions/user_action";
import logo from "../images/dobcha_logo.png";
import { UploadOutlined } from "@ant-design/icons";

const AgencyForm = ({ form, onFinish, websiteOptions, onWebsiteChange }) => {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76", // 파일 업로드 서버 주소 작성
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: (file) => {
      if (file.type !== "application/pdf") {
        message.error("PDF 파일을 업로드해주세요.");
        return Upload.LIST_IGNORE;
      }
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    // defaultFileList: [
    //   {
    //     uid: "1",
    //     status: "done",
    //     response: "Server Error 500", // custom error message to show
    //     src: { logo },
    //   },
    // ], // png db에서 가져오는 식으로 코드 바꾸기 => 임의로 사진 설정
  };

  return (
    <Form
      form={form}
      className="agency_form"
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <div className="id_form">
        <Form.Item
          name="id" 
          label="아이디"
          hasFeedback
          rules={[
            {
              required: true,
              message: "아이디를 입력하십시오",
            },
          ]}
        >
          <Input placeholder="4~12자의 영어 혹은 숫자" />
        </Form.Item>
        <Button type="primary">중복 확인</Button>
      </div>

      <Form.Item
        name="password"
        label="비밀번호"
        rules={[
          {
            required: true,
            message: "비밀번호를 입력하시오.",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="비밀번호 확인"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "비밀번호 확인을 진행하십시오.",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agencyName"
        label="단체명"
        rules={[
          {
            required: true,
            message: "단체명을 입력하십시오",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="ceoName"
        label="대표자명"
        rules={[
          {
            required: true,
            message: "단체(기관)의 대표자명을 입력하십시오",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="전화번호"
        rules={[
          {
            required: true,
            message: '전화번호를 입력하세요("-"없이 입력해주세요)',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="fax"
        label="FAX"
        rules={[
          {
            required: true,
            message: '팩스번호를 입력하세요("-"없이 입력해주세요)',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-Mail주소"
        rules={[
          {
            type: "email",
            required: true,
            message: "이메일 주소를 입력하십시오",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="file"
        label="기관 서류 등록"
        rules={[
          {
            required: true,
            message: "기관 서류를 등록해주세요",
          },
        ]}
      >
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>기관 서류 등록</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
        rules={[
          {
            required: true,
            message: "단체(법인) 사이트를 입력하세요",
          },
        ]}
      >
        <AutoComplete
          options={websiteOptions}
          onChange={onWebsiteChange}
          placeholder="website"
        >
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("이용약관에 동의해주십시오.")),
          },
        ]}
      >
        <Checkbox>
          <a href=""> Dobcha의 이용약관 및 개인정보 수집, 이용에 동의 </a>
          합니다.
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AgencyForm;
