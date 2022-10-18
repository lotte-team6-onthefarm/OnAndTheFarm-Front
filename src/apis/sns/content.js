import { JWTapiUser } from '../user/index';

// 피드 업로드
const postUploadFeed = async data => {
  const response = await JWTapiUser.post('sns/upload', data.body);
  return response.data;
};

// 피드 상세 페이지 조회
const getFeedDetail = async data => {
  const response = await JWTapiUser.get(`sns/detail?feedId=${data}`);
  return response.data.data;
};

// 피드 좋아요
const putFeedLike = async data => {
  console.log(data, 'putFeedLike');
  const response = await JWTapiUser.put(`sns/like?feedId=${data}`);
  return response.data.data;
};
// 피드 좋아요 취소
const putFeedUnLike = async data => {
  console.log(data, 'putFeedUnLike');
  const response = await JWTapiUser.put(`sns/unlike?feedId=${data}`);
  return response.data.data;
};
// 피드 스크랩
const putFeedScrap = async data => {
  console.log(data, 'putFeedScrap');
  const response = await JWTapiUser.put(`sns/scrap?feedId=${data}`);
  return response.data.data;
};
// 피드 스크랩 취소
const putFeedUnScrap = async data => {
  console.log(data, 'putFeedUnScrap');
  const response = await JWTapiUser.put(`sns/unscrap?feedId=${data}`);
  return response.data.data;
};
// 피드 공유 카운트 증가
const putFeedShare = async data => {
  console.log(data, 'putFeedShare');
  const response = await JWTapiUser.put(`sns/share?feedId=${data}`);
  return response.data.data;
};
export {
  postUploadFeed,
  getFeedDetail,
  putFeedLike,
  putFeedUnLike,
  putFeedScrap,
  putFeedUnScrap,
  putFeedShare,
};
