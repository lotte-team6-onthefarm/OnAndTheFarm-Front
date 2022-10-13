import React from 'react';
import { useState } from 'react';
import { AnswerBoxDiv, AnswerBtnDiv } from '../../../pages/main/mypage/mainMypageReview.style';
import AnswerTextBox from '../../seller/products/productQnA/AnswerBox';

export default function WriteReviewBox(props) {
  const selectedAddHandler = props.selectedAddHandler;
  const selectedDelHandler = props.selectedDelHandler;
  const productQnaStatus = props.data.productQnaStatus;
  const idx = props.idx;
  const [button, setButton] = useState(false);
  const buttonHandler = () => {
    setButton(!button);
    selectedAddHandler(idx);
  };

  const closeBtn = () => {
    setButton(false);
    selectedDelHandler(idx);
  };

  return (
    <AnswerBoxDiv>
      {button ? (
        <AnswerTextBox
          setButton={setButton}
          closeBtn={closeBtn}
          data={props.data}
        />
      ) : (
        <AnswerBtnDiv onClick={buttonHandler}>
          {productQnaStatus === 'completed' ? '답변보기' : '답변달기'}
        </AnswerBtnDiv>
      )}
    </AnswerBoxDiv>
  );
}
