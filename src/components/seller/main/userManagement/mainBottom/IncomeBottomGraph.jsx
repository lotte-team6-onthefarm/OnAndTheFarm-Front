import React from 'react';
import LineChart from '../../../../charts/LineChart';
import { UserBottomGraphWrapper } from './MainBottomGraph.style';

export default function IncomeBottomGraph() {
  const data = [40000, 80000, 50000, 150000, 70000, 100000, 120000, 60000];
  return (
    <UserBottomGraphWrapper>
      <LineChart data={data}></LineChart>
    </UserBottomGraphWrapper>
  );
}
