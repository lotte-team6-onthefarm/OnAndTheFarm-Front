import { JWTapiUser } from '.';

// 찜목록 불러오기
const getLikeList = async () => {
  const response = await JWTapiUser.get(`mypage/wish`);
  return response.data.data;
};



export { getLikeList };
