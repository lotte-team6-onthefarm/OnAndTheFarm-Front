import { JWTapiUser } from '.';

// 질문 추가
const postAddQna = async data => {
  const response = await JWTapiUser.post('QnA', data);
  return response.data;
};

// 질문 불러오기
const getQnaList = async data => {
  const response = await JWTapiUser.get(`product/QnA/${data.productId}?pageNumber=${data.page}`);
  return response.data.data;
};

// 나의질문 불러오기
const getMyQnaList = async data => {
  const response = await JWTapiUser.get(`mypage/QnA/${data.page}`);
  return response.data.data;
};

// 질문 수정
const putQnaEdit = async data => {
  const response = await JWTapiUser.put('QnA', data);
  return response.data;
};
// 질문 삭제
const putQnaDelete = async data => {
  const response = await JWTapiUser.put(
    `QnA/delete?productQnaId=${data.productQnaId}`,
  );
  return response.data;
};

export { postAddQna, getQnaList, getMyQnaList, putQnaEdit, putQnaDelete };
