import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { postCancelProduct, postRefundProduct } from '../../../apis/user/order';
import { postAddQna } from '../../../apis/user/qna';
import { Button } from '../../common/Button';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import {
  ClaimDiv,
  OrderItemImg,
  OrderItemContent,
  OrderItemDetail,
  OrderItemNumber,
  OrderItemPrice,
} from './MakeQna.style';

export default function MakeQna(props) {
  const [refundDetail, setRefundDetail] = useState('');
  const productId = props.id;
  const [productQna, setProductQna] = useState('');

  const { mutate: addQna, isLoading: isAddQnaLoading } = useMutation(
    postAddQna,
    {
      onSuccess: res => {
        alert('질문이 추가되었습니다');
        props.setModal(false);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const makeQuestion = () => {
    let data = {};
    data.productId = productId;
    data.productQnaContent = productQna;
    addQna(data);
  };

  return (
    <ClaimDiv>
      <h1>질문하기</h1>
      <TextArea
        value={productQna}
        onChange={e => setProductQna(e.target.value)}
        placeholder=""
        id="phone"
        type="text"
      />
      <Button
        text="질문 작성"
        color="#3288E5"
        margin="auto auto 20px"
        width="150px"
        onClick={makeQuestion}
      ></Button>
    </ClaimDiv>
  );
}
