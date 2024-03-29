import React, { useState } from 'react';
import { NavbarDiv, ListWrapper } from './MypageNavbar.style';
import { AiOutlineHome, AiOutlineShop, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiArticleLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function MypageNavbar() {
  const [selMenu, setSelMenu] = useState('프로필');
  const menus = [
    { icons: <CgProfile />, title: '프로필', url: '/mypage/profile' },
    {
      icons: <RiArticleLine />,
      title: '나의 리뷰',
      url: '/mypage/review/addlist',
    },
    {
      icons: <TbTruckDelivery />,
      title: '주문관리',
      url: '/mypage/orders/list',
    },
  ];
  return (
    <NavbarDiv>
      {menus.map((menu, idx) => {
        return (
          <div key={idx}>
            <Link to={menu.url} key={idx}>
              <ListWrapper
                onClick={() => {
                  setSelMenu(menu.title);
                }}
                className={selMenu === menu.title ? 'selectedMypageMenu' : ''}
              >
                <div className="icons">{menu.icons}</div>
                <div className="right">
                  <div>{menu.title}</div>
                </div>
              </ListWrapper>
            </Link>
          </div>
        );
      })}
    </NavbarDiv>
  );
}
