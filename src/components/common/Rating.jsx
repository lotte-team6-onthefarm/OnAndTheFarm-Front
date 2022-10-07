import React, { useState } from 'react';
import { RatingInputDiv, RatingButton } from './Rating.style';

export default function RatingInputComp(props) {
  
  const [rating, setRating] = useState(props.rate?props.rate:5);
  const [hover, setHover] = useState(0);

  return (
    <RatingInputDiv font={props.font} rate={props.rate}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <RatingButton
            disabled={props.rate}
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span>&#9733;</span>
          </RatingButton>
        );
      })}
    </RatingInputDiv>
  );
}
