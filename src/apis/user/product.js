import { JWTapiUser, ApiUser } from '.';

// 상품 불러오기
const getProducts = async (url) => {
  console.log(url)
  const response = await JWTapiUser.get(`product/list/${url.path}${url.page}`);
  return response.data;
};

// 유저 회원가입
// const postUserSignup = async data => {
//   const response = await JWTapiUser.post('register', data);
//   console.log(response);
//   return response.data;
// };



export {
  getProducts,
};
