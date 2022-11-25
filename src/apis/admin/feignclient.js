import { JWTapiAdmin } from '.';

// 데드레터큐 리스트
const getDlt = async () => {
  const response = await JWTapiAdmin.get('payment-service/dlt-payment');
  return response.data.data;
};

const postSendEmail = async data => {
  const response = await JWTapiAdmin.post('payment-service/email', data);
  return response.data.data;
};

export { getDlt, postSendEmail };
