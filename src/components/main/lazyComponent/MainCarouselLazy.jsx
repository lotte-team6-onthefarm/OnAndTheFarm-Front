import React from 'react';
import {
  CarouselImg,
  CarouselImgDiv,
  MainCarouselDiv,
  MainCarouselSlider,
} from '../main/MainCarousel.style';

export default function MainCarouselLazy() {
  return (
    <MainCarouselDiv>
      <MainCarouselSlider className="lazyActive skeleton-list-item">
        <CarouselImgDiv>
          <CarouselImg />
        </CarouselImgDiv>
      </MainCarouselSlider>
    </MainCarouselDiv>
  );
}
