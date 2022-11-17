import React from 'react';
import {
  MainCarouselSlider,
  CarouselImgDiv,
  SnsCarouselDiv,
  SnsDiv,
} from '../main/MainSnsCarousel.style';

export default function MainSNSLazy() {
  const settings = {
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const lazys = ['', '', '', '', ''];
  return (
    <SnsCarouselDiv>
      <div className="accountTitle lazyActive"></div>
      <MainCarouselSlider {...settings}>
        {lazys.map((sns, idx) => (
          <CarouselImgDiv key={idx}>
            <SnsDiv className="lazyActive" />
          </CarouselImgDiv>
        ))}
      </MainCarouselSlider>
    </SnsCarouselDiv>
  );
}
