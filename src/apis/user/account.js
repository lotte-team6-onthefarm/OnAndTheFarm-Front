import { JWTapiUser, ApiUser } from '.';

// 유저 로그인
const postUserlogin = async data => {
  const response = await ApiUser.post('login', data);
  return response.data;
};

// 유저 회원가입
const postUserSignup = async data => {
  const response = await JWTapiUser.post('register', data);
  return response.data;
};

// 유저 정보조회
const getUserInfo = async () => {
  const response = await JWTapiUser.get('mypage/info');
  return response.data.data;
};

// 유저 정보수정
const postUserInfo = async data => {
  const response = await JWTapiUser.put('update', data);
  return response.data;
};

export { postUserlogin, postUserSignup, getUserInfo, postUserInfo };
