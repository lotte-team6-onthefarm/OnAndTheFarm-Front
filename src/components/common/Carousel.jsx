import React from 'react';
import { MainCarouselSlider } from '../../components/main/main/MainCarousel.style';
import { CarouselImg, CarouselImgDiv } from './Carousel.styled';

export default function Carousel(props) {
  console.log(props.images, '캐로셀');
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <MainCarouselSlider {...settings}>
      {props.images.map((image, idx) => {
        return (
          <CarouselImgDiv height={props.height} key={idx}>
            <CarouselImg src={image} />
          </CarouselImgDiv>
        );
      })}
    </MainCarouselSlider>
  );
}
