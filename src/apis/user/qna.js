import { JWTapiUser } from '.';

// 질문 추가
const postAddQna = async (data) => {
  const response = await JWTapiUser.post('QnA', data);
  return response.data;
};

// 카트 불러오기
const getQnaList = async data => {
  const response = await JWTapiUser.get(`product/QnA/${data}`);
  console.log(response.data.data)
  return response.data.data;
};

// // 카트 삭제
// const deleteCartList = async (data) => {
//   const response = await JWTapiUser.put(`cart/delete`, data);
//   return response.data;
// };



export {
  postAddQna,
  getQnaList,
};
