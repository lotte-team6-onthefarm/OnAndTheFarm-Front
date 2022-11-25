import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  getSellerMyProduct,
  getSellerProduct,
} from '../../../../apis/seller/product';
import { snsNowId } from '../../../../recoil';
import NoneFeed from '../NoneFeed';
import { LikeSection } from '../SnsFeed.styled';

export default function MainProduct(props) {
  const id = useRecoilValue(snsNowId);
  const { data: productListData, isLoading: productListLoading } = useQuery(
    ['snsSellerProduct', id],
    id === '0'
      ? () => getSellerMyProduct(0, 'InfiniteQuery')
      : () => getSellerProduct({ sellerId: id, pageNo: 0 }, 'InfiniteQuery'),
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );
  return (
    <>
      {!productListLoading && (
        <LikeSection>
          <div className="FeedTitle">
            <h1>
              판매 상품 <span>{props.productCount}</span>
            </h1>
            {productListData.posts.productSelectionResponses.length === 0 ? (
              ''
            ) : (
              <div>
                <Link to={`/sns/${id}/product`}>전체보기</Link>
              </div>
            )}
          </div>
          {productListData.posts.productSelectionResponses.length === 0 ? (
            <Link to="/seller/products/add">
              <NoneFeed text="첫번째 상품을 등록해보세요" />
            </Link>
          ) : (
            <div className="FeedContents">
              {productListData.posts.productSelectionResponses.map(
                (productData, idx) => {
                  return (
                    <div key={idx}>
                      <Link
                        to={`/products/detail/${productData.productId}`}
                        className="css-gi86zd e1qgexi82"
                      >
                        <img
                          className="css-1n0kzcr e1qgexi81"
                          alt=""
                          src={productData.productMainImgSrc}
                        />
                      </Link>
                    </div>
                  );
                },
              )}
            </div>
          )}
        </LikeSection>
      )}
    </>
  );
}
