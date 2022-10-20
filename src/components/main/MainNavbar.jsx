import React, { useEffect, useState } from 'react';
import onandthefarmlogo from '../../assets/Logo.svg';
import logoGreen from '../../assets/logo_green.png';
import {
  Link,
  useHistory,
  Router,
  Redirect,
  useNavigate,
  unstable_HistoryRouter,
} from 'react-router-dom';
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
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../recoil';

export default function MainNavbar(props) {
  const [isLogin, setisLogin] = useRecoilState(isLoginState);
  // useeffect
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token.length > 0) {
      setisLogin(true);
    }
  }, []);
  const MenuItems = [
    {
      title: '메인 페이지',
      url: '/',
    },
    {
      title: '상품 전체보기',
      url: '/products',
    },
    {
      title: '오늘한상',
      url: '/sns',
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
  // hook
  const logout = () => {
    localStorage.removeItem('token');
    document.location.href = '/';
  };
  return (
    <Navbar>
      <LogoImg src={logoGreen} alt="onandthefarmlogo"></LogoImg>
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
        {isLogin ? (
          <div style={{ display: 'flex' }}>
            <Link to="/mypage">
              <li>
                <NavbarMenuPtag>마이페이지</NavbarMenuPtag>
              </li>
            </Link>
            <li>
              <NavbarMenuPtag onClick={logout}>로그아웃</NavbarMenuPtag>
            </li>
          </div>
        ) : (
          <Link to="/login">
            <li>
              <NavbarMenuPtag>로그인</NavbarMenuPtag>
            </li>
          </Link>
        )}
      </NavbarUser>
    </Navbar>
  );
}
