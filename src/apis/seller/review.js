import { JWTapiSeller } from '..';

// 셀러 전체 질의 조회
export const getSellerReview = async pageNo => {
  const response = await JWTapiSeller.get(`review/list/by-seller/${pageNo}`);
  console.log(response);
  return response.data.data;
};
