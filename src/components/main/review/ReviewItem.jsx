import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { postCancelLikeReview, postLikeReview } from '../../../apis/user/review';
import { useMutation } from 'react-query';
import RatingInputComp from '../../common/Rating';
import {
  ReviewItem,
  ReviewItemImg,
  ReviewItemContent,
  ReviewItemDetail,
  ReviewItemPrice,
} from './ReviewItem.style';

export default function ReviewItemComp(props) {

  const [isAvailableUp, setIsAvailableUp] = useState(props.isAvailableUp);

  const { mutate: likeReview, isLoading: isLikeReviewLoading } = useMutation(
    postLikeReview,
    {
      onSuccess: res => {
        alert('좋아요');
        setIsAvailableUp(!isAvailableUp)
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  
  const { mutate: cancelLikeReview, isLoading: isCancelLikeReviewLoading } = useMutation(
    postCancelLikeReview,
    {
      onSuccess: res => {
        alert('좋아요 취소');
        setIsAvailableUp(!isAvailableUp)
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const reviewLike = () => {
    if (props.isAvailableUp){
      likeReview({reviewId:props.id})
    } else {
      cancelLikeReview({reviewId:props.id})
    }
    
  }
  
  return (
    <ReviewItem>
      <ReviewItemImg width="70px" height="70px" src={props.url} alt="" />
      <ReviewItemContent>
        <ReviewItemDetail>
          <h4>{props.name}</h4>
          <p>{props.content}</p>
        </ReviewItemDetail>
        <ReviewItemPrice>
        <RatingInputComp rate={props.rate}/>
        
          <p>{props.date} 일전</p>
          <p  onClick={reviewLike}><AiFillHeart color={isAvailableUp?'red':'lightgray'} />  좋아요 {props.like} 개</p>
        </ReviewItemPrice>
      </ReviewItemContent>
    </ReviewItem>
  );
}
