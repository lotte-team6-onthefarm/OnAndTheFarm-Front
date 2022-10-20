import { JWTapiUser} from '../user/index';

// 피드 최신순 조회
const getFeedByRecent = async data => {
  const response = await JWTapiUser.get(`sns/list?pageNumber=${data}`);
  return response.data;
};

// 피드 좋아요순 조회
const getFeedByLike = async data => {
  const response = await JWTapiUser.get(`sns/list/like?pageNumber=${data}`);
  return response.data;
};

// 피드 팔로우순 조회
const getFeedByFollow = async data => {
  const response = await JWTapiUser.get(`sns/list/follow?pageNumber=${data}`);
  return response.data;
};

// 피드 조회수순 조회
const getFeedByViewCount = async data => {
  const response = await JWTapiUser.get(`sns/list/view-count?pageNumber=${data}`);
  return response.data;
};

export {
    getFeedByRecent,
    getFeedByLike,
    getFeedByFollow,
    getFeedByViewCount
  };