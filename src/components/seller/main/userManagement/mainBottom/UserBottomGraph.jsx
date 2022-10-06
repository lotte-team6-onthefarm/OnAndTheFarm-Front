import React from 'react';
import LineChart from '../../../../charts/LineChart';
import { UserBottomGraphWrapper } from './MainBottomGraph.style';

export default function UserBottomGraph() {
  const data = [24, 22, 43, 23, 35, 14, 33, 37];
  return (
    <UserBottomGraphWrapper>
      <LineChart data={data}></LineChart>
    </UserBottomGraphWrapper>
  );
}
