import React, { useState } from 'react';
import { MainCarouselSlider } from '../../components/main/main/MainCarousel.style';
import { CarouselImg, CarouselImgDiv } from './Carousel.styled';

export default function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: false,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const chageImg = e => {
    props.changeFeedImg(props.images[e].feedImageId)
  };
  

  return (
    <MainCarouselSlider
      {...settings}
      afterChange={chageImg}
      // beforeChange={(currentSlide, nextSlide) => {
      //   setCurrentIndex(nextSlide);
      // }}
    >
      
      {props.images.map((image, idx) => {
        return (
          <CarouselImgDiv height={props.height} key={idx}>
            <CarouselImg src={image.feedImageSrc} />
          </CarouselImgDiv>
        );
      })}
    </MainCarouselSlider>
  );
}
