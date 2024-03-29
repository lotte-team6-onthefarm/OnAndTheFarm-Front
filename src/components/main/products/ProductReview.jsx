import React, { useState } from 'react';
import { useQuery } from 'react-query';
import RatingInputComp from '../../common/Rating';
import ReviewItemComp from '../review/ReviewItem';
import {
  ReviewDiv,
  ReviewStatisticsDiv,
  ReviewCountDiv,
  ReviewTotalDiv,
  ReviewCountListDiv,
  ReviewListDiv,
  SelectDiv,
  RateDiv,
} from './ProductReview.style';
import {
  getProductReviewCount,
  getReviewList,
} from '../../../apis/user/review';
import Pagination from '../../common/Pagination';
import { EmptyTable } from '../../seller/main/popularProducts/MainPopularProducts.style';
import { upNumber } from '../../../utils/commonFunction';

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

  const selectFilter = e => {
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
              후기리뷰
              <span>
                {' '}
                {productReviewCount.reviewCount.toLocaleString()}
              </span>{' '}
            </h4>
            <SelectDiv>
              <select
                onChange={selectFilter}
                value={selectedFilter}
                className="select"
              >
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
              <span>{upNumber(productReviewCount.reviewRate)}</span>
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
                <span>
                  {productReviewCount.reviewFiveCount.toLocaleString()}
                </span>
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
                <span>
                  {productReviewCount.reviewFourCount.toLocaleString()}
                </span>
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
                <span>
                  {productReviewCount.reviewThreeCount.toLocaleString()}
                </span>
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
                <span>
                  {productReviewCount.reviewTwoCount.toLocaleString()}
                </span>
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
                <span>
                  {productReviewCount.reviewOneCount.toLocaleString()}
                </span>
              </ReviewCountDiv>
            </ReviewCountListDiv>
          </ReviewStatisticsDiv>
        </div>
      )}

      {!isGetReviewList &&
        (reviewList.reviewSelectionResponses.length === 0 ? (
          <EmptyTable height="100px">
            <h3>현재 등록된 리뷰가 없습니다.</h3>
          </EmptyTable>
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
