import { JWTapiAdmin } from '.';

// 데드레터큐 리스트
const getDlt = async () => {
  const response = await JWTapiAdmin.get('payment-service/dlt-payment');
  return response.data.data;
};


export { getDlt };
