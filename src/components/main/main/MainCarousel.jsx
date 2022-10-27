import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  MainCarouselDiv,
  MainCarouselSlider,
  CarouselImgDiv,
  CarouselImg,
} from './MainCarousel.style';
// import goguma from '../../../assets/imgs/banner_고구마.jpg';
// import shine from '../../../assets/imgs/banner_샤인머스캣.jpg';
// import onion from '../../../assets/imgs/banner_양파.jpg';

export default function MainCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const items = [
    // {
    //   id: 1,
    //   url: goguma,
    // },
    // {
    //   id: 2,
    //   url: shine,
    // },
    // {
    //   id: 3,
    //   url: onion,
    // },
  ];

  return (
    <MainCarouselDiv>
      {/* <h2>농산물 큐레이팅</h2> */}
      <MainCarouselSlider {...settings}>
        {items.map(item => {
          return (
            <div key={item.id}>
              <CarouselImgDiv>
                <CarouselImg src={item.url} />
              </CarouselImgDiv>
            </div>
          );
        })}
      </MainCarouselSlider>
    </MainCarouselDiv>
  );
}
