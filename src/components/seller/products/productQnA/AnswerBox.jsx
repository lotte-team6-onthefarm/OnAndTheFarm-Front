import React from 'react';
import { useState } from 'react';
import AnswerTextBox from './AnswerTextBox';
import { AnswerBoxWrapper, AnswerBtnBox } from './ProductQnAs.style';

export default function AnswerBox(props) {
  const selectedAddHandler = props.selectedAddHandler;
  const selectedDelHandler = props.selectedDelHandler;
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
        <AnswerTextBox setButton={setButton} closeBtn={closeBtn} />
      ) : (
        <AnswerBtnBox onClick={buttonHandler}>답글달기</AnswerBtnBox>
      )}
    </AnswerBoxWrapper>
  );
}
