import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Button } from '../../common/Button';
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
} from './ProductReview.style copy';

export default function ProductReviewComp(props) {
  const items = [
    {
      id: 1,
      name: '천예원',
      content:
        '정말 맛있는데요 ? 우리집 레오는 과일을 안먹는데도 불구하고 옆에서 한입 달라고 애교를 부릴 정도의 당도에요. 재주문의사 무조건 있습니다 ~~!',
      rate: 4,
      date: '12',
      like: '24',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277665/P512007DE92C4154D55ADF24400888FF8E97013E948F47C574A0F9C99D9E24DF9/file/dims/optimize',
    },
    {
      id: 2,
      name: '손은성',
      content:
        '둥글둥글 왕감자 강원도 핵감자 너무 커서 하나를 못 다 먹겠죠 감자 감자 왕감자 참말 참말 좋아요 못 다 먹겠죠 언제다먹나 빨리먹어야지 ~~~',
      rate: 3,
      date: '25',
      like: '13',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/277236/P7C67A0F32EC59C38BBC7C73B004388F250AED8CD63AA23D3B80AD2335EA5AE60/file/dims/optimize',
    },
    {
      id: 3,
      name: '최진영',
      content:
        '당근 JMT 나는 당근을 싫어하지만 이 당근은 좋아요. 카레 요리에 넣어먹고, 닭볶음탐에 넣어먹고, 감자채 볶음에도 넣어먹었어요 I like it ~ like it like it ~~~',
      rate: 5,
      date: '25',
      like: '13',
      url: 'https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/276873/P75260B86794950F9B3895FCA46D6F5D7ABF08A546585DF0082E2F542351E5B0C/file/dims/optimize',
    },
  ];
  return (
    <ReviewDiv>
      <div>
        <h4>후기리뷰</h4>
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
          <ReviewAddDiv>
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
          </ReviewAddDiv>
        </div>
      </div>
      <ReviewListDiv>
        {items.map((item, index) => {
          return (
            <ReviewItemComp
              key={index}
              id={item.id}
              url={item.url}
              name={item.name}
              content={item.content}
              rate={item.rate}
              date={item.date}
              like={item.like}
            ></ReviewItemComp>
          );
        })}
      </ReviewListDiv>
    </ReviewDiv>
  );
}
