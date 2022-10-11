import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { postLikeReview } from '../../../apis/user/review';
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

  const { mutate: likeReview, isLoading: isLikeReviewLoading } = useMutation(
    postLikeReview,
    {
      onSuccess: res => {
        alert('좋아요');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const reviewLike = () => {
    likeReview({reviewId:props.id})
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
          <p  onClick={reviewLike}><AiFillHeart color='red' />{props.like} </p>
        </ReviewItemPrice>
      </ReviewItemContent>
    </ReviewItem>
  );
}
