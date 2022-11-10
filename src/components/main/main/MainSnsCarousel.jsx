import React, { lazy, Suspense } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  MainCarouselDiv,
  MainCarouselSlider,
  CarouselImgDiv,
  CarouselImg,
  UserNameDiv,
  SnsDiv,
  RankDiv,
} from './MainSnsCarousel.style';
import { getFeedList } from '../../../apis/sns/main';
import { useQuery } from 'react-query';
import { onErrorImg } from '../../../utils/commonFunction';
const Image = lazy(() => import('./Img'));

export default function MainSnsCarousel(props) {
  const settings = {
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const {
    isLoading: isGetFeedList,
    refetch: getFeedListRefetch,
    data: snsList,
  } = useQuery(
    'getFeedList',
    ({ pageParam = 0 }) => getFeedList({ url: '/like', searchWord: '' }, 0),
    {
      refetchOnWindowFocus: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );
  return (
    <MainCarouselDiv>
      <h2>인기 게시글</h2>
      <MainCarouselSlider {...settings}>
        {!isGetFeedList &&
          snsList.posts.map((sns, idx) => (
            <CarouselImgDiv key={idx}>
              <a href="/sns/main">
                <SnsDiv>
                  <Suspense
                    fallback={
                      <Image
                        src="https://colorate.azurewebsites.net/SwatchColor/B2B2B2"
                        onError={onErrorImg}
                      />
                    }
                  >
                    <Image src={sns.feedImageSrc} onError={onErrorImg} />
                  </Suspense>
                  {/* <CarouselImg src={sns.feedImageSrc} /> */}
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
              </a>
              <UserNameDiv>
                <span>{sns.memberName}</span>
              </UserNameDiv>
            </CarouselImgDiv>
          ))}
      </MainCarouselSlider>
    </MainCarouselDiv>
  );
}
