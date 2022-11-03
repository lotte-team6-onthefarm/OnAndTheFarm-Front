import { JWTapiSeller } from '..';

// 셀러 전체 질의 조회
const getSellerQna = async pageNo => {
  const response = await JWTapiSeller.get(`QnA?pageNumber=${pageNo}`);
  return response.data.data;
};

// 질의 답변
const postSellerQna = async data => {
  const response = await JWTapiSeller.post('QnA', data);

  return response.data;
};

export { getSellerQna, postSellerQna };
