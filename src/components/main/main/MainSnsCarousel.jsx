import React, { lazy, Suspense } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  MainCarouselSlider,
  CarouselImgDiv,
  UserNameDiv,
  SnsDiv,
  RankDiv,
  SnsCarouselDiv,
} from './MainSnsCarousel.style';
import { useQuery } from 'react-query';
import { onErrorImg } from '../../../utils/commonFunction';
import { getAllMainSNS } from '../../../apis/exhibition/mainpage';
import Image from './Img';
import { Navigate, useNavigate } from 'react-router-dom';

export default function MainSnsCarousel(props) {
  const navigate = useNavigate();
  const lazys = ['', '', '', '', ''];
  const { data: datas, isLoading } = useQuery(
    'getAllMainSNS',
    () =>
      getAllMainSNS(
        props.data.exhibitionDataPickerId,
        props.data.exhibitionItemsId,
      ),
    {
      onSuccess: res => {},
      enabled: props.data !== {},
    },
  );

  const settings = {
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const feedNav = feedId => {
    navigate(`/sns/detail/${feedId}`);
  };

  return (
    <SnsCarouselDiv>
      <div className="accountTitle">{props.data.exhibitionAccountName}</div>
      {!isLoading ? (
        <MainCarouselSlider {...settings}>
          {datas.snsATypeResponses.map((sns, idx) => (
            <CarouselImgDiv key={idx}>
              <span
                onClick={() => {
                  feedNav(sns.feedId);
                }}
              >
                <SnsDiv>
                  <Image src={sns.feedImageSrc} onError={onErrorImg} />
                  <RankDiv>
                    <div>
                      <svg width="26" height="30" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m13 24.25-13 5V0h26v29.25l-13-5Z"
                          fill="#40AA54"
                        ></path>
                      </svg>
                      <span>{idx + 1}</span>
                    </div>
                  </RankDiv>
                </SnsDiv>
              </span>
              <UserNameDiv>
                <span>{sns.memberName}</span>
              </UserNameDiv>
            </CarouselImgDiv>
          ))}
        </MainCarouselSlider>
      ) : (
        <MainCarouselSlider {...settings}>
          {lazys.map((sns, idx) => (
            <CarouselImgDiv key={idx}>
              <SnsDiv className="lazyActive skeleton-list-item" />
            </CarouselImgDiv>
          ))}
        </MainCarouselSlider>
      )}
    </SnsCarouselDiv>
  );
}
