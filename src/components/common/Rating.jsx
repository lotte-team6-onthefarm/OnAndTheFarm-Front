import React, { useState } from 'react';
import { RatingInputDiv, RatingButton } from './Rating.style';

export default function RatingInputComp(props) {
  
  const [rate, setRate] = useState(props.rate!==""?(props.rate===0?0:props.rate):5);
  const [hover, setHover] = useState(0);
  const changeRating = (index) => {
    console.log(index)
    setRate(index)
    props.setRating(index)
  }

  return (
    <RatingInputDiv font={props.font} rate={props.rate}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <RatingButton
            disabled={props.rate||props.rate===0}
            type="button"
            key={index}
            className={index <= (hover || rate) ? 'on' : 'off'}
            onClick={() => changeRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rate)}
          >
            <span>&#9733;</span>
          </RatingButton>
        );
      })}
    </RatingInputDiv>
  );
}
