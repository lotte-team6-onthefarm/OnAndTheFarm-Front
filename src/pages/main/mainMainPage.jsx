import React from 'react';
// import MainBanner from '../../components/main/main/MainBanner';
import MainCarousel from '../../components/main/main/MainCarousel';
import MainSns from '../../components/main/main/MainSns';
import MainProductsPopular from '../../components/main/products/MainProductsPopular';
import { MainContentDiv } from './mainMainPage.style';

export default function MainMainPage() {
  return (
    <MainContentDiv>
      <MainCarousel />
      {/* <MainBanner /> */}
      {/* <MainCarousel /> */}
      <MainProductsPopular />
      <MainSns />
    </MainContentDiv>
  );
}
