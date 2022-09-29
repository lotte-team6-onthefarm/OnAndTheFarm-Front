import React from 'react';
import IncomeBottomGraph from './IncomeBottomGraph';
import UserBottomGraph from './UserBottomGraph';

export default function MainBottomGraph(props) {
  const menu = props.menu;
  return (
    <div style={{ height: '400px' }}>
      {menu === '0' && <UserBottomGraph />}
      {menu === '1' && <IncomeBottomGraph />}
    </div>
  );
}
