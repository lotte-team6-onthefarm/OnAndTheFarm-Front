import { JWTapiUser, ApiUser } from '.';

// 리뷰 추가
const postAddReview = async data => {
  const response = await JWTapiUser.post('review/new', data);
  return response.data;
};

// 리뷰 불러오기
const getReviewList = async data => {
  let response;
  if (localStorage.getItem('token') !== null) {
    response = await JWTapiUser.get(`review/list/orderby/${data.filter}/${data.productId}/${data.page}`);
  } else {
    response = await ApiUser.get(`review/list/orderby/${data.filter}/${data.productId}/${data.page}`);
  }
  return response.data.data;
};

// 상품 리뷰카운트 불러오기
const getProductReviewCount = async data => {
  let response;
  if (localStorage.getItem('token') !== null) {
    response = await JWTapiUser.get(`review/info?productId=${data}`);
  } else {
    response = await ApiUser.get(`review/info?productId=${data}`);
  }
  return response.data.data;
};

// 작성가능한 리뷰 불러오기
const getAddReviewList = async data => {
  const response = await JWTapiUser.get(`mypage/review?pageNumber=${data.page}`);
  return response.data.data;
};

// 나의 리뷰 불러오기
const getMyReviewList = async data => {
  const response = await JWTapiUser.get(`review/list/my-review/${data.page}`);
  return response.data.data;
};

// 리뷰 수정
const putReviewEdit = async data => {
  const response = await JWTapiUser.put('review/update', data);
  return response.data;
};
// 리뷰 삭제
const putReviewDelete = async data => {
  const response = await JWTapiUser.put('review/delete', data);
  return response.data;
};

// 리뷰 좋아요
const postLikeReview = async data => {
  const response = await JWTapiUser.post('review/like/up', data);
  return response.data;
};
// 리뷰 좋아요 취소
const postCancelLikeReview = async data => {
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
  getProductReviewCount,
  postLikeReview,
  postCancelLikeReview,
};
