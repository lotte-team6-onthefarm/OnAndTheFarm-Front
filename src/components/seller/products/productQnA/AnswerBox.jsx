import React from 'react';
import { useState } from 'react';
import AnswerTextBox from './AnswerTextBox';
import { AnswerBoxWrapper, AnswerBtnBox } from './ProductQnAs.style';

export default function AnswerBox(props) {
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
    <AnswerBoxWrapper>
      {button ? (
        <AnswerTextBox
          setButton={setButton}
          closeBtn={closeBtn}
          data={props.data}
        />
      ) : (
        <AnswerBtnBox onClick={buttonHandler}>
          {productQnaStatus === 'completed' ? '답변보기' : '답변달기'}
        </AnswerBtnBox>
      )}
    </AnswerBoxWrapper>
  );
}
