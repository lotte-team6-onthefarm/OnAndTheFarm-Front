import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeliveryButtonWrapper, MenuTabDiv } from './MenuTabComp.style';

export default function MenuTabComp(props) {
  // usestate
  const [deliveryState, setDeliveryState] = useState(0);

  const menuTab = [
    { title: '작성 가능한 리뷰', url: '/mypage/review/addlist' },
    { title: '내가 작성한 리뷰', url: '/mypage/review/myreview' },
    { title: '문의사항', url: '/mypage/review/qna' },
  ];

  // function
  const deliveryStateHandler = num => {
    setDeliveryState(num);
  };

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
