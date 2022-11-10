import React from 'react';
import { useQuery } from 'react-query';
import { getMainProduct } from '../../../apis/user/product';
import { PopularProductsDiv } from '../../main/products/MainProductsPopular.style';
import ProductComp from './ProductComp';

export default function Product10001() {
  const { isLoading: isGetMainProduct, data: productList } = useQuery(
    'getMainProduct',
    getMainProduct,
    {
      refetchOnWindowFocus: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );

  return (
    <PopularProductsDiv>
      {!isGetMainProduct &&
        productList.productSelectionResponses.map((product, index) => {
          return (
            <ProductComp
              key={index}
              product={product}
              padding="0 5px"
            ></ProductComp>
          );
        })}
    </PopularProductsDiv>
  );
}
