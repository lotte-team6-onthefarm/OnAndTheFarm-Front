import { ApiUser, JWTapiUser } from '../user/index';

// 팔로우 기능
const postAddFollow = async data => {
  const response = await JWTapiUser.post('follow/add', data);
  return response.data.data;
};

// 팔로우 취소 기능
const putCancelFollow = async data => {
  const response = await JWTapiUser.put('follow/cancel', data);
  return response.data.data;
};

// 프로필 정보(이름&프로필이미지&팔로우&팔로잉) 조회
const getProfileInfo = async data => {
  console.log(data);
  let response = {};
  if (data.memberId === '0') {  // 내 정보 받아오기
    response = await JWTapiUser.get(`profile`);
  } else {
    response = await JWTapiUser.get(  // 상대 프로필 정보 받아오기
      `profile?memberId=${data.memberId}&memberRole=user`,
    );
  }
  return response.data.data;
};

// 스크랩&좋아요 수 조회
const getScrapLikeCount = async data => {
  const response = await JWTapiUser.get('sns/profile/count', data);
  return response.data.data;
};

// 멤버의 팔로워 리스트 조회
const getFollowerList = async data => {
  const response = await JWTapiUser.get(
    'follow/follower-list?pageNumber=0',
    data,
  );
  return response.data.data.memberFollowListResponseList;
};

// 멤버의 팔로잉 리스트 조회
const getFollowingList = async data => {
  const response = await JWTapiUser.get(
    'follow/following-list?pageNumber=0',
    data,
  );
  return response.data.data.memberFollowListResponseList;
};

// 프로필 화면 feed 부분 조회
const getProfileFeedList = async data => {
  const response = await JWTapiUser.get('sns/profile/main-feed', data);
  return response.data.data;
};

// 프로필 화면 scrap 부분 조회
const getProfileScrapList = async data => {
  const response = await JWTapiUser.get('sns/profile/main-scrap', data);
  return response.data.data;
};

// 프로필 화면 wish 부분 조회
const getProfileWishList = async data => {
  const response = await JWTapiUser.get('sns/profile/main-wish', data);
  return response.data.data;
};

// 멤버의 feed 전체 조회
const getAllFeedList = async pageParam => {
  const response = await JWTapiUser.get(
    `sns/profile/feed?pageNumber=${pageParam}`,
  );
  return {
    posts: response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(response.data.data.totalPageNum - 1 === pageParam),
  };
};

// 멤버의 scrap 전체 조회
const getScrapList = async data => {
  const response = await JWTapiUser.get('sns/profile/scrap?pageNumber=0', data);
  return response.data.data;
};

// 멤버의 wish 전체 조회
const getWishList = async pageParam => {
  const response = await JWTapiUser.get(
    `sns/profile/wish?pageNumber=${pageParam}`,
  );
  return response.data.data;
};
export {
  postAddFollow,
  putCancelFollow,
  getProfileInfo,
  getScrapLikeCount,
  getFollowerList,
  getFollowingList,
  getProfileFeedList,
  getProfileScrapList,
  getProfileWishList,
  getAllFeedList,
  getScrapList,
  getWishList,
};
