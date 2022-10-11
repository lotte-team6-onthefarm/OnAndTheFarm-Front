import React, { useState } from 'react';
import { BiSubdirectoryRight } from 'react-icons/bi';
import { useMutation } from 'react-query';
import { postSellerQna } from '../../../../apis/seller/qna';
import { BlueButton, WhiteButton } from '../../../common/Button.style';
import { AnswerTextWrapper } from './ProductQnAs.style';

export default function AnswerTextBox(props) {
  const productQnaAnswer = props.data.productQnaAnswer;
  const [answer, setAnswer] = useState('');
  const answerHandler = e => {
    setAnswer(e.target.value);
  };

  const { mutate: answerQnA } = useMutation(postSellerQna, {
    onSuccess: res => {
      alert('등록이 완료되었습니다');
    },
    onError: () => {
      console.log('에러');
    },
  });

  const handle = () => {
    answerQnA({ productQnaId: 52, productQnaAnswerContent: answer });
  };

  const closeBtn = props.closeBtn;

  return (
    <AnswerTextWrapper productQnaAnswer={productQnaAnswer}>
      <div className="textInput">
        <BiSubdirectoryRight />
        {productQnaAnswer !== null ? (
          <div className="sellerAnswer">{productQnaAnswer}</div>
        ) : (
          <textarea
            type="text"
            placeholder="답변을 작성해주세요"
            onChange={answerHandler}
          />
        )}
      </div>
      <div className="btn">
        <div>
          {productQnaAnswer !== null ? (
            ''
          ) : (
            <BlueButton height="30px" onClick={handle}>
              등록
            </BlueButton>
          )}

          <WhiteButton height="30px" onClick={closeBtn}>
            닫기
          </WhiteButton>
        </div>
      </div>
    </AnswerTextWrapper>
  );
}
