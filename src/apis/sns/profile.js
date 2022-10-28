import { CommonJWTapi } from '..';
import { getRole } from '../../utils/sns/snsFunction';
import { JWTapiUser } from '../user/index';

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
  const memberRole = getRole();
  if (data.memberId === '0') {
    // 나 자신일 때
    const response = await JWTapiUser.get(`profile`);
    return response.data.data;
  } else {
    const response = await JWTapiUser.get(
      // 상대 프로필 정보 받아오기
      `profile?memberId=${data.memberId}&memberRole=${memberRole}`,
    );
    return response.data.data;
  }
};

// 스크랩&좋아요 수 조회
const getScrapLikeCount = async memberId => {
  const memberRole = getRole();
  if (memberId === '0') {
    // 나 자신일 때
    const response = await JWTapiUser.get(`sns/profile/count`);
    return response.data.data;
  }
  const response = await JWTapiUser.get(
    `sns/profile/count?memberId=${memberId}&memberRole=${memberRole}`,
  );
  return response.data.data;
};

// 멤버의 팔로워 리스트 조회
const getFollowerList = async (pageParam, memberId) => {
  const memberRole = getRole();
  let response = {};
  if (memberId === '0') {
    // 나 자신일 때
    response = await JWTapiUser.get(
      `follow/follower-list?pageNumber=${pageParam}`,
    );
  } else {
    response = await JWTapiUser.get(
      `follow/follower-list?pageNumber=${pageParam}&memberId=${memberId}&memberRole=${memberRole}`,
    );
  }
  return {
    posts: response.data.data.memberFollowListResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(response.data.data.totalPageNum - 1 === pageParam),
  };
};

// 멤버의 팔로잉 리스트 조회
const getFollowingList = async (pageParam, memberId) => {
  const memberRole = getRole();
  let response = {};
  if (memberId === '0') {
    // 나 자신일 때
    response = await JWTapiUser.get(
      `follow/following-list?pageNumber=${pageParam}`,
    );
  } else {
    response = await JWTapiUser.get(
      `follow/following-list?pageNumber=${pageParam}&memberId=${memberId}&memberRole=${memberRole}`,
    );
  }
  return {
    posts: response.data.data.memberFollowListResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(response.data.data.totalPageNum - 1 === pageParam),
  };
};

// 프로필 화면 feed 부분 조회
const getProfileFeedList = async data => {
  if (data.memberId === '0') {
    // 나 자신일 때
    const response = await JWTapiUser.get(`sns/profile/main-feed`, data);
    return response.data.data;
  }
  const response = await JWTapiUser.get(
    `sns/profile/main-feed?memberId=${data.memberId}`,
    data,
  );
  return response.data.data;
};

// 프로필 화면 scrap 부분 조회
const getProfileScrapList = async data => {
  if (data.memberId === '0') {
    // 나 자신일 때
    const response = await JWTapiUser.get('sns/profile/main-scrap', data);
    return response.data.data;
  }
  const response = await JWTapiUser.get(
    `sns/profile/main-scrap?memberId=${data.memberId}`,
    data,
  );
  return response.data.data;
};

// 프로필 화면 wish 부분 조회
const getProfileWishList = async data => {
  if (data.memberId === '0') {
    // 나 자신일 때
    const response = await JWTapiUser.get('sns/profile/main-wish', data);
    return response.data.data;
  }
  const response = await JWTapiUser.get(
    `sns/profile/main-wish?memberId=${data.memberId}`,
    data,
  );
  console.log(response.data.data, 'asdas');
  return response.data.data;
};

// 멤버의 feed 전체 조회
const getAllFeedList = async (pageParam, memberId) => {
  let response = {};
  if (memberId === '0') {
    response = await JWTapiUser.get(`sns/profile/feed?pageNumber=${pageParam}`);
  } else {
    response = await JWTapiUser.get(
      `sns/profile/feed?pageNumber=${pageParam}&memberId=${memberId}`,
    );
  }
  return {
    posts: response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(response.data.data.totalPageNum - 1 === pageParam),
  };
};

// 멤버의 scrap 전체 조회
const getScrapList = async (pageParam, memberId) => {
  let response = {};
  if (memberId === '0') {
    response = await JWTapiUser.get(
      `sns/profile/scrap?pageNumber=${pageParam}`,
    );
  } else {
    response = await JWTapiUser.get(
      `sns/profile/scrap?pageNumber=${pageParam}&memberId=${memberId}`,
    );
  }
  return {
    posts: response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean(response.data.data.totalPageNum - 1 === pageParam),
  };
};

// 멤버의 wish 전체 조회
const getWishList = async (pageParam, memberId) => {
  let response = {};
  if (memberId === '0') {
    response = await JWTapiUser.get(`sns/profile/wish?pageNumber=${pageParam}`);
  } else {
    response = await JWTapiUser.get(
      `sns/profile/wish?pageNumber=${pageParam}&memberId=${memberId}`,
    );
  }
  return {
    posts: response.data.data.wishProductListResponse,
    nextPage: pageParam + 1,
    isLast: Boolean(response.data.data.totalPageNum - 1 === pageParam),
  };
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
