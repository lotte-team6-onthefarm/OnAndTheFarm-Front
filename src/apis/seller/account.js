import { JWTapiSeller, ApiSeller } from '..';

// 셀러 회원가입
const postSellerSignup = async data => {
  console.log(data);
  const response = await ApiSeller.post('signup', data);
  console.log(response);
  return response.data;
};

// 셀러 로그인
const postSellerlogin = async data => {
  console.log(data, '들어온 데이터');
  const response = await ApiSeller.post('login', data);
  console.log(response.data.data.token, 'asdasda');
  return response.data;
};

// 비밀번호 변경
const postSellerPasswd = async data => {
  const response = await JWTapiSeller.post('passwd', data);
  console.log(response);
  return response.data;
};

// 이메일 인증
const postSellerEmail = async data => {
  console.log(data, '들어온이메일 데이터');
  const response = await ApiSeller.post('email', data);
  return response.data;
};

// 셀러 회원조회
const getSellerInfo = async data => {
  const response = await JWTapiSeller.get('mypage/info', data);
  console.log(response);
  return response.data;
};

// 셀러 정보수정
const putSellerInfo = async data => {
  const response = await JWTapiSeller.put('mypage/info', data);
  console.log(response);
  return response.data;
};

// 인증 확인
const getSellerEmailConfirm = async data => {
  const response = await ApiSeller.get(
    `emailConfirm?email=${data.email}&authKey=${data.key}`,
  );
  console.log(response);
  return response.data;
};

// 셀러 메인페이지
const getSellerMypage = async data => {
  const response = await JWTapiSeller.get(
    `mypage?startDate=${data.startDate}&endDate=${data.endDate}`,
  );
  return response.data;
};

export {
  postSellerSignup,
  postSellerlogin,
  postSellerPasswd,
  postSellerEmail,
  getSellerInfo,
  putSellerInfo,
  getSellerEmailConfirm,
  getSellerMypage,
};
