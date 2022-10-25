import { JWTapiUser } from '../user/index';

// 피드 업로드
const postUploadFeed = async data => {
  const response = await JWTapiUser.post('sns/upload', data);
  return response.data;
};

// 피드 수정
const putModifyFeed = async data => {
  const response = await JWTapiUser.put('sns/modify', data);
  return response.data;
};

// 피드 삭제
const putDeleteFeed = async data => {
  const response = await JWTapiUser.put('sns/delete', data);
  return response.data;
};

// 피드에 등록 가능한 상품 목록 조회
const getFeedProduct = async () => {
  const response = await JWTapiUser.get('sns/product');
  return response.data.data;
};

// 피드 상세 페이지 조회
const getFeedDetail = async data => {
  const response = await JWTapiUser.get(`sns/detail?feedId=${data}`);
  return response.data.data;
};

// 피드 공유 수 증가
const putUpFeedShareCount = async data => {
  const response = await JWTapiUser.put('sns/share', data);
  return response.data;
};

// 태그 별 피드 조회
const getFeedByTag = async data => {
  const response = await JWTapiUser.get(
    `sns/list/tag?feedTagName=${data.feedTageName}&pageNumber=${data.pageNumber}`,
  );
  console.log(response, 'sdf');
  return response.data;
};

// 피드 좋아요
const putFeedLike = async data => {
  console.log(data, 'putFeedLike');
  const response = await JWTapiUser.put('sns/like', data);
  return response.data;
};

// 피드 좋아요 취소
const putFeedUnLike = async data => {
  console.log(data, 'putFeedUnLike');
  const response = await JWTapiUser.put('sns/unlike', data);
  return response.data;
};

// 피드 스크랩
const putFeedScrap = async data => {
  console.log(data, 'putFeedScrap');
  const response = await JWTapiUser.put('sns/scrap', data);
  return response.data;
};

// 피드 스크랩 취소
const putFeedUnScrap = async data => {
  console.log(data, 'putFeedUnScrap');
  const response = await JWTapiUser.put('sns/unscrap', data);
  return response.data;
};

export {
  postUploadFeed,
  putModifyFeed,
  putDeleteFeed,
  getFeedProduct,
  getFeedDetail,
  putUpFeedShareCount,
  getFeedByTag,
  putFeedLike,
  putFeedUnLike,
  putFeedScrap,
  putFeedUnScrap,
};
