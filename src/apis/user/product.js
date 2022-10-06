import { JWTapiUser, ApiUser } from '.';

// 상품 불러오기
const getProducts = async (data) => {
  const response = await JWTapiUser.get(`product/list/${data.url}${data.page}`);
  return response.data;
};

// 위시리스트 추가
const postAddWish = async (data) => {
  const response = await JWTapiUser.post('product/wish/add', data.body);
  return response.data;
};



export {
  getProducts,
  postAddWish,
};
