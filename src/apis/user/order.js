import { JWTapiUser } from '.';

// 주문서 생성
const postMakeOrder = async data => {
  const response = await JWTapiUser.post('orders', data);
  return response.data;
};

// 나의 주문내역 불러오기
const getMyOrderList = async data => {
  const response = await JWTapiUser.get(`orders/list?pageNumber=${data.page}`);
  return response.data.data;
};

// 취소/반품 불러오기
const getCancelOrderList = async data => {
  const response = await JWTapiUser.get(`orders/claim/list?pageNumber=${data.page}`);
  return response.data.data;
};

// 주문 상세내역
const getOrderDetail = async data => {
  const response = await JWTapiUser.get(`orders/list/${data}`);
  return response.data.data;
};

// 환불신청
const postRefundProduct = async data => {
  const response = await JWTapiUser.post('orders/claim/refund', data);
  return response.data;
};

// 주문취소
const postCancelProduct = async data => {
  const response = await JWTapiUser.post('orders/claim/cancel', data);
  return response.data;
};

export {
  postMakeOrder,
  getMyOrderList,
  getCancelOrderList,
  getOrderDetail,
  postRefundProduct,
  postCancelProduct,
};
