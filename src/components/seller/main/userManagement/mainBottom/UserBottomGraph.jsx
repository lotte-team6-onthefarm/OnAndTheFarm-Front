import React from 'react';
import { UserImgWrapper } from '../../../common/sellerCommon.style';
import {
  UserBottomGraphBlock,
  UserBottomGraphWrapper,
} from './MainBottomGraph.style';

export default function UserBottomGraph() {
  const datas = ['손은성', '홍길동', '최민식'];
  return (
    <UserBottomGraphWrapper>
      {datas.map((data, idx) => {
        return (
          <UserBottomGraphBlock key={idx}>
            <UserImgWrapper
              width="60px"
              src={require('../../../../../assets/products/복숭아.png')}
            />
            {data}
          </UserBottomGraphBlock>
        );
      })}
    </UserBottomGraphWrapper>
  );
}
