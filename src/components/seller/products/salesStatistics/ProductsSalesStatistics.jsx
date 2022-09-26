import React from 'react';
import { WhiteWrapper } from '../../common/Box.style';
import { IconBox, IconWrapper } from '../../common/Icon.style';
import SubTitle from '../../common/SubTitle';

export default function ProductsSalesStatistics() {
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#FFBC99" title="판매 통계" />
      <div>
        <IconWrapper>
          <IconBox></IconBox>
        </IconWrapper>
      </div>
    </WhiteWrapper>
  );
}
