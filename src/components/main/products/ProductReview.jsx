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
    onSuccess: res => {},
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4>
            후기리뷰<span>4,103</span>{' '}
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
            <RatingInputComp rate={5} font="13px" />
            <span>4.6</span>
          </ReviewTotalDiv>
          <ReviewCountListDiv>
            <ReviewCountDiv>
              <span>
                5점
              </span>
              <RateDiv>
                <div></div>
                <div
                  style={{"width": "71.9055%"}}
                ></div>
              </RateDiv>
              <span>
                2,951
              </span>
            </ReviewCountDiv>
            <ReviewCountDiv>
              <span>
                5점
              </span>
              <RateDiv>
                <div></div>
                <div
                  style={{"width": "71.9055%"}}
                ></div>
              </RateDiv>
              <span>
                2,951
              </span>
            </ReviewCountDiv>
            <ReviewCountDiv>
              <span>
                5점
              </span>
              <RateDiv>
                <div></div>
                <div
                  style={{"width": "71.9055%"}}
                ></div>
              </RateDiv>
              <span>
                2,951
              </span>
            </ReviewCountDiv>
            <ReviewCountDiv>
              <span>
                5점
              </span>
              <RateDiv>
                <div></div>
                <div
                  style={{"width": "71.9055%"}}
                ></div>
              </RateDiv>
              <span>
                2,951
              </span>
            </ReviewCountDiv>
            <ReviewCountDiv>
              <span>
                5점
              </span>
              <RateDiv>
                <div></div>
                <div
                  style={{"width": "71.9055%"}}
                ></div>
              </RateDiv>
              <span>
                2,951
              </span>
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
