import { JWTapiUser, ApiUser } from '.';

// 댓글 등록 기능
const postUploadComment = async (data) => {
  const response = await JWTapiUser.post('sns/comment', data.body);
  return response.data;
};

// 댓글 수정 기능
const putModifyComment = async (data) => {
  const response = await JWTapiUser.put('sns/comment/modify', data.body);
  return response.data;
};

// 댓글 수정 기능
const deleteComment = async (data) => {
  const response = await JWTapiUser.put('sns/comment/delete', data.body);
  return response.data;
};

  // 댓글 수정 기능
const getComment = async (data) => {
  const response = await JWTapiUser.get(`sns/comment/${data}`);
  return response.data;
};