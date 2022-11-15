import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllMainBanner } from '../../../apis/exhibition/mainpage';
import { displayMap } from '../../../utils/exhibition';
import InputSearch from '../../common/SearchInput';
import { MainBannerDiv, MainSnsImage, SearchInput } from './MainBanner.style';
export default function MainBanner(props) {
  const data = displayMap(props.data, 'miniBanner');
  const [searchWord, setSearchWord] = useState('');

  const { data: datas, isLoading } = useQuery(
    'getAllMainMiniBanner',
    () => getAllMainBanner(data[0].dataPicker, data[0].itemsId),
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
