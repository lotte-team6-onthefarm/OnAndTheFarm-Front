import { JWTapiSeller } from '..';

// 셀러 전체 질의 조회
const getSellerQna = async () => {
  const response = await JWTapiSeller.post('QnA');
  console.log(response);

  return response.data;
};

// 질의 답변
const postSellerQna = async data => {
  const response = await JWTapiSeller.post('QnA', data);
  console.log(response);

  return response.data;
};

export { getSellerQna, postSellerQna };
