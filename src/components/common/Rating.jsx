import React, { useEffect, useState } from 'react';
import { RatingInputDiv, RatingButton } from './Rating.style';

export default function RatingInput(props) {
  
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  // useEffect(() => {
  //   if(props.rate){
  //     setRating(props.rate);
  //   }
  // }, []);
  return (
    <RatingInputDiv>
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
            <span className="star">&#9733;</span>
          </RatingButton>
        );
      })}
    </RatingInputDiv>
  );
}
