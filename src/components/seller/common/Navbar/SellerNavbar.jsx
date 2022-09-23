import React, { useState } from 'react';
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

export default function SellerNavbar(props) {
  const menus = [
    { icons: <AiOutlineHome />, title: '메인 페이지' },
    { icons: <AiOutlineShop />, title: '상품 관리' },
    { icons: <AiOutlineUser />, title: '고객 관리' },
    { icons: <TbTruckDelivery />, title: '배송 관리' },
    { icons: <BsGraphUp />, title: '통계 수치' },
    { icons: <AiOutlinePercentage />, title: '프로모션' },
    { icons: <BiUserPin />, title: '내 정보 관리' },
  ];
  // const [selectMenu, setSelectMenu] = useState(0);
  // const handleMenu = num => {
  //   setSelectMenu(num);
  // };
  return (
    <Head>
      <Image src="logo.png"></Image>
      {menus.map((menu, idx) => {
        return (
          <List
            onClick={() => {
              props.handleMenu(idx);
            }}
            check={idx === props.selectMenu ? '1' : '0'}
            color={idx === props.selectMenu ? '#F2F2F2' : 'white'}
            key={idx}
          >
            <div className="icons">{menu.icons}</div>
            {menu.title}
          </List>
        );
      })}
    </Head>
  );
}
