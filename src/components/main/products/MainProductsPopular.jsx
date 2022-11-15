import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getAllMainProduct } from '../../../apis/exhibition/mainpage';
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

  const { data: datas, isLoading } = useQuery(
    'getAllMainProduct',
    () => getAllMainProduct(props.data.dataPicker, props.data.itemsId),
    {
      onSuccess: res => {
        console.log(res.btypeResponses, 'productRes');
      },
      enabled: props.data !== {},
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
          onClick={productsUrl}
        ></Button>
      </MainProductsSubjectDiv>
      {!isLoading && (
        <PopularProductsDiv>
          {datas.btypeResponses.map((product, index) => {
            return (
              <ProductComp
                key={index}
                product={product}
                padding="0 5px"
              ></ProductComp>
            );
          })}
        </PopularProductsDiv>
      )}
    </MainProductsDiv>
  );
}
