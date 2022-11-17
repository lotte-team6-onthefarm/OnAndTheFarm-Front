import React from 'react';
import { useQuery } from 'react-query';
import { getAllMainBanner } from '../../../apis/exhibition/mainpage';
import { MainBannerDiv, MainSnsImage } from './MainBanner.style';
export default function MainBanner(props) {
  const { data: datas, isLoading } = useQuery(
    'getAllMainMiniBanner',
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
    <MainBannerDiv>
      {!isLoading && (
        <a href="/sns/main">
          <MainSnsImage src={datas.bannerATypeResponses[0].imgSrc} alt="" />
        </a>
      )}
    </MainBannerDiv>
  );
}
