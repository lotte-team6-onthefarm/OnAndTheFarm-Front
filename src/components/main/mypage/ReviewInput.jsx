import React, { useState } from 'react';
import { Button } from '../../common/Button';
import RatingInputComp from '../../common/Rating';
import { useMutation } from 'react-query';
import {
  ReviewAddButtonDiv,
  ReviewAddDiv,
} from '../products/ProductReview.style';
import {
  StyledReviewInput,
  StyledReviewInputDiv,
  StyledLabel,
} from './ReviewInput.style';
import { postAddReview } from '../../../apis/user/review';
import { AiFillHeart } from 'react-icons/ai';

export default function ReviewInput(props) {
  const [reviewContent, setReviewContent] = useState('');
  const [rating, setRating] = useState(5);

  const { mutate: addReview, isLoading: isAddReviewLoading } = useMutation(
    postAddReview,
    {
      onSuccess: res => {
        alert('리뷰가 추가되었습니다.');
        window.location.reload();
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const test = () => {
    const data = {
      orderProductId: props.orderProductId,
      reviewContent: reviewContent,
      reviewRate: rating,
    };
    addReview(data);
  };

  return (
    <ReviewAddDiv>
      <input
        style={{
          width: '100%',
          height: '100px',
          marginRight: '20px',
        }}
        value={reviewContent}
        onChange={e => setReviewContent(e.target.value)}
      ></input>
      <ReviewAddButtonDiv>
        <div>
          <RatingInputComp setRating={setRating}></RatingInputComp>
        </div>
        {props.reviewLikeCount && <p><AiFillHeart color='red' />  좋아요 {props.reviewLikeCount} 개</p>}
          
        <Button
          text="리뷰작성"
          color="#40AA54"
          width="130px"
          height="30px"
          onClick={test}
        ></Button>
      </ReviewAddButtonDiv>
    </ReviewAddDiv>
  );
}
