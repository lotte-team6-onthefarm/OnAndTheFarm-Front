import React, { useState } from 'react';
import { BsReply } from 'react-icons/bs';
import Input from '../../common/Input';
import {
  QnaItem,
  QnaItemImg,
  QnaItemContent,
  QnaItemDetail,
  QnaItemPrice,
} from './QnaItem.style';

export default function QnaItemComp(props) {
  const [dispalyAnswer, setDispalyAnswer] = useState(false);

  const showAnswer = e => {
    if (props.answer !== null) {
      setDispalyAnswer(!dispalyAnswer);
    } else {
      alert('답변이 없습니다');
    }
  };
  return (
    <div>
      <QnaItem>
        <QnaItemImg width="70px" height="70px" src={props.url} alt="" />
        <QnaItemContent>
          <QnaItemDetail>
            <h4>{props.name}</h4>
            <p>{props.content}</p>
          </QnaItemDetail>
          <QnaItemPrice>
            <p id={props.id} onClick={showAnswer}>
              답글 바로가기 <BsReply></BsReply>{' '}
            </p>
            <p>{props.date} 일전</p>
          </QnaItemPrice>
        </QnaItemContent>
      </QnaItem>
      {dispalyAnswer && (
        <Input
          value={props.answer}
          label="답변내용"
          id="answer"
          type="text"
          disabled={true}
        />
      )}
    </div>
  );
}
