import axios from 'axios'

export const getAPIHost = () => {
  // TODO: get from env
  return 'http://localhost:5000';
} 
 
export const restApi =  axios.create({
  baseURL: getAPIHost(),
  timeout: 1000
});

restApi.interceptors.request.use(
  function (config) {
      // 요청 성공 직전 호출됩니다.
      // axios 설정값을 넣습니다. (사용자 정의 설정도 추가 가능)
      return config;
  }, 
  function (error) {
      // 요청 에러 직전 호출됩니다. 
      return Promise.reject(error);
  }
);

restApi.interceptors.response.use(
  function (response) {
  /*
      http status가 200인 경우
      응답 성공 직전 호출됩니다. 
      .then() 으로 이어집니다.
  */
      return response;
  },

  function (error) {
  /*
      http status가 200이 아닌 경우
      응답 에러 직전 호출됩니다.
      .catch() 으로 이어집니다.    
  */
      return Promise.reject(error);
  }
);