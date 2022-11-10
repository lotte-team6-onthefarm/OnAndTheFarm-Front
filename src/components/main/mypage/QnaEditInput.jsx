import React, { useState } from 'react';
import { Button } from '../../common/Button';
import RatingInputComp from '../../common/Rating';
import { useMutation } from 'react-query';
import {
  ReviewAddButtonDiv,
  ReviewAddDiv,
} from '../products/ProductReview.style';
import { postAddReview, putReviewDelete, putReviewEdit } from '../../../apis/user/review';
import { AiFillHeart } from 'react-icons/ai';
import { putQnaDelete, putQnaEdit } from '../../../apis/user/qna';
import Input from '../../common/Input';

export default function QnaEditInput(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [qnaContent, setQnaContent] = useState(props.qnaContent);
  const [rating, setRating] = useState(props.reviewRate);
  const [dispalyAnswer, setDispalyAnswer] = useState(false);

  const showAnswer = e => {
    setDispalyAnswer(!dispalyAnswer);
  };

  const { mutate: qnaEdit, isLoading: isQnaEditLoading } = useMutation(
    putQnaEdit,
    {
      onSuccess: res => {
        alert('질문이 수정되었습니다.');
        window.location.reload();
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  const { mutate: qnaDelete, isLoading: isQnaDeleteLoading } = useMutation(
    putQnaDelete,
    {
      onSuccess: res => {
        alert('질문이 삭제되었습니다.');
        window.location.reload();
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  
  const eidtIsEdit = () => {
    setIsEdit(!isEdit);
  };
  const eidtQna = () => {
    const data = {
      "productQnaId" : props.id,
      "productQnaContent" : qnaContent,
  }
  qnaEdit(data)
    setIsEdit(!isEdit);
  };
  const deleteQna = () => {
    qnaDelete({
      "productQnaId" : props.id
  })
    console.log('질문삭제');
  };

  return (
    <ReviewAddDiv>
      <input
        style={{
          width: '100%',
          height: '100px',
          marginRight: '20px',
        }}
        value={qnaContent}
        onChange={e => setQnaContent(e.target.value)}
        disabled={isEdit === true ? false : true}
      ></input>
      {dispalyAnswer && <Input
        value={props.qnaAnswer}
        label="답변내용"
        id="answer"
        type="text"
        disabled={true}
      />}
      <ReviewAddButtonDiv>
        {isEdit === true ? (
          <Button
            text="저장"
            color="#40AA54"
            width="130px"
            height="30px"
            onClick={eidtQna}
          ></Button>
        ) : (
          <div>
            <Button
              text="질문수정"
              color="#40AA54"
              width="130px"
              height="30px"
              onClick={eidtIsEdit}
            ></Button>
            <Button
              text="질문삭제"
              color="#40AA54"
              width="130px"
              height="30px"
              onClick={deleteQna}
            ></Button>
            <Button
              text="답변보기"
              color="#40AA54"
              width="130px"
              height="30px"
              onClick={showAnswer}
            ></Button>
          </div>
        )}
      </ReviewAddButtonDiv>
    </ReviewAddDiv>
  );
}
