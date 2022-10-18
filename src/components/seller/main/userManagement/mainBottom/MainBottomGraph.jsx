import React from 'react';
import IncomeBottomGraph from './IncomeBottomGraph';
import UserBottomGraph from './UserBottomGraph';

export default function MainBottomGraph(props) {
  const menu = props.menu;
  return (
    <div style={{ height: '400px' }}>
      {menu === '0' && <UserBottomGraph dayOrderCount={props.dayOrderCount} />}
      {menu === '1' && <IncomeBottomGraph dayPrices={props.dayPrices} />}
    </div>
  );
}
