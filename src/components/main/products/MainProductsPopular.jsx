import React from 'react';
import { Button } from '../../common/Button';
import Product from '../../common/Product';
import {
  MainProductsDiv,
  MainProductsSubjectDiv,
  PopularProductsDiv,
} from './MainProductsPopular.style';

export default function MainProductsPopular(props) {
  const MenuItems = [
    {
      title: '메인페이지',
      url: '/',
    },
    {
      title: '상품전제보기',
      url: '/products',
    },
    {
      title: '농장일기',
      url: '/posts',
    },
    {
      title: '공동구매',
      url: '/groupbuy',
    },
    {
      title: '공동구매',
      url: '/groupbuy',
    },
    {
      title: '공동구매',
      url: '/groupbuy',
    },
  ];
  return (
    <MainProductsDiv>
      <MainProductsSubjectDiv>
        <p>인기상품</p>
        <Button
          text="더보기"
          color="#40AA54"
          width="130px"
          margin="0 10px 0"
        ></Button>
      </MainProductsSubjectDiv>
      <PopularProductsDiv>
        {MenuItems.map((item, index) => {
          return <Product key={index}></Product>;
        })}
      </PopularProductsDiv>
    </MainProductsDiv>
  );
}
