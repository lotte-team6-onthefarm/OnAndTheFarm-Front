import { JWTapiUser, ApiUser } from '.';

// 유저 로그인
const postUserlogin = async data => {
  const response = await ApiUser.post('members/login', data);
  return response.data;
};

// 유저 로그아웃
const putUserlogout = async data => {
  const response = await JWTapiUser.put('members/logout');
  return response.data;
};

// 유저 회원가입
const postUserSignup = async data => {
  const response = await JWTapiUser.post('register', data);
  return response.data;
};

// 유저 정보조회
const getUserInfo = async () => {
  const response = await JWTapiUser.get('members/mypage/info');
  return response.data.data;
};

// 유저 정보수정
const postUserInfo = async data => {
  const response = await JWTapiUser.put('members/update', data);
  return response.data;
};

export { postUserlogin, putUserlogout, postUserSignup, getUserInfo, postUserInfo };
