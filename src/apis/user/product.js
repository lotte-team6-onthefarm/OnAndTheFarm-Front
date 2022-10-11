import { JWTapiUser } from '.';

// 상품 불러오기
const getProducts = async (data) => {
  const response = await JWTapiUser.get(`product/list/${data.url}${data.page}`);
  return response.data;
};

// 상품 단건조회
const getProduct = async (data) => {
  const response = await JWTapiUser.get(`product/${data}`);
  return response.data.data;
};

// 위시리스트 추가
const postAddWish = async (data) => {
  const response = await JWTapiUser.post('product/wish/add', data.body);
  return response.data;
};

// 위시리스트 삭제
const deleteWishList = async (data) => {
  const response = await JWTapiUser.put(`product/wish/delete`, data);
  return response.data;
};



export {
  getProducts,
  postAddWish,
  getProduct,
  deleteWishList,
};
