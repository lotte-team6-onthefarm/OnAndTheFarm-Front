import React, { useState } from 'react';
import { NavbarDiv, ListWrapper } from './MypageNavbar.style';
import { AiOutlineHome, AiOutlineShop, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiArticleLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { DeliveryButtonWrapper, MenuTabDiv } from './MenuTabComp.style';

export default function MypageOrderNavbar() {
  const [selMenu, setSelMenu] = useState('프로필');
  // usestate
  const [deliveryState, setDeliveryState] = useState(0);
  // function
  const deliveryStateHandler = num => {
    setDeliveryState(num);
  };
  
  const menuTab = [
    { title: '주문내역', url: '/mypage/orders/list' },
    { title: '주문취소/반품 내역', url: '/mypage/orders/cancel' },
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
