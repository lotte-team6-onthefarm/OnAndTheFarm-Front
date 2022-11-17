import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  MainCarouselDiv,
  MainCarouselSlider,
  CarouselImgDiv,
  CarouselImg,
} from './MainCarousel.style';
import { useQuery } from 'react-query';
import { getAllMainBanner } from '../../../apis/exhibition/mainpage';

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

  const { data: datas, isLoading } = useQuery(
    'getAllMainBanner',
    () =>
      getAllMainBanner(
        props.data.exhibitionDataPickerId,
        props.data.exhibitionItemsId,
      ),
    {
      onSuccess: res => {},
      enabled: props.data !== {},
    },
  );

  return (
    <MainCarouselDiv>
      {!isLoading ? (
        <MainCarouselSlider {...settings}>
          {datas.bannerATypeResponses.map((data, idx) => {
            return (
              <div key={idx}>
                <CarouselImgDiv>
                  <CarouselImg src={data.imgSrc} />
                </CarouselImgDiv>
              </div>
            );
          })}
        </MainCarouselSlider>
      ) : (
        <MainCarouselSlider {...settings} className="lazyActive">
          <CarouselImgDiv>
            <CarouselImg />
          </CarouselImgDiv>
        </MainCarouselSlider>
      )}
    </MainCarouselDiv>
  );
}
