import { JWTapiUser, ApiUser } from '.';

// 팔로우 기능
const postAddFollow = async (data) => {
  const response = await JWTapiUser.post('follow/add', data.body);
  return response.data;
};

// 팔로우 취소 기능
const putCancelFollow = async (data) => {
  const response = await JWTapiUser.put('follow/cancel', data.body);
  return response.data;
};

// 프로필 정보(이름&프로필이미지) 조회
const postProfileInfo = async (data) => {
  const response = await JWTapiUser.post('profile', data.body);
  return response.data;
};

// 팔로우&팔로잉 수 조회
const postFollowCount = async (data) => {
  const response = await JWTapiUser.post('follow/count', data.body);
  return response.data;
};

// 멤버의 팔로워 리스트 조회
const postFollowerList = async (data) => {
  const response = await JWTapiUser.post('follow/follower-list', data.body);
  return response.data;
};

// 멤버의 팔로잉 리스트 조회
const postFollowingList = async (data) => {
  const response = await JWTapiUser.post('follow/following-list', data.body);
  return response.data;
};

// 프로필 화면 feed 부분 조회
const postProfileFeedList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/main-feed', data.body);
  return response.data;
};

// 프로필 화면 scrap 부분 조회
const postProfileScrapList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/main-scrap', data.body);
  return response.data;
};

// 프로필 화면 wish 부분 조회
const postProfileWishList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/main-wish', data.body);
  return response.data;
};

// 멤버의 feed 전체 조회
const postFeedList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/feed', data.body);
  return response.data;
};

// 멤버의 scrap 전체 조회
const postScrapList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/scrap', data.body);
  return response.data;
};

// 멤버의 wish 전체 조회
const postWishList = async (data) => {
  const response = await JWTapiUser.post('sns/profile/wish', data.body);
  return response.data;
};