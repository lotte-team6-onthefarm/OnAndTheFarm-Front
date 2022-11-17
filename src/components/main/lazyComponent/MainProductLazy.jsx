import React from 'react';
import {
  MainProductsDiv,
  MainProductsSubjectDiv,
  PopularProductsDiv,
} from '../products/MainProductsPopular.style';

export default function MainProductLazy() {
  const lazys = ['', '', '', '', ''];
  return (
    <MainProductsDiv>
      <MainProductsSubjectDiv>
        <div className="accountTitle lazyActive" />
      </MainProductsSubjectDiv>
      <PopularProductsDiv>
        {lazys.map((product, index) => {
          return (
            <div
              style={{
                width: '200px',
                height: '300px',
                margin: '0 7.5px 0px',
                padding: '0 5px',
                borderRadius: '4px',
              }}
              className="lazyActive"
              key={index}
            ></div>
          );
        })}
      </PopularProductsDiv>
    </MainProductsDiv>
  );
}
