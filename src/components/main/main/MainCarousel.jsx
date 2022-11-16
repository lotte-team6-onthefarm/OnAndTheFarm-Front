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
import { displayMap } from '../../../utils/exhibition';

export default function MainCarousel(props) {
  console.log(props.data, '메인배너');
  // const data = displayMap(props.data, 'banner');
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
      {!isLoading && (
        <MainCarouselSlider {...settings}>
          {datas.bannerATypeResponses.map((data, idx) => {
            return (
              <div key={idx}>
                <CarouselImgDiv>
                  <CarouselImg src={data.imgSrc} />
                  {/* <CarouselImg src="" onError={onErrorImg} /> */}
                </CarouselImgDiv>
              </div>
            );
          })}
        </MainCarouselSlider>
      )}
    </MainCarouselDiv>
  );
}
