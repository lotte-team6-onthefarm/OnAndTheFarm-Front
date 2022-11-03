import { JWTapiUser } from '.';

// 찜목록 불러오기
const getLikeList = async (data) => {
  const response = await JWTapiUser.get(`mypage/wish?pageNumber=${data.page}`);
  return response.data.data;
};

export { getLikeList };
