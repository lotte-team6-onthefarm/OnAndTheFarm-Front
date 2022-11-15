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
import { onErrorImg } from '../../../utils/commonFunction';
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
    () => getAllMainBanner(props.data.dataPicker, props.data.itemsId),
    {
      onSuccess: res => {},
      enabled: props.data !== {} && props.data.dataPicker !== undefined,
    },
  );

  return (
    <MainCarouselDiv>
      <h2>{props.data.accountName}</h2>
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
