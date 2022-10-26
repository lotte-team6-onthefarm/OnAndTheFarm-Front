import { JWTapiUser} from '../user/index';

// 피드 조회
const getFeedList = async (url,pageParam) => {
  console.log(url)
  console.log(pageParam)
  const response = await JWTapiUser.get(`sns/list${url}?pageNumber=${pageParam}`);
  return {
    posts : response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean((response.data.data.totalPageNum-1)===pageParam),
  }
};

// 피드 최신순 조회
const getFeedByRecent = async (pageParam) => {
  const response = await JWTapiUser.get(`sns/list?pageNumber=${pageParam}`);
  return {
    posts : response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean((response.data.data.totalPageNum-1)===pageParam),
  }
};

// 피드 좋아요순 조회
const getFeedByLike = async (pageParam) => {
  const response = await JWTapiUser.get(`sns/list/like?pageNumber=${pageParam}`);
  return {
    posts : response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean((response.data.data.totalPageNum-1)===pageParam),
  }
};

// 피드 팔로우순 조회
const getFeedByFollow = async (pageParam) => {
  const response = await JWTapiUser.get(`sns/list/follow?pageNumber=${pageParam}`);
  return {
    posts : response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean((response.data.data.totalPageNum-1)===pageParam),
  }
};

// 피드 조회수순 조회
const getFeedByViewCount = async (pageParam) => {
  const response = await JWTapiUser.get(`sns/list/view-count?pageNumber=${pageParam}`);
  return {
    posts : response.data.data.feedResponseList,
    nextPage: pageParam + 1,
    isLast: Boolean((response.data.data.totalPageNum-1)===pageParam),
  }
};

export {
  getFeedList,
    getFeedByRecent,
    getFeedByLike,
    getFeedByFollow,
    getFeedByViewCount
  };