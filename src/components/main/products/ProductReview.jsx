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
} from './ProductReview.style';
import { getReviewList } from '../../../apis/user/review';

export default function ProductReviewComp(props) {
  const filterList = ['최신순', '좋아요순'];
  const [selectedFilter, setSelectedFilter] = useState('최신순');

  let data = { filter: 'newest', productId: props.productDetailId, page: 0 };
  const {
    isLoading: isGetReviewList,
    refetch: getReviewListRefetch,
    data: reviewList,
  } = useQuery('reviewList', () => getReviewList(data), {
    refetchOnWindowFocus: true,
    onSuccess: res => {
    },
    onError: () => {
      console.log('에러');
    },
  });

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
      <div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <h4>후기리뷰</h4>
        <div>
          <select onChange={test} value={selectedFilter}>
            {filterList.map((filter, idx) => {
              return (
                <option value={filter} key={idx}>
                  {filter}
                </option>
              );
            })}
          </select>
        </div>
        </div>
        
        <hr />
        <div style={{ display: 'flex', margin: '20px auto', width: '90%' }}>
          <ReviewStatisticsDiv>
            <ReviewTotalDiv>140개의 리뷰</ReviewTotalDiv>
            <ReviewCountListDiv>
              <ReviewCountDiv>
                <RatingInputComp rate={5} font="13px" />
                <span>1330명</span>
              </ReviewCountDiv>
              <ReviewCountDiv>
                <RatingInputComp rate={4} font="13px" />
                <span>10명</span>
              </ReviewCountDiv>
              <ReviewCountDiv>
                <RatingInputComp rate={3} font="13px" />
                <span>102명</span>
              </ReviewCountDiv>
              <ReviewCountDiv>
                <RatingInputComp rate={2} font="13px" />
                <span>10명</span>
              </ReviewCountDiv>
              <ReviewCountDiv>
                <RatingInputComp rate={1} font="13px" />
                <span>10명</span>
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
      </div>
      {!isGetReviewList && (
        <ReviewListDiv>
          {reviewList.map((item, index) => {
            return (
              <ReviewItemComp
                key={index}
                id={item.reviewId}
                url="https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277665/P512007DE92C4154D55ADF24400888FF8E97013E948F47C574A0F9C99D9E24DF9/file/dims/optimize"
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
      )}
    </ReviewDiv>
  );
}
