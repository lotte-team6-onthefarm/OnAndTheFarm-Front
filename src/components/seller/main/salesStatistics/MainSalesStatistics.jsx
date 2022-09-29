import React from 'react';
import High from '../../../charts/High';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';

export default function MainSalesStatistics() {
  return (
    <WhiteWrapper width="100%">
      <SubTitle color="#CABDFF" title="판매 통계" />
      <High></High>
    </WhiteWrapper>
  );
}
