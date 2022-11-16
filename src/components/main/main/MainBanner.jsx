import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllMainBanner } from '../../../apis/exhibition/mainpage';
import { displayMap } from '../../../utils/exhibition';
import InputSearch from '../../common/SearchInput';
import { MainBannerDiv, MainSnsImage, SearchInput } from './MainBanner.style';
export default function MainBanner(props) {
  // const data = displayMap(props.data, 'miniBanner');

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
  console.log(datas, 'sss');
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
