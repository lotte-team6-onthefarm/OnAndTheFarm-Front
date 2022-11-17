import React from 'react';
import {
  MainImageWrapper,
  MainSnsBlock,
  MainSnsWrapper,
} from '../main/MainSns.styled';

export default function MainFarmFluencerLazy() {
  const lazys = ['', '', '', ''];
  return (
    <MainSnsWrapper>
      <div className="accountTitle lazyActive" />
      <MainSnsBlock>
        {lazys.map((sns, idx) => (
          <MainImageWrapper key={idx} className="lazyActive" />
        ))}
      </MainSnsBlock>
    </MainSnsWrapper>
  );
}
