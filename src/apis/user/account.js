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



export {
  postUserlogin,
  postUserSignup,
};
