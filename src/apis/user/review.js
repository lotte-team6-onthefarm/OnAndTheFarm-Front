import { JWTapiUser } from '.';

// 리뷰 추가
const postAddReview = async (data) => {
  const response = await JWTapiUser.post('QnA', data);
  return response.data;
};

// 리뷰 불러오기
const getReviewList = async data => {
  const response = await JWTapiUser.get(`review/list/orderby/${data.filter}/${data.productId}/${data.page}`);
  return response.data.data;
};

// 리뷰 좋아요
const postLikeReview = async (data) => {
  const response = await JWTapiUser.post('review/like/up', data);
  return response.data;
};
// 리뷰 좋아요 취소
const postCancelLikeReview = async (data) => {
  const response = await JWTapiUser.put('review/like/cancel', data);
  return response.data;
};



export {
  postAddReview,
  getReviewList,
  postLikeReview,
  postCancelLikeReview,
};
