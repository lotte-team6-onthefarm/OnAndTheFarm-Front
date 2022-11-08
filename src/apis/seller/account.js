import { JWTapiSeller, ApiSeller } from '..';

// 셀러 회원가입
const postSellerSignup = async data => {
  const response = await ApiSeller.post('members/signup', data);
  return response.data;
};

// 셀러 로그인
const postSellerlogin = async data => {
  const response = await ApiSeller.post('members/login', data);
  return response.data;
};

// 아이디 찾기
const postSellerSearchId = async data => {
  const response = await ApiSeller.post('search/id', data);
  return response.data;
};

// 비밀번호 찾기
const postSellerSearchPw = async data => {
  const response = await ApiSeller.post('search/passwd', data);
  return response.data;
};

// 비밀번호 변경
const postSellerPasswd = async data => {
  const response = await JWTapiSeller.post('members/passwd', data);
  return response.data;
};

// 이메일 인증
const postSellerEmail = async data => {
  const response = await ApiSeller.post('members/email', data);
  return response.data;
};

// 셀러 회원조회
const getSellerInfo = async data => {
  const response = await JWTapiSeller.get('members/mypage/info', data);
  return response.data;
};

// 셀러 정보수정
const putSellerInfo = async data => {
  const response = await JWTapiSeller.put('members/mypage/info', data);
  return response.data;
};

// 인증 확인
const getSellerEmailConfirm = async data => {
  const response = await ApiSeller.get(
    `members/emailConfirm?email=${data.email}&authKey=${data.key}`,
  );
  return response.data;
};

// 셀러 메인페이지
const getSellerMypage = async data => {
  const response = await JWTapiSeller.get(
    `mypage?startDate=${data.startDate}&endDate=${data.endDate}`,
  );
  return response.data.data;
};

// 셀러 메인페이지 운영현황 조회
const getSellerCondition = async data => {
  const response = await JWTapiSeller.get('orders/condition');
  return response.data.data;
};

export {
  postSellerSignup,
  postSellerlogin,
  postSellerSearchId,
  postSellerSearchPw,
  postSellerPasswd,
  postSellerEmail,
  getSellerInfo,
  putSellerInfo,
  getSellerEmailConfirm,
  getSellerMypage,
  getSellerCondition,
};
