import React, { useEffect } from 'react';
import { BsReply } from 'react-icons/bs';
import Counter from '../../common/Counter';
import RatingInput from '../../common/Rating';
import {
  QnaItem,
  QnaItemImg,
  QnaItemContent,
  QnaItemDetail,
  QnaItemNumber,
  QnaItemPrice,
} from './QnaItem.style';

export default function QnaItemComp(props) {
  return (
    <QnaItem>
      <QnaItemImg width="70px" height="70px" src={props.url} alt="" />
      <QnaItemContent>
        <QnaItemDetail>
          <h4>{props.name}</h4>
          <p>{props.content}</p>
        </QnaItemDetail>
        <QnaItemPrice>
        
          <p>답글 바로가기 <BsReply></BsReply> </p>
          <p>{props.date} 일전</p>
        </QnaItemPrice>
      </QnaItemContent>
    </QnaItem>
  );
}
