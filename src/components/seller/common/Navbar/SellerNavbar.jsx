import React from 'react';
import { Head, Image, List } from './SellerNavbar.style';
import {
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineUser,
  AiOutlinePercentage,
} from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsGraphUp } from 'react-icons/bs';
import { BiUserPin } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import onandthefarmlogo from '../../../../assets/logo.png';
import { useRecoilState } from 'recoil';
import { sellerNavState } from '../../../../recoil';

export default function SellerNavbar() {
  const menus = [
    { icons: <AiOutlineHome />, title: '메인 페이지', url: '/seller' },
    { icons: <AiOutlineShop />, title: '상품 관리', url: '/seller/products' },
    { icons: <AiOutlineUser />, title: '고객 관리', url: '/seller/users' },
    { icons: <TbTruckDelivery />, title: '배송 관리', url: '/seller/delivery' },
    { icons: <BsGraphUp />, title: '통계 수치', url: '/seller/statistics' },
    {
      icons: <AiOutlinePercentage />,
      title: '프로모션',
      url: '/seller/promotion',
    },
    { icons: <BiUserPin />, title: '내 정보 관리', url: '/sellermypage' },
  ];
  const [selectMenu, setSelectMenu] = useRecoilState(sellerNavState);
  const handleMenu = num => {
    setSelectMenu(num);
  };
  console.log(selectMenu);
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
    </Head>
  );
}
