import React from 'react';
import { Star } from './ReviewStar.style';

// 평점 별점 보여주는 Component
export default function ReviewStar(props) {
  return (
    <Star style={{ height: '30%' }}>
      <span className="review-list__rating">
        <span className="review-list__rating__unit">
          {props.reviewRate === '5' && (
            <span
              className="review-list__rating__active"
              style={{ width: '100%' }}
            ></span>
          )}
          {props.reviewRate === '4' && (
            <span
              className="review-list__rating__active"
              style={{ width: '80%' }}
            ></span>
          )}
          {props.reviewRate === '3' && (
            <span
              className="review-list__rating__active"
              style={{ width: '60%' }}
            ></span>
          )}
          {props.reviewRate === '2' && (
            <span
              className="review-list__rating__active"
              style={{ width: '40%' }}
            ></span>
          )}
          {props.reviewRate === '1' && (
            <span
              className="review-list__rating__active"
              style={{ width: '20%' }}
            ></span>
          )}
        </span>
      </span>
    </Star>
  );
}
