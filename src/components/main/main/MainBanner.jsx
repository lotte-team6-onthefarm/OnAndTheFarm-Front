import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllMainBanner } from '../../../apis/exhibition/mainpage';
import InputSearch from '../../common/SearchInput';
import { MainBannerDiv, MainSnsImage, SearchInput } from './MainBanner.style';
export default function MainBanner(props) {
  const [searchWord, setSearchWord] = useState('');

  const { data: datas, isLoading } = useQuery(
    'getAllMainMiniBanner',
    () => getAllMainBanner(props.data.dataPicker, props.data.itemsId),
    {
      onSuccess: res => {
        console.log(res.bannerATypeResponses, 'miniBannerRes');
      },
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
