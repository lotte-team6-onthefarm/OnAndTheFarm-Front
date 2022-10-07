import React, { useEffect } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import Counter from '../../common/Counter';
import RatingInputComp from '../../common/Rating';
import {
  ReviewItem,
  ReviewItemImg,
  ReviewItemContent,
  ReviewItemDetail,
  ReviewItemNumber,
  ReviewItemPrice,
} from './ReviewItem.style';

export default function ReviewItemComp(props) {
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
          <p><AiFillHeart color='red'/>{props.like} </p>
        </ReviewItemPrice>
      </ReviewItemContent>
    </ReviewItem>
  );
}
