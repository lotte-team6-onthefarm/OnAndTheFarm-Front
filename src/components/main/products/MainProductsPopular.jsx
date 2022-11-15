import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getAllMainProduct } from '../../../apis/exhibition/mainpage';
import { displayMap } from '../../../utils/exhibition';
import { Button } from '../../common/Button';
import ProductComp from '../../display/Product/ProductComp';
import {
  MainProductsDiv,
  MainProductsSubjectDiv,
  PopularProductsDiv,
} from './MainProductsPopular.style';

export default function MainProductsPopular(props) {
  const data = displayMap(props.data, 'product');
  // props.dataTool
  const navigate = useNavigate();
  const productsUrl = () => {
    navigate('products');
  };

  const { data: datas, isLoading } = useQuery(
    'getAllMainProduct',
    () => getAllMainProduct(data[0].dataPicker, data[0].itemsId),
    {
      onSuccess: res => {},
      enabled: props.data !== {},
    },
  );

  return (
    <MainProductsDiv>
      <MainProductsSubjectDiv>
        <p>{data[0].accountName}</p>
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
          {datas.responses.map((product, index) => {
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
