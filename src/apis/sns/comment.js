import { JWTapiUser } from '../user/index';

// 댓글 등록 기능
const postUploadComment = async data => {
  const response = await JWTapiUser.post('sns/comment', data);
  return response.data;
};

// 댓글 수정 기능
const putModifyComment = async data => {
  const response = await JWTapiUser.put('sns/comment/modify', data);
  return response.data;
};

// 댓글 삭제 기능
const deleteComment = async data => {
  const response = await JWTapiUser.put('sns/comment/delete', data);
  return response.data;
};

// 댓글 조회 기능
const getComment = async data => {
  console.log(data, 'getComment');
  const response = await JWTapiUser.get(`sns/comment/?feedId=${data}`);
  return response.data.data;
};

export { postUploadComment, putModifyComment, deleteComment, getComment };
