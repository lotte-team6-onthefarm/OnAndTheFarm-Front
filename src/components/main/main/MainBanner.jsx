import React from 'react';
import { useState } from 'react';
import InputSearch from '../../common/SearchInput';
import { MainBannerDiv, MainSnsImage, SearchInput } from './MainBanner.style';
export default function MainBanner(props) {
  const [searchWord, setSearchWord] = useState('');
  return (
    <MainBannerDiv>
      <a href="/sns/main">
        <MainSnsImage src="https://product-image.kurly.com/cdn-cgi/image/width=1050,format=auto/banner/event/ca075b33-c4cd-4bf1-a6dd-09325da669cc.jpg" />
      </a>
    </MainBannerDiv>
  );
}
