import React, { useEffect, useState } from 'react';
import logoGreen from '../../assets/logo_green.png';
import { Link, useNavigate } from 'react-router-dom';
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
import { isLoginState, preLoginUrl } from '../../recoil';
import { useMutation } from 'react-query';
import { putUserlogout } from '../../apis/user/account';

export default function MainNavbar(props) {
  const [preUrl, setPreUrl] = useRecoilState(preLoginUrl);
  const [isLogin, setisLogin] = useRecoilState(isLoginState);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const navigate = useNavigate();
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
      url: '/sns/main',
    },
    {
      title: '나의 한상',
      url: '/sns/0/mysns',
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
      color: '#16B51E',
    },
  ];
  // hook
  const logout = () => {
    logoutUser();
  };

  const { mutate: logoutUser, isLoading: isLogoutUser } = useMutation(
    putUserlogout,
    {
      onSuccess: res => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
        localStorage.removeItem('recoil-persist'); // 전역 member_id 삭제
        document.location.href = '/';
      },
      onError: err => {
        if (err.response.status === 406) {
          localStorage.removeItem('token');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('role');
          localStorage.removeItem('recoil-persist'); // 전역 member_id 삭제
          document.location.href = '/';
        }
        console.log('에러');
      },
    },
  );

  const mainUrl = () => {
    navigate('/');
  };

  const itemsBtn = url => {
    if (url === '/sns/0/mysns') {
      // 나의한상 일때
      // 로그인 페이지 보내주기
      const userToken = localStorage.getItem('token');
      if (userToken === null) {
        setPreUrl(window.location.href);
        alert('로그인이 필요한 서비스 입니다.');
        navigate('/login');
        return;
      }
    }
    navigate(url);
  };
  const iconBtn = url => {
    // 로그인 페이지 보내주기
    const userToken = localStorage.getItem('token');
    if (userToken === null) {
      setPreUrl(window.location.href);
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/login');
      return;
    }
    navigate(url);
  };
  return (
    <Navbar>
      <LogoImg
        src={logoGreen}
        alt="onandthefarmlogo"
        onClick={mainUrl}
      ></LogoImg>
      <NavbarMenu>
        {MenuItems.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                itemsBtn(item.url);
              }}
            >
              {/* <Link key={index} to={item.url}> */}
              <li>
                <NavbarMenuPtag
                  idx={index}
                  selectedMenu={selectedMenu}
                  onClick={() => setSelectedMenu(index)}
                >
                  {item.title}
                </NavbarMenuPtag>
              </li>
              {/* </Link> */}
            </div>
          );
        })}
      </NavbarMenu>
      <NavbarIcons>
        {MenuIcons.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                iconBtn(item.url);
              }}
            >
              {/* <Link key={index} to={item.url}> */}
              <NavbarIcon color={item.color}>{item.icons}</NavbarIcon>
              {/* </Link> */}
            </div>
          );
        })}
      </NavbarIcons>
      <NavbarUser>
        <Link to="/seller">
          <NavbarSeller>판매자센터 바로가기</NavbarSeller>
        </Link>
        {isLogin ? (
          <div style={{ display: 'flex' }}>
            <Link to="/mypage/profile">
              <li>
                <NavbarMenuPtag key={0} idx={0} selectedMenu={1}>
                  마이페이지
                </NavbarMenuPtag>
              </li>
            </Link>
            <li>
              <NavbarMenuPtag key={0} idx={0} selectedMenu={1} onClick={logout}>
                로그아웃
              </NavbarMenuPtag>
            </li>
            <Link to="/sns/add">
              <li>
                <NavbarMenuPtag
                  key={0}
                  idx={0}
                  selectedMenu={1}
                  style={{
                    color: 'white',
                    backgroundColor: '#16B51E',
                    borderRadius: '4px',
                  }}
                >
                  글쓰기
                </NavbarMenuPtag>
              </li>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <li>
              <NavbarMenuPtag key={0} idx={0} selectedMenu={1}>
                로그인
              </NavbarMenuPtag>
            </li>
          </Link>
        )}
      </NavbarUser>
    </Navbar>
  );
}
