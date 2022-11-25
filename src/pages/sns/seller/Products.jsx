import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  getSellerMyProduct,
  getSellerProduct,
} from '../../../apis/seller/product';
import { snsNowId } from '../../../recoil';
import {
  FeedLikeWrapper,
  LikeCardWrapper,
  LikeImgBlock,
  LikeImgWrapper,
  LikeItemDescription,
} from '../like/Like.styled';

export default function Products() {
  const id = useRecoilValue(snsNowId);
  const { ref, inView } = useInView();
  const {
    data,
    // refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['snsSellerProductList', id],

    id === '0'
      ? ({ pageParam = 0 }) => getSellerMyProduct(pageParam, 'InfiniteQuery')
      : ({ pageParam = 0 }) =>
          getSellerProduct({ sellerId: id, pageNo: data }, 'InfiniteQuery'),
    {
      keepPreviousData: true,
      getNextPageParam: lastPage =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      onSuccess: res => {},
    },
  );
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);
  const navigate = useNavigate();
  const productDetailNavigator = feedId => {
    navigate(`/products/detail/${feedId}`);
  };
  // posts.productSelectionResponses

  return (
    <>
      {!isLoading && (
        <FeedLikeWrapper>
          {data.pages.map((page, idx) =>
            page.posts.productSelectionResponses.map((post, idx) => (
              <LikeCardWrapper
                key={idx}
                onClick={() => {
                  productDetailNavigator(post.productId);
                }}
              >
                <LikeImgWrapper>
                  <LikeImgBlock>
                    <img src={post.productMainImgSrc} alt="" />
                  </LikeImgBlock>
                </LikeImgWrapper>
                <LikeItemDescription>
                  <h1>
                    <span>{post.sellerName}</span>
                    <span>{post.productName}</span>
                  </h1>
                  <span className="production-item-price">
                    <span>{post.productOriginPlace}</span>
                    <span>{post.productPrice.toLocaleString()}원</span>
                  </span>
                  <div className="production-item-stats">
                    <div className="production-item-stats--icon">
                      <AiFillStar />
                    </div>
                    <strong>{post.reviewRate}</strong>
                    <span>리뷰{post.productReviewCount}</span>
                  </div>
                </LikeItemDescription>
              </LikeCardWrapper>
            )),
          )}
          {(!isFetchingNextPage || !isPreviousData) && <div ref={ref}></div>}
        </FeedLikeWrapper>
      )}
    </>
  );
}
