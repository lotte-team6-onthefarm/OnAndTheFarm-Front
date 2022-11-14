import { JWTapiAdmin } from '.';

// 배너 등록
const postExhibitionNewBanner = async data => {
  const response = await JWTapiAdmin.post('/item/new/banner', data);
  return response.data.data;
};

// 뱃지 등록
const postExhibitionNewBadge = async data => {
  const response = await JWTapiAdmin.post('/item/new/badge', data);
  return response.data.data;
};

// 데이터 툴 리스트 불러오기
const getDataPickerAll = async data => {
  const response = await JWTapiAdmin.get('/data-picker/get/all');
  return response.data.data;
};

export { postExhibitionNewBanner, postExhibitionNewBadge, getDataPickerAll };
