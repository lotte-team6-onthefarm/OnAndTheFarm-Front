import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { getProducts } from '../../../apis/user/product';
import { Button } from '../../common/Button';
import Product from '../../common/Product';
import {
  MainProductsDiv,
  MainProductsSubjectDiv,
  PopularProductsDiv,
} from './MainProductsPopular.style';

export default function MainProductsPopular(props) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    let data = {
      url: 'orderby/soldcount/',
      page: 0,
    };
    getProduct(data);
  }, []);

  const { mutate: getProduct, isLoading: isGetProduct } = useMutation(
    getProducts,
    {
      onSuccess: res => {
        setProductList(res.data);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  return (
    <MainProductsDiv>
      <MainProductsSubjectDiv>
        <p>인기상품</p>
        <Button
          text="전체보기"
          color="#40AA54"
          width="100px"
          margin="0 10px 0"
        ></Button>
      </MainProductsSubjectDiv>
      <PopularProductsDiv>
        {productList.map((product, index) => {
          return (
            <Product key={index} product={product} padding="0 5px"></Product>
          );
        })}
      </PopularProductsDiv>
    </MainProductsDiv>
  );
}
