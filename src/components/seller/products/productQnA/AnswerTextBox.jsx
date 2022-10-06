import React from 'react';
import { BiSubdirectoryRight } from 'react-icons/bi';
import { BlueButton, WhiteButton } from '../../../common/Button.style';
import { AnswerTextWrapper } from './ProductQnAs.style';

export default function AnswerTextBox(props) {
  const closeBtn = props.closeBtn;
  return (
    <AnswerTextWrapper>
      <div className="textInput">
        <BiSubdirectoryRight />
        <textarea type="text" placeholder="답변을 작성해주세요" />
      </div>
      <div className="btn">
        <div>
          <BlueButton height="30px">등록</BlueButton>
          <WhiteButton height="30px" onClick={closeBtn}>
            닫기
          </WhiteButton>
        </div>
      </div>
    </AnswerTextWrapper>
  );
}
