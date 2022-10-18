import { JWTapiSeller } from '..';

// 셀러 주문내역 조회
const getSellerOrderList = async (startDate, endDate, pageNo) => {
  const response = await JWTapiSeller.get(
    `orders/list?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNo}`,
  );
  return response.data.data.responses;
};

// 셀러 주문 상세내역 조회
const getSellerOrderListDetail = async orderSerial => {
  const response = await JWTapiSeller.get(
    `orders/list/detail?orderSerial=${orderSerial}`,
  );
  return response.data.data;
};

// 셀러 반품/취소 내역 조회
const getSellerOrderClaimList = async (startDate, endDate, pageNo) => {
  const response = await JWTapiSeller.get(
    `orders/claim/list?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNo}`,
  );
  return response.data.data.responses;
};

// 셀러 반품/취소 상세 내역 조회
const getSellerOrderClaimDetailList = async data => {
  const response = await JWTapiSeller.get(`orders/claim/list/${data}`);
  return response.data.data;
};

// 반품 확정
const postOrderClaimApprove = async data => {
  const response = await JWTapiSeller.post(`orders/claim/list/${data}`);
  return response.data;
};

// 셀러 배송 시작 처리
const postSellerDeliveryStart = async data => {
  const response = await JWTapiSeller.post('orders/delivery', data);
  return response.data;
};

// 셀러 배송 완료 처리
const postSellerDeliveryDone = async data => {
  const response = await JWTapiSeller.post(`orders/delivery/${data}`);
  return response.data;
};

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
  getSellerOrderList,
  getSellerOrderListDetail,
  getSellerOrderClaimDetailList,
  getSellerOrderClaimList,
  postOrderClaimApprove,
  postSellerDeliveryStart,
  postSellerDeliveryDone,
};
