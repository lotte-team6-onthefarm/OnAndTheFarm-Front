import React from 'react';
import LineChart from '../../../../charts/LineChart';
import { IncomeBottomGraphWrapper } from './MainBottomGraph.style';

export default function IncomeBottomGraph() {
  return (
    <IncomeBottomGraphWrapper>
      <LineChart></LineChart>
    </IncomeBottomGraphWrapper>
  );
}
