import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../common/Button';
import ProductComp from '../../display/Product/ProductComp';
import {
  MainProductsDiv,
  MainProductsSubjectDiv,
  PopularProductsDiv,
} from './MainProductsPopular.style';

export default function MainProductsPopular(props) {
  // props.dataTool
  const navigate = useNavigate();
  const productsUrl = () => {
    navigate('products');
  };
  return (
    <MainProductsDiv>
      <MainProductsSubjectDiv>
        <p>인기상품</p>
        <Button
          text="전체보기"
          color="#40AA54"
          width="100px"
          margin="0 10px 0"
          onClick={productsUrl}
        ></Button>
      </MainProductsSubjectDiv>
      <PopularProductsDiv>
        {props.dataTool.map((product, index) => {
          return (
            <ProductComp
              key={index}
              product={product}
              padding="0 5px"
            ></ProductComp>
          );
        })}
      </PopularProductsDiv>
    </MainProductsDiv>
  );
}
