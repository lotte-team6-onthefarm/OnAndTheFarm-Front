import React from 'react';
import LineChart from '../../../../charts/LineChart';
import { UserBottomGraphWrapper } from './MainBottomGraph.style';

export default function UserBottomGraph(props) {
  return (
    <UserBottomGraphWrapper>
      <LineChart data={props.dayOrderCount} />
    </UserBottomGraphWrapper>
  );
}
