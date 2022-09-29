import React from 'react';
import { Head, Image, List, PlusIcon } from './SellerNavbar.style';
import {
  AiOutlineHome,
  AiOutlineShop,
  AiOutlinePercentage,
  AiOutlinePlus,
} from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsGraphUp } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import onandthefarmlogo from '../../../../assets/logo.png';
import { useRecoilState } from 'recoil';
import { sellerNavState } from '../../../../recoil';
import { useEffect } from 'react';

export default function SellerNavbar() {
  const menus = [
    { icons: <AiOutlineHome />, title: '메인 페이지', url: '/seller' },
    { icons: <AiOutlineShop />, title: '상품 관리', url: '/seller/products' },
    {
      icons: <TbTruckDelivery />,
      title: '주문/배송 관리',
      url: '/seller/delivery',
    },
    { icons: <BsGraphUp />, title: '통계 수치', url: '/seller/statistics' },
    {
      icons: <AiOutlinePercentage />,
      title: '프로모션',
      url: '/seller/promotion',
    },
    // { icons: <BiUserPin />, title: '내 정보 관리', url: '/sellermypage' },
  ];
  const [selectMenu, setSelectMenu] = useRecoilState(sellerNavState);
  const handleMenu = num => {
    setSelectMenu(num);
  };
  const navigate = useNavigate();

  //useEffect
  // useEffect(() => {
  //   // 종료 후 다시 들어왔을 때 저장된 menu 보여주기
  //   navigate(menus[selectMenu].url);
  // }, []);

  //function
  const productUrl = () => {
    navigate('/seller/products/add');
  };
  return (
    <Head>
      <Link to="/seller">
        <Image src={onandthefarmlogo}></Image>
      </Link>
      {menus.map((menu, idx) => {
        return (
          <Link to={menu.url} key={idx}>
            <List
              onClick={() => {
                handleMenu(idx);
              }}
              check={idx === selectMenu ? '1' : '0'}
              color={idx === selectMenu ? '#F2F2F2' : 'white'}
            >
              <div className="icons">{menu.icons}</div>
              {menu.title}
            </List>
          </Link>
        );
      })}
      {/* 상품등록 이동 버튼 */}
      <PlusIcon
        onClick={() => {
          handleMenu(1);
        }}
      >
        <AiOutlinePlus onClick={productUrl} />
      </PlusIcon>
    </Head>
  );
}
