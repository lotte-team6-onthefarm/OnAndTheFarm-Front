import React from 'react';
import onandthefarmlogo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import {
  LogoImg,
  Navbar,
  NavbarIcon,
  NavbarIcons,
  NavbarMenu,
  NavbarMenuPtag,
  NavbarSeller,
  NavbarUser,
} from './MainNavbar.style';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

export default function MainNavbar(props) {
  const MenuItems = [
    {
      title: '메인페이지',
      url: '/',
    },
    {
      title: '상품전제보기',
      url: '/products',
    },
    {
      title: '농장일기',
      url: '/posts',
    },
    {
      title: '공동구매',
      url: '/groupbuy',
    },
  ];
  const MenuIcons = [
    {
      icons: <AiOutlineHeart />,
      title: '찜목록',
      url: '/like',
      color: '#FF6D59',
    },
    {
      icons: <AiOutlineShoppingCart />,
      title: '장바구니',
      url: '/cart',
      color: '#40AA54',
    },
  ];
  return (
    <Navbar>
      <LogoImg src={onandthefarmlogo} alt="onandthefarmlogo"></LogoImg>
      <NavbarMenu>
        {MenuItems.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              <li>
                <NavbarMenuPtag>{item.title}</NavbarMenuPtag>
              </li>
            </Link>
          );
        })}
      </NavbarMenu>
      <NavbarIcons>
        {MenuIcons.map((item, index) => {
          return (
            <Link key={index} to={item.url}>
              <NavbarIcon color={item.color}>{item.icons}</NavbarIcon>
            </Link>
          );
        })}
      </NavbarIcons>
      <NavbarUser>
        <Link to="/seller">
          <NavbarSeller>판매자센터 바로가기</NavbarSeller>
        </Link>
        <Link to="/login">
          <li>
            <NavbarMenuPtag>로그인</NavbarMenuPtag>
          </li>
        </Link>
      </NavbarUser>
    </Navbar>
  );
}
