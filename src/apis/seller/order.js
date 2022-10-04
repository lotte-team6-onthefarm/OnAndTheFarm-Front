import { JWTapiSeller } from '..';

// 셀러 주문내역 조회
const postSellerOrderList = async data => {
  const response = await JWTapiSeller.post('orders/list', data);
  console.log(response);
  return response.data;
};

// 셀러 주문 상세내역 조회
const postSellerOrderListDetail = async data => {
  const response = await JWTapiSeller.post('orders/list/detail', data);
  console.log(response);
  return response.data;
};

// 셀러 반품/취소 내역 조회
const postSellerOrderClaimList = async data => {
  const response = await JWTapiSeller.post('orders/claim/list', data);
  console.log(response);
  return response.data;
};

// // 반품 확정
// const postSellerOrderList = async data => {
//   const response = await JWTapiSeller.post('orders/list', data);
//   console.log(response);
//   return response.data;
// };

// // 셀러 주문내역 조회
// const postSellerOrderList = async data => {
//   const response = await JWTapiSeller.post('orders/list', data);
//   console.log(response);
//   return response.data;
// };

// // 셀러 주문내역 조회
// const postSellerOrderList = async data => {
//   const response = await JWTapiSeller.post('orders/list', data);
//   console.log(response);
//   return response.data;
// };

// // 셀러 주문내역 조회
// const postSellerOrderList = async data => {
//   const response = await JWTapiSeller.post('orders/list', data);
//   console.log(response);
//   return response.data;
// };

export {
  postSellerOrderList,
  postSellerOrderListDetail,
  postSellerOrderClaimList,
};
