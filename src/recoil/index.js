import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

// 셀러 navbar 상태 관리
export const sellerNavState = atom({
  key: 'sellerNav',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});