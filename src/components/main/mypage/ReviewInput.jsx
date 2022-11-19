import React, { useEffect, useState } from 'react';
import { Button } from '../../common/Button';
import RatingInputComp from '../../common/Rating';
import { useMutation, useQueryClient } from 'react-query';
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
  const [rating, setRating] = useState(0);
  const queryClient = useQueryClient();
  const { mutate: addReview, isLoading: isAddReviewLoading } = useMutation(
    postAddReview,
    {
      onSuccess: res => {
        alert('리뷰가 추가되었습니다.');
        setReviewContent('');
        setRating(0);
        queryClient.invalidateQueries('AddReviewList');
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
      <div style={{ display: 'block' }}>
        <textarea
            label="리뷰내용"
            name=""
            id="answer"
            cols="50"
            rows="6"
            value={reviewContent}
        onChange={e => setReviewContent(e.target.value)}
          ></textarea>
      </div>
      <ReviewAddButtonDiv>
        <div>
          <RatingInputComp setRating={setRating}></RatingInputComp>
        </div>
        {props.reviewLikeCount && (
          <p>
            <AiFillHeart color="red" /> 좋아요 {props.reviewLikeCount} 개
          </p>
        )}

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
