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
  const lazys = ['', '', '', '', ''];
  const navigate = useNavigate();
  const productsUrl = () => {
    navigate('products');
  };

  const { data: datas, isLoading } = useQuery(
    ['getAllMainProduct', props.data.exhibitionId],
    () =>
      getAllMainProduct(
        props.data.exhibitionDataPickerId,
        props.data.exhibitionItemsId,
      ),
    {
      onSuccess: res => {},
      enabled: props.data !== {},
    },
  );

  return (
    <MainProductsDiv>
      <MainProductsSubjectDiv>
        <div className="accountTitle">{props.data.exhibitionAccountName}</div>
        <Button
          text="전체보기"
          color="#40AA54"
          width="100px"
          margin="0 10px 0"
          onClick={productsUrl}
        ></Button>
      </MainProductsSubjectDiv>
      {!isLoading ? (
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
      ) : (
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
                className="lazyActive skeleton-list-item"
                key={index}
              />
            );
          })}
        </PopularProductsDiv>
      )}
    </MainProductsDiv>
  );
}
