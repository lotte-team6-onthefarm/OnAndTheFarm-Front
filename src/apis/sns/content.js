import { ApiUser, JWTapiUser } from '../user/index';

// 피드 업로드
const postUploadFeed = async data => {
  const response = await JWTapiUser.post('sns/feed/upload', data);
  return response.data;
};

// 피드 수정
const putModifyFeed = async data => {
  const response = await JWTapiUser.put('sns/feed/modify', data);
  return response.data;
};

// 피드 삭제
const putDeleteFeed = async data => {
  const response = await JWTapiUser.put('sns/feed/delete', data);
  return response.data;
};

// 피드에 등록 가능한 상품 목록 조회
const getFeedProduct = async () => {
  const response = await JWTapiUser.get('sns/feed/product');
  return response.data.data;
};

// 피드 상세 페이지 조회
const getFeedDetail = async (id, number) => {
  let response = {};
  if (number === null) {
    if (localStorage.getItem('token') !== null) {
      response = await JWTapiUser.get(`sns/feed/detail?feedId=${id}`);
    } else {
      response = await ApiUser.get(`sns/feed/detail?feedId=${id}`);
    }
    
  } else {
    
    if (localStorage.getItem('token') !== null) {
      response = await JWTapiUser.get(
        `sns/feed/detail?feedId=${id}&feedNumber=${number}`,
      );
    } else {
      response = await ApiUser.get(
        `sns/feed/detail?feedId=${id}&feedNumber=${number}`,
      );
    }
  }
  return response.data.data;
};

// 피드 포인트 증가
const putUpFeedPoint = async data => {
  const response = await JWTapiUser.put('sns/feed/share/point', data);
  return response.data;
};
// 피드 공유 수 증가
const putUpFeedShareCount = async data => {
  const response = await JWTapiUser.put('sns/feed/share', data);
  return response.data;
};

// 태그 별 피드 조회
const getFeedByTag = async (searchWord, pageParam) => {
  let response = {};
  if (localStorage.getItem('token') !== null) {
    response = await JWTapiUser.get(
      `sns/feed/list/tag?feedTagName=${searchWord}&pageNumber=${pageParam}`,
    );
  } else {
    response = await ApiUser.get(
      `sns/feed/list/tag?feedTagName=${searchWord}&pageNumber=${pageParam}`,
    );
  }
  return {
    posts: response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(
      response.data.data.totalPageNum - 1 === pageParam ||
        response.data.data.totalPageNum === 0,
    ),
  };
};

const getFeedList = async (url, pageParam) => {
  const response = await JWTapiUser.get(
    `sns/list${url}?pageNumber=${pageParam}`,
  );
  return {
    posts: response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(
      response.data.data.totalPageNum - 1 === pageParam ||
        response.data.data.totalPageNum === 0,
    ),
  };
};

// 피드 좋아요
const putFeedLike = async data => {
  const response = await JWTapiUser.post('sns/feed/like', data);
  return response.data;
};

// 피드 좋아요 취소
const putFeedUnLike = async data => {
  const response = await JWTapiUser.put('sns/feed/unlike', data);
  return response.data;
};

// 피드 스크랩
const putFeedScrap = async data => {
  const response = await JWTapiUser.post('sns/feed/scrap', data);
  return response.data;
};

// 피드 스크랩 취소
const putFeedUnScrap = async data => {
  const response = await JWTapiUser.put('sns/feed/unscrap', data);
  return response.data;
};

export {
  postUploadFeed,
  putModifyFeed,
  putDeleteFeed,
  getFeedProduct,
  getFeedDetail,
  getFeedList,
  putUpFeedPoint,
  putUpFeedShareCount,
  getFeedByTag,
  putFeedLike,
  putFeedUnLike,
  putFeedScrap,
  putFeedUnScrap,
};
