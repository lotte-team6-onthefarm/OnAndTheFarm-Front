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
import { useRecoilValue } from 'recoil';
import { snsNowId } from '../../../recoil';
import { useNavigate } from 'react-router-dom';
export default function Like() {
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
    ['getWishList', id],
    ({ pageParam = 0 }) => getWishList(pageParam, id),
    {
      refetchOnMount: true,
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

  return (
    <>
      {!isLoading && (
        <FeedLikeWrapper>
          {data.pages.map((page, idx) =>
            page.posts.map((post, idx) => (
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
                    <span>리뷰{post.reviewCount}</span>
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
