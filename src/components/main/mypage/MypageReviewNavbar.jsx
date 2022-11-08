import React, { useState } from 'react';
import { NavbarDiv, ListWrapper } from './MypageNavbar.style';
import { AiOutlineHome, AiOutlineShop, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiArticleLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { DeliveryButtonWrapper, MenuTabDiv } from './MenuTabComp.style';

export default function MypageReviewNavbar() {
  const [selMenu, setSelMenu] = useState('프로필');
  // usestate
  const [deliveryState, setDeliveryState] = useState(0);
  // function
  const deliveryStateHandler = num => {
    setDeliveryState(num);
  };
  
  const menuTab = [
    { title: '작성 가능한 리뷰', url: '/mypage/review/addlist' },
    { title: '내가 작성한 리뷰', url: '/mypage/review/myreview' },
    { title: '문의사항', url: '/mypage/review/qna' },
  ];
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
