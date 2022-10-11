import { JWTapiUser } from '.';

// 카트 추가
const postAddCart = async (data) => {
  const response = await JWTapiUser.post('cart/add', data);
  return response.data;
};

// 카트 불러오기
const getCartList = async () => {
  const response = await JWTapiUser.get(`cart`);
  return response.data.data;
};

// 카트 삭제
const deleteCartList = async (data) => {
  const response = await JWTapiUser.put(`cart/delete`, data);
  return response.data;
};



export {
  postAddCart,
  getCartList,
  deleteCartList,
};
