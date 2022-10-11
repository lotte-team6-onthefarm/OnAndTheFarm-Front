import { JWTapiUser } from '.';

// 카트 추가
const postMakeOrder = async (data) => {
  const response = await JWTapiUser.post('orders', data);
  return response.data;
};


export {
  postMakeOrder,
};
