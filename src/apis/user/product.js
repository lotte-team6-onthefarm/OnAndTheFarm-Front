import { JWTapiUser, ApiUser } from '.';

// 상품 불러오기
const getProducts = async data => {
  let response;
  if (localStorage.getItem('token') !== null) {
    response = await JWTapiUser.get(`product/list${data.url}/${data.page}`);
  } else {
    response = await ApiUser.get(`product/list${data.url}/${data.page}`);
  }
  return response.data.data;
};

// 상품 단건조회
const getProduct = async data => {
  let response;
  if (localStorage.getItem('token') !== null) {
    response = await JWTapiUser.get(`product/${data}`);
  } else {
    response = await ApiUser.get(`product/${data}`);
  }
  return response.data.data;
};
// 메인페이지 상품 10개 조회
const getMainProduct = async data => {
  let response;
  if (localStorage.getItem('token') !== null) {
    response = await JWTapiUser.get(`product/list/main`);
  } else {
    response = await ApiUser.get(`product/list/main`);
  }
  return response.data.data;
};

// 위시리스트 추가
const postAddWish = async data => {
  const response = await JWTapiUser.post('product/wish/add', data.body);
  return response.data;
};

// 위시리스트 삭제
const deleteWishList = async data => {
  const response = await JWTapiUser.put(`product/wish/delete`, data);
  return response.data;
};

export { getProducts, postAddWish, getMainProduct, getProduct, deleteWishList };
