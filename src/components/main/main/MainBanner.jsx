import React from 'react';
import { useState } from 'react';
import { MainBannerDiv, SearchInput } from './MainBanner.style';
export default function MainBanner(props) {
  const [searchWord, setSearchWord] = useState('');
  return (
    <MainBannerDiv>
      <div>
        <p>원하시는 과일이 있나요 ?</p>
        <SearchInput
          id="search"
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          placeholder="원하시는 상품을 검색해주세요"
          type="text"
        ></SearchInput>
      </div>
    </MainBannerDiv>
  );
}
