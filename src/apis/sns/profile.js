import { JWTapiUser } from '../user/index';

// 팔로우 기능
const postAddFollow = async (data) => {
  const response = await JWTapiUser.post('follow/add', data);
  return response.data;
};

// 팔로우 취소 기능
const putCancelFollow = async (data) => {
  const response = await JWTapiUser.put('follow/cancel', data);
  return response.data;
};

// 프로필 정보(이름&프로필이미지&팔로우&팔로잉) 조회
const postProfileInfo = async (data) => {
  const response = await JWTapiUser.post('profile', data);
  return response.data;
};

// 스크랩&좋아요 수 조회
const postScrapLikeCount = async (data) => {
  const response = await JWTapiUser.post('sns/profile/count', data);
  return response.data;
};

// 멤버의 팔로워 리스트 조회
const postFollowerList = async (data) => {
  const response = await JWTapiUser.post('follow/follower-list', data);
  return response.data;
};

// 멤버의 팔로잉 리스트 조회
const postFollowingList = async (data) => {
  const response = await JWTapiUser.post('follow/following-list', data);
  return response.data;
};

// 프로필 화면 feed 부분 조회
const postProfileFeedList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/main-feed', data);
  return response.data;
};

// 프로필 화면 scrap 부분 조회
const postProfileScrapList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/main-scrap', data);
  return response.data;
};

// 프로필 화면 wish 부분 조회
const postProfileWishList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/main-wish', data);
  return response.data;
};

// 멤버의 feed 전체 조회
const postFeedList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/feed', data);
  return response.data;
};

// 멤버의 scrap 전체 조회
const postScrapList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/scrap', data);
  return response.data;
};

// 멤버의 wish 전체 조회
const postWishList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/wish', data);
  return response.data;
};
export {
  postAddFollow,
  putCancelFollow,
  postProfileInfo,
  postScrapLikeCount,
  postFollowerList,
  postFollowingList,
  postProfileFeedList,
  postProfileScrapList,
  postProfileWishList,
  postFeedList,
  postScrapList,
  postWishList
};