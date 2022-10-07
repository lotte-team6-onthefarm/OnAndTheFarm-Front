import { JWTapiUser, ApiUser } from '.';

// 상품 불러오기
const getLikeList = async () => {
  const response = await JWTapiUser.get(`mypage/wish`);
  return response.data.data;
};

export { getLikeList };
