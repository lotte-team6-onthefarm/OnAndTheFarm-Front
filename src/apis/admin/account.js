import { JWTapiAdmin } from '.';

// 전시구좌 추가
const postAccountNew = async data => {
  const response = await JWTapiAdmin.post('/exhibition/account/new', data);
  return response;
};

// 전시구좌 수정
const putAccountUpdate = async data => {
  const response = await JWTapiAdmin.put('/exhibition/account/update', data);
  return response;
};

// 전시구좌 삭제
const putAccountDelete = async data => {
  const response = await JWTapiAdmin.put('/exhibition/account/delete', data);
  return response;
};

// 전시 카테고리 전체 조회 - 카테고리 선택시 사용
const getCategory = async data => {
  const response = await JWTapiAdmin.get('/exhibition/category', data);
  return response;
};

// 전시카테고리 별 전시구좌 조회 - 전시구좌 선택시 사용
const getExhibitionCategoryNo = async exhibitionCategoryNo => {
  const response = await JWTapiAdmin.get(
    `/exhibition/account/${exhibitionCategoryNo}`,
  );
  return response;
};

// 전시구좌 상세보기
const getExhibitionAccountId = async exhibitionAccountId => {
  const response = await JWTapiAdmin.get(
    `/exhibition/account/detail/${exhibitionAccountId}`,
  );
  return response.data.data;
};

export {
  postAccountNew,
  putAccountUpdate,
  putAccountDelete,
  getCategory,
  getExhibitionCategoryNo,
  getExhibitionAccountId,
};
