import React, { useEffect } from 'react';
import {
  Head,
  Image,
  ListWrapper,
  PlusIcon,
  SubListWrapper,
} from './SellerNavbar.style';
import {
  AiOutlineHome,
  AiOutlineShop,
  AiOutlinePlus,
  AiOutlineGlobal,
} from 'react-icons/ai';
import { BiSubdirectoryRight } from 'react-icons/bi';
import { TbLogout, TbTruckDelivery } from 'react-icons/tb';
import { BsGraphUp } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import onandthefarmlogo from '../../../../assets/logo.png';
import { useRecoilState } from 'recoil';
import { sellerNavState } from '../../../../recoil';
import { RiArrowDownSLine, RiBillLine } from 'react-icons/ri';
import { useState } from 'react';

export default function SellerNavbar() {
  const menus = [
    { icons: <AiOutlineHome />, title: '메인 페이지', url: '/seller' },
    { icons: <AiOutlineShop />, title: '상품 관리', url: '/seller/products' },
    { icons: <AiOutlineShop />, title: '상품 리스트', url: '/seller/products' },
    {
      icons: <AiOutlineShop />,
      title: '리뷰 관리',
      url: '/seller/products/reviews',
    },
    {
      icons: <AiOutlineShop />,
      title: 'QnA 관리',
      url: '/seller/products/qnas',
    },
    { icons: <TbTruckDelivery />, title: '주문 관리', url: '/seller/delivery' },
    { icons: <RiBillLine />, title: '취소/반품 관리', url: '/seller/order' },
    // { icons: <BsGraphUp />, title: '통계 수치', url: '/seller/statistics' },
    {
      icons: <AiOutlineGlobal />,
      title: 'SNS 이동',
      url: '/sns/0/mysns',
    },
  ];
  const [selectMenu, setSelectMenu] = useRecoilState(sellerNavState);
  const [productSub, setProductSub] = useState(false);
  const handleMenu = num => {
    setSelectMenu(num);
  };
  const productSubHandler = () => {
    setProductSub(!productSub);
  };
  const navigate = useNavigate();

  //function
  const productUrl = () => {
    navigate('/seller/products/add');
  };

  // 토큰 확인
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/seller/login');
    } else {
      // console.log(token);
    }
  }, [navigate]);

  const logoutBtn = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    document.location.href = '/seller';
  };
  return (
    <Head>
      <Link to="/seller">
        <Image src={onandthefarmlogo}></Image>
      </Link>
      {menus.map((menu, idx) => {
        return (
          <div key={idx}>
            {idx === 2 || idx === 3 || idx === 4 ? (
              <SubListWrapper productSub={productSub}>
                <Link to={menu.url} key={idx}>
                  <ListWrapper
                    onClick={() => {
                      handleMenu(idx);
                    }}
                    check={idx === selectMenu ? '1' : '0'}
                    color={idx === selectMenu ? '#F2F2F2' : 'white'}
                  >
                    <div className="icons">
                      <BiSubdirectoryRight />
                    </div>
                    <div className="right">
                      <div>{menu.title}</div>
                    </div>
                  </ListWrapper>
                </Link>
              </SubListWrapper>
            ) : (
              <>
                {idx === 1 ? (
                  <ListWrapper
                    onClick={() => {
                      productSubHandler();
                    }}
                    productSub={productSub}
                  >
                    <div className="icons">{menu.icons}</div>
                    <div className="right">
                      <div>{menu.title}</div>
                      <div className="icons" onClick={productSubHandler}>
                        <RiArrowDownSLine />
                      </div>
                    </div>
                  </ListWrapper>
                ) : (
                  <Link to={menu.url} key={idx}>
                    <ListWrapper
                      onClick={() => {
                        handleMenu(idx);
                      }}
                      check={idx === selectMenu ? '1' : '0'}
                      color={idx === selectMenu ? '#F2F2F2' : 'white'}
                      productSub={productSub}
                    >
                      <div className="icons">{menu.icons}</div>
                      <div className="right">
                        <div>{menu.title}</div>
                      </div>
                    </ListWrapper>
                  </Link>
                )}
              </>
            )}
          </div>
        );
      })}
      <ListWrapper
        onClick={logoutBtn}
        // check={idx === selectMenu ? '1' : '0'}
        color="white"
        productSub={productSub}
      >
        <div className="icons">
          <TbLogout />
        </div>
        <div className="right">
          <div>로그아웃</div>
        </div>
      </ListWrapper>
      {/* 상품등록 이동 버튼 */}
      <PlusIcon
        onClick={() => {
          handleMenu(1);
        }}
      >
        <AiOutlinePlus onClick={productUrl} />
      </PlusIcon>
      {/* 셀러 로그아웃 navbar 형태로 만들기 */}
      {/* <div onClick={logoutBtn} className="sellerNavbarLogout">
        로그아웃
      </div> */}
    </Head>
  );
}
