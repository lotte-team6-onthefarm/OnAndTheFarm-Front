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
const getFeedByTag = async (searchWord,pageParam) => {
  const response = await JWTapiUser.get(
    `sns/list/tag?feedTagName=${searchWord}&pageNumber=${pageParam}`,
  );
  console.log(response, 'sdf');
  return {
    posts: response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(response.data.data.totalPageNum - 1 === pageParam),
  };
};

const getFeedList = async (url,pageParam) => {
  const response = await JWTapiUser.get(`sns/list${url}?pageNumber=${pageParam}`);
  return {
    posts: response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(response.data.data.totalPageNum - 1 === pageParam),
  };
};

// 피드 좋아요
const putFeedLike = async data => {
  const response = await JWTapiUser.post('sns/like', data);
  return response.data;
};

// 피드 좋아요 취소
const putFeedUnLike = async data => {
  const response = await JWTapiUser.put('sns/unlike', data);
  return response.data;
};

// 피드 스크랩
const putFeedScrap = async data => {
  const response = await JWTapiUser.post('sns/scrap', data);
  return response.data;
};

// 피드 스크랩 취소
const putFeedUnScrap = async data => {
  const response = await JWTapiUser.put('sns/unscrap', data);
  return response.data;
};

export {
  postUploadFeed,
  putModifyFeed,
  putDeleteFeed,
  getFeedProduct,
  getFeedDetail,
  getFeedList,
  putUpFeedShareCount,
  getFeedByTag,
  putFeedLike,
  putFeedUnLike,
  putFeedScrap,
  putFeedUnScrap,
};
