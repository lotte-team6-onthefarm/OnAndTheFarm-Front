import React from 'react';
import { useState } from 'react';
import InputSearch from '../../common/SearchInput';
import { MainBannerDiv, MainSnsImage, SearchInput } from './MainBanner.style';
export default function MainBanner(props) {
  const [searchWord, setSearchWord] = useState('');
  return (
    <MainBannerDiv>
      <a href="/sns/main">
        <MainSnsImage src="https://image.ohou.se/i/bucketplace-v2-development/uploads/home/marketing/166753684104186222.png?h=144" />
      </a>
    </MainBannerDiv>
  );
}
