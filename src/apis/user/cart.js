import { JWTapiUser, ApiUser } from '.';

// 위시리스트 추가
const postAddCart = async (data) => {
  const response = await JWTapiUser.post('cart', data);
  return response.data;
};



export {
  postAddCart,
};
