import React, { useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  FeedLikeWrapper,
  LikeCardWrapper,
  LikeImgBlock,
  LikeImgWrapper,
  LikeItemDescription,
} from './Like.styled';
import { useInfiniteQuery } from 'react-query';
import { getWishList } from '../../../apis/sns/profile';
import { useInView } from 'react-intersection-observer';
export default function Like() {
  const { ref, inView } = useInView();
  const {
    data,
    // refetch,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    isPreviousData,
  } = useInfiniteQuery(
    ['getWishList'],
    ({ pageParam = 0 }) => getWishList(pageParam),
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

  // const { data, isLoading } = useQuery('getWishList', getWishList, {
  //   onSuccess: () => {},
  //   onError: () => {},
  // });
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
          {!isFetchingNextPage || (!isPreviousData && <div ref={ref}></div>)}
        </FeedLikeWrapper>
      )}
    </>
  );
}
