import { JWTapiUser, ApiUser } from '.';

// 피드 업로드
const postUploadFeed = async (data) => {
  const response = await JWTapiUser.post('sns/upload', data.body);
  return response.data;
};

// 피드 상세 페이지 조회
const getFeedDetail = async (data) => {
  const response = await JWTapiUser.get(`sns/detail/${data}`);
  return response.data;
};