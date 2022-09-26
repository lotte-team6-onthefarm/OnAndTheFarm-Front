import React from 'react';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';

export default function ProductsActive() {
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#CABDFF" title="상품 활동 통계" />
      <div style={{ height: '200px' }}></div>
    </WhiteWrapper>
  );
}
