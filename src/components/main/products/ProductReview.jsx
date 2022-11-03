import React, { useState } from 'react';
import { Button } from '../../common/Button';
import { useMutation, useQuery } from 'react-query';
import RatingInputComp from '../../common/Rating';
import ReviewItemComp from '../review/ReviewItem';
import {
  ReviewDiv,
  ReviewStatisticsDiv,
  ReviewCountDiv,
  ReviewTotalDiv,
  ReviewCountListDiv,
  ReviewAddDiv,
  ReviewAddButtonDiv,
  ReviewListDiv,
  SelectDiv,
  RateDiv,
} from './ProductReview.style';
import {
  getProductReviewCount,
  getReviewList,
} from '../../../apis/user/review';
import NoneFeed from '../../sns/main/NoneFeed';
import Pagination from '../../common/Pagination';

export default function ProductReviewComp(props) {
  const filterList = ['최신순', '좋아요순'];
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  let data = {
    filter: 'newest',
    productId: props.productDetailId,
    page: nowPage,
  };

  const {
    isLoading: isGetReviewList,
    refetch: getReviewListRefetch,
    data: reviewList,
  } = useQuery(['reviewList', nowPage], () => getReviewList(data), {
    refetchOnWindowFocus: true,
    keepPreviousData: true,
    onSuccess: res => {
      setNowPage(res.pageVo.nowPage);
      setTotalPage(res.pageVo.totalPage);
    },
    onError: () => {
      console.log('에러');
    },
  });

  const {
    isLoading: isProductReviewCount,
    refetch: getProductReviewCountRefetch,
    data: productReviewCount,
  } = useQuery(
    'productReviewCount',
    () => getProductReviewCount(data.productId),
    {
      refetchOnWindowFocus: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );

  const test = e => {
    setSelectedFilter(e.target.value);
    if (e.target.value === '최신순') {
      data = { filter: 'newest', productId: props.productDetailId, page: 0 };
      getReviewListRefetch(data);
    } else if (e.target.value === '좋아요순') {
      data = { filter: 'likecount', productId: props.productDetailId, page: 0 };
      getReviewListRefetch(data);
    }
  };

  return (
    <ReviewDiv>
      {!isProductReviewCount && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h4>
              후기리뷰<span>{productReviewCount.reviewCount}</span>{' '}
            </h4>
            <SelectDiv>
              <select onChange={test} value={selectedFilter} className="select">
                {filterList.map((filter, idx) => {
                  return (
                    <option value={filter} key={idx}>
                      {filter}
                    </option>
                  );
                })}
              </select>
            </SelectDiv>
          </div>

          <hr />
          <ReviewStatisticsDiv>
            <ReviewTotalDiv>
              <RatingInputComp
                rate={productReviewCount.reviewRate}
                font="13px"
              />
              <span>{productReviewCount.reviewRate}</span>
            </ReviewTotalDiv>
            <ReviewCountListDiv>
              <ReviewCountDiv>
                <span>5점</span>
                <RateDiv>
                  <div></div>
                  <div
                    style={{
                      width: `${
                        (productReviewCount.reviewFiveCount /
                          productReviewCount.reviewCount) *
                        100
                      }%`,
                    }}
                  ></div>
                </RateDiv>
                <span>{productReviewCount.reviewFiveCount}</span>
              </ReviewCountDiv>
              <ReviewCountDiv>
                <span>4점</span>
                <RateDiv>
                  <div></div>
                  <div
                    style={{
                      width: `${
                        (productReviewCount.reviewFourCount /
                          productReviewCount.reviewCount) *
                        100
                      }%`,
                    }}
                  ></div>
                </RateDiv>
                <span>{productReviewCount.reviewFourCount}</span>
              </ReviewCountDiv>
              <ReviewCountDiv>
                <span>3점</span>
                <RateDiv>
                  <div></div>
                  <div
                    style={{
                      width: `${
                        (productReviewCount.reviewThreeCount /
                          productReviewCount.reviewCount) *
                        100
                      }%`,
                    }}
                  ></div>
                </RateDiv>
                <span>{productReviewCount.reviewThreeCount}</span>
              </ReviewCountDiv>
              <ReviewCountDiv>
                <span>2점</span>
                <RateDiv>
                  <div></div>
                  <div
                    style={{
                      width: `${
                        (productReviewCount.reviewTwoCount /
                          productReviewCount.reviewCount) *
                        100
                      }%`,
                    }}
                  ></div>
                </RateDiv>
                <span>{productReviewCount.reviewTwoCount}</span>
              </ReviewCountDiv>
              <ReviewCountDiv>
                <span>1점&nbsp;</span>
                <RateDiv>
                  <div></div>
                  <div
                    style={{
                      width: `${
                        (productReviewCount.reviewOneCount /
                          productReviewCount.reviewCount) *
                        100
                      }%`,
                    }}
                  ></div>
                </RateDiv>
                <span>{productReviewCount.reviewOneCount}</span>
              </ReviewCountDiv>
            </ReviewCountListDiv>
          </ReviewStatisticsDiv>
          {/* <ReviewAddDiv>
            <input
              style={{ width: '100%', height: '100px', marginRight: '20px' }}
            ></input>
            <ReviewAddButtonDiv>
              <div>
                <RatingInputComp></RatingInputComp>
              </div>
              <Button
                text="사진첨부"
                color="#40AA54"
                width="130px"
                height="30px"
              ></Button>
              <Button
                text="리뷰작성"
                color="#40AA54"
                width="130px"
                height="30px"
              ></Button>
            </ReviewAddButtonDiv>
          </ReviewAddDiv> */}
        </div>
      )}

      {!isGetReviewList &&
        (reviewList.length === 0 ? (
          <NoneFeed text="리뷰가 없습니다" />
        ) : (
          <ReviewListDiv>
            {reviewList.reviewSelectionResponses.map((item, index) => {
              return (
                <ReviewItemComp
                  key={index}
                  id={item.reviewId}
                  url={item.userProfileImg}
                  name={item.userName}
                  content={item.reviewContent}
                  rate={item.reviewRate}
                  date={item.reviewCreatedAt}
                  like={item.reviewLikeCount}
                  isAvailableUp={item.isAvailableUp}
                ></ReviewItemComp>
              );
            })}
          </ReviewListDiv>
        ))}
      {totalPage !== 0 && (
        <Pagination
          nowPage={nowPage + 1}
          totalPage={totalPage}
          setPage={setNowPage}
        ></Pagination>
      )}
    </ReviewDiv>
  );
}
