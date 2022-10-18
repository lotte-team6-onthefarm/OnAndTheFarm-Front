import React from 'react';
import { NavbarDiv, ListWrapper } from './MypageNavbar.style';
import { AiOutlineHome, AiOutlineShop, AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { RiArticleLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { NavbarProfileDiv } from './NavbarProfile.style';
import NavbarPofileComp from './NavbarProfile';

export default function MypageNavbar() {
  const menus = [
    { icons: <AiOutlineHome />, title: '마이페이지', url: '/mypage' },
    { icons: <CgProfile />, title: '프로필', url: '/mypage/profile' },
    // { icons: <AiOutlineHeart />, title: '찜목록', url: '/mypage/likes' },
    {
      icons: <RiArticleLine />,
      title: '나의 리뷰',
      url: '/mypage/review/addlist',
    },
    // {
    //   icons: <RiArticleLine />,
    //   title: '내글목록',
    //   url: '/mypage/posts',
    // },
    {
      icons: <TbTruckDelivery />,
      title: '주문관리',
      url: '/mypage/orders/list',
    },
  ];
  return (
    <NavbarDiv>
      {/* <NavbarPofileComp /> */}
      {menus.map((menu, idx) => {
        return (
          <div key={idx}>
            <Link to={menu.url} key={idx}>
              <ListWrapper>
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
