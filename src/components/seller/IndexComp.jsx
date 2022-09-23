import React, { useState } from 'react';
import { MainWrapper } from './common/Box.style';
import SellerNavbar from './common/Navbar/SellerNavbar';
import SellerDeliveryComp from './delivery/SellerDelivery';
import SellerMain from './main/SellerMain';
import SellerProducts from './products/SellerProducts';
import SellerPromotion from './promotion/SellerPromotion';
import SellerStatistics from './statistics/SellerStatistics';
import SellerUsersComp from './users/SellerUsers';

export default function IndexComp() {
  const comp = [
    <SellerMain />,
    <SellerProducts />,
    <SellerUsersComp />,
    <SellerDeliveryComp />,
    <SellerStatistics />,
    <SellerPromotion />,
  ];
  const [selectMenu, setSelectMenu] = useState(0);
  const handleMenu = num => {
    setSelectMenu(num);
  };
  return (
    <MainWrapper>
      <SellerNavbar selectMenu={selectMenu} handleMenu={handleMenu} />
      {comp[selectMenu]}
    </MainWrapper>
  );
}
