import React from 'react';
import ColumnChart from '../../../charts/ColumnChart';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';

export default function MainSalesStatistics() {
  return (
    <WhiteWrapper width="100%">
      <SubTitle color="#CABDFF" title="상품 조회수" />
      <ColumnChart></ColumnChart>
    </WhiteWrapper>
  );
}
