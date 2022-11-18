import React, { useState } from 'react';
import { Button } from '../../common/Button';
import RatingInputComp from '../../common/Rating';
import { useMutation, useQueryClient } from 'react-query';
import {
  ReviewAddButtonDiv,
  ReviewAddDiv,
} from '../products/ProductReview.style';
import { putReviewDelete, putReviewEdit } from '../../../apis/user/review';
import { AiFillHeart } from 'react-icons/ai';

export default function ReviewEditInput(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [reviewContent, setReviewContent] = useState(props.reviewContent);
  const [rating, setRating] = useState(props.reviewRate);

  const queryClient = useQueryClient();
  const { mutate: reviewEdit, isLoading: isReviewEditLoading } = useMutation(
    putReviewEdit,
    {
      onSuccess: res => {
        alert('리뷰가 수정되었습니다.');
        queryClient.invalidateQueries('MyReviewList');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  const { mutate: reviewDelete, isLoading: isReviewDeleteLoading } =
    useMutation(putReviewDelete, {
      onSuccess: res => {
        alert('리뷰가 삭제되었습니다.');
        queryClient.invalidateQueries('MyReviewList');
      },
      onError: () => {
        console.log('에러');
      },
    });

  const eidtIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const eidtReview = () => {
    const data = {
      reviewId: props.id,
      reviewContent: reviewContent,
      reviewRate: rating,
    };
    reviewEdit(data);
    setIsEdit(!isEdit);
  };
  const deleteReview = () => {
    reviewDelete({
      reviewId: props.id,
    });
    console.log('리뷰삭제');
  };

  return (
    <ReviewAddDiv>
      <div style={{ display: 'block' }}>
        <textarea
          label="답변내용"
          name=""
          id="answer"
          cols="50"
          rows="6"
          value={reviewContent}
          onChange={e => setReviewContent(e.target.value)}
          disabled={isEdit === true ? false : true}
        ></textarea>
      </div>
      <ReviewAddButtonDiv>
        <div>
          <RatingInputComp
            rate={isEdit === false && rating}
            setRating={setRating}
          ></RatingInputComp>
        </div>
        <p>
          <AiFillHeart color="red" /> 좋아요 {props.reviewLikeCount} 개
        </p>
        {isEdit === true ? (
          <Button
            text="저장"
            color="#40AA54"
            width="130px"
            height="30px"
            onClick={eidtReview}
          ></Button>
        ) : (
          <div>
            <Button
              text="리뷰수정"
              color="#40AA54"
              width="130px"
              height="30px"
              onClick={eidtIsEdit}
            ></Button>
            <Button
              text="리뷰삭제"
              color="#40AA54"
              width="130px"
              height="30px"
              onClick={deleteReview}
            ></Button>
          </div>
        )}
      </ReviewAddButtonDiv>
    </ReviewAddDiv>
  );
}
