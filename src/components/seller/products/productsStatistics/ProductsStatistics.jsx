import React from 'react';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';

export default function ProductsStatistics() {
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#B1E5FC" title="전체 상품" />
      <div style={{ height: '200px' }}></div>
    </WhiteWrapper>
  );
}
