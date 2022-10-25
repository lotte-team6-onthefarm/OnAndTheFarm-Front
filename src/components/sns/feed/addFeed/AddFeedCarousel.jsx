import React from 'react';
import { MainCarouselSlider } from '../../../main/main/MainCarousel.style';
import { AddFeedCarouselImg, AddFeedCarouselImgDiv } from './AddFeed.styled';

export default function AddFeedCarousel(props) {
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
          <AddFeedCarouselImgDiv height={props.height} key={idx}>
            <AddFeedCarouselImg
              src={image}
              onClick={() => {
                props.productSelect(idx);
                props.setModal(true);
              }}
            />
          </AddFeedCarouselImgDiv>
        );
      })}
    </MainCarouselSlider>
  );
}
