import React from 'react';
import {
  MainCategoryBlock,
  MainCategoryImage,
  MainCategoryWrapper,
  MainImageA,
  MainImageWrapper,
} from '../category/MainCategory.styled';

export default function MainBadgeLazy() {
  const lazys = ['', '', '', '', '', '', '', ''];
  return (
    <MainCategoryWrapper>
      <div>
        <>
          <div className="accountTitle lazyActive"></div>
          <MainCategoryBlock>
            {lazys.map((item, index) => (
              <MainImageWrapper key={index} className="lazyActive">
                <MainImageA href={item.connectUrl}>
                  <MainCategoryImage src={item.imgSrc} alt="" />
                </MainImageA>
              </MainImageWrapper>
            ))}
          </MainCategoryBlock>
        </>
      </div>
    </MainCategoryWrapper>
  );
}
