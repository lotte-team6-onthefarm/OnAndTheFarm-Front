import React from 'react';
import LineChart from '../../../../charts/LineChart';
import { UserBottomGraphWrapper } from './MainBottomGraph.style';

export default function IncomeBottomGraph(props) {
  return (
    <UserBottomGraphWrapper>
      <LineChart data={props.dayPrices} name="수익" />
    </UserBottomGraphWrapper>
  );
}
