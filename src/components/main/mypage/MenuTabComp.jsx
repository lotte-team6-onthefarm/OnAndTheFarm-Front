import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeliveryButtonWrapper, MenuTabDiv } from './MenuTabComp.style';

export default function MenuTabComp(props) {
  // usestate
  const [deliveryState, setDeliveryState] = useState(0);
  const [menuTab, setMenuTabState] = useState(props.menuTab);
  // function
  const deliveryStateHandler = num => {
    setDeliveryState(num);
  };

  console.log('delive', deliveryState);

  return (
    <MenuTabDiv>
      {menuTab.map((menu, idx) => {
        return (
          <DeliveryButtonWrapper state={deliveryState} key={idx} idx={idx}>
            <Link to={menu.url}>
              <div onClick={() => deliveryStateHandler(idx)}>{menu.title}</div>
            </Link>
          </DeliveryButtonWrapper>
        );
      })}
    </MenuTabDiv>
  );
}
