import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  FeedLikeWrapper,
  LikeCardWrapper,
  LikeImgBlock,
  LikeImgWrapper,
  LikeItemDescription,
} from './Like.styled';
import { useQuery } from 'react-query';
import { getWishList } from '../../../apis/sns/profile';
export default function Like() {
  const { data, isLoading } = useQuery('getWishList', getWishList, {
    onSuccess: () => {},
    onError: () => {},
  });
  console.log(data, '바나나');
  return (
    <>
      {!isLoading && (
        <FeedLikeWrapper>
          {data.wishProductListResponse.map((wishProduct, idx) => {
            return (
              <LikeCardWrapper key={idx}>
                <LikeImgWrapper>
                  <LikeImgBlock>
                    <img src={wishProduct.productMainImgSrc} alt="" />
                  </LikeImgBlock>
                </LikeImgWrapper>
                <LikeItemDescription>
                  <h1>
                    <span>{wishProduct.sellerName}</span>
                    <span>{wishProduct.productName}</span>
                  </h1>
                  <span className="production-item-price">
                    <span>{wishProduct.productOriginPlace}</span>
                    <span>{wishProduct.productPrice.toLocaleString()}원</span>
                  </span>
                  <div className="production-item-stats">
                    <div className="production-item-stats--icon">
                      <AiFillStar />
                    </div>
                    <strong>{wishProduct.reviewRate}</strong>
                    <span>리뷰{wishProduct.reviewCount}</span>
                  </div>
                </LikeItemDescription>
              </LikeCardWrapper>
            );
          })}
        </FeedLikeWrapper>
      )}
    </>
  );
}
