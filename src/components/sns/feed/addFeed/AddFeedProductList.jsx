import React from 'react';
import { useQuery } from 'react-query';
import { getFeedProduct } from '../../../../apis/sns/content';
import { GreenButton } from '../../../common/Button.style';
import { AddFeedProductListWrapper } from './AddFeed.styled';

export default function AddFeedProductList(props) {
  // ================================ 등록가능상품 useQuery
  const { data: products, isLoading } = useQuery(
    'feedProduct',
    getFeedProduct,
    {
      onSuccess: () => {},
    },
  );
  // ================================

  return (
    <AddFeedProductListWrapper>
      <h3>구매 상품 리스트</h3>
      {!isLoading && (
        <>
          {products.map((product, idx) => (
            <div key={idx} className="feedProductListBlock">
              <img src={product.productMainImgSrc} alt="" />
              <div className="feedProductListDetail">
                <div>{product.sellerShopName}</div>
                <div>{product.productName}</div>
              </div>
              <GreenButton
                width="70px"
                onClick={() => {
                  props.productListHandler(product.productId);
                  props.setModal(false);
                }}
              >
                선택
              </GreenButton>
            </div>
          ))}
        </>
      )}
    </AddFeedProductListWrapper>
  );
}
