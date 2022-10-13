import { JWTapiUser } from '.';

// 리뷰 추가
const postAddReview = async (data) => {
  const response = await JWTapiUser.post('review/new', data);
  return response.data;
};

// 리뷰 불러오기
const getReviewList = async data => {
  const response = await JWTapiUser.get(`review/list/orderby/${data.filter}/${data.productId}/${data.page}`);
  return response.data.data;
};

// 작성가능한 리뷰 불러오기
const getAddReviewList = async data => {
  const response = await JWTapiUser.get(`mypage/review`);
  return response.data.data;
};

// 나의 리뷰 불러오기
const getMyReviewList = async data => {
  const response = await JWTapiUser.get(`review/list/my-review/${data}`);
  return response.data.data;
};

// 리뷰 수정
const putReviewEdit = async (data) => {
  const response = await JWTapiUser.put('review/update', data);
  return response.data;
};
// 리뷰 삭제
const putReviewDelete = async (data) => {
  const response = await JWTapiUser.put('review/delete', data);
  return response.data;
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
  getAddReviewList,
  getMyReviewList,
  putReviewEdit,
  putReviewDelete,
  postLikeReview,
  postCancelLikeReview,
};
