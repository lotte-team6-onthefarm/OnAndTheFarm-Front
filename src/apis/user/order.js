import { JWTapiUser } from '.';

// 카트 추가
const postMakeOrder = async data => {
  const response = await JWTapiUser.post('orders', data);
  return response.data;
};

// 나의 주문내역 불러오기
const getMyOrderList = async data => {
  const response = await JWTapiUser.post(`orders/list`, {
    pageNumber: data,
  });
  console.log(response.data.data)
  return response.data.data;
};

export { postMakeOrder, getMyOrderList };
