import React, { useState } from 'react';
import { BiSubdirectoryRight } from 'react-icons/bi';
import { useMutation, useQueryClient } from 'react-query';
import { postSellerQna } from '../../../../apis/seller/qna';
import { BlueButton, WhiteButton } from '../../../common/Button.style';
import { AnswerTextWrapper } from './ProductQnAs.style';

export default function AnswerTextBox(props) {
  const productSellerAnswer = props.qna.productSellerAnswer;
  const queryClient = useQueryClient();
  const [answer, setAnswer] = useState('');
  const answerHandler = e => {
    setAnswer(e.target.value);
  };

  const { mutate: answerQnA } = useMutation(postSellerQna, {
    onSuccess: res => {
      alert('등록이 완료되었습니다');
      setAnswer('');
      queryClient.invalidateQueries('sellerQnA');
    },
    onError: () => {
      console.log('에러');
    },
  });

  const handle = () => {
    answerQnA({
      productQnaId: props.qna.productQnaId,
      productQnaAnswerContent: answer,
    });
  };

  const closeBtn = props.closeBtn;

  return (
    <AnswerTextWrapper productQnaAnswer={productSellerAnswer}>
      <div className="textInput">
        <BiSubdirectoryRight />
        {productSellerAnswer !== null ? (
          <div className="sellerAnswer">{productSellerAnswer}</div>
        ) : (
          <textarea
            type="text"
            value={answer}
            placeholder="답변을 작성해주세요"
            onChange={answerHandler}
          />
        )}
      </div>
      <div className="btn">
        <div>
          {productSellerAnswer !== null ? (
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
