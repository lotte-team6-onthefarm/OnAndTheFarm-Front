import React from 'react';
import { MainBannerDiv, MainContentDiv } from './mainMainPage.style';
import { StyledInput } from '../../components/common/Input.style';

export default function MainMainPage() {
  return <MainContentDiv>
    <MainBannerDiv>
      <p>sakdjta;dks;l</p>
      <StyledInput id="{props.id}" value="" placeholder="원하시는 상품을 검색해주세요"></StyledInput>
    </MainBannerDiv>
  </MainContentDiv>;
}
