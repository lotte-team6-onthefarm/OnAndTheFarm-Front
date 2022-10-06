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
    let url = {
      path: 'all/newest/',
      page: 0,
    };
    getProduct(url);
  }, []);

  const { mutate: getProduct, isLoading: isGetProduct } = useMutation(
    getProducts,
    {
      onSuccess: res => {
        console.log(res.data);
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
          text="더보기"
          color="#40AA54"
          width="130px"
          margin="0 10px 0"
        ></Button>
      </MainProductsSubjectDiv>
      <PopularProductsDiv>
        {productList.map((product, index) => {
          return <Product key={index} product={product}></Product>;
        })}
      </PopularProductsDiv>
    </MainProductsDiv>
  );
}
