import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { postCancelProduct, postRefundProduct } from '../../../apis/user/order';
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
} from './Claim.style';

export default function ClaimComp(props) {
  const [refundDetail, setRefundDetail] = useState('');

  const { mutate: refundProduct, isLoading: isRefundProduct } = useMutation(
    postRefundProduct,
    {
      onSuccess: res => {
        alert('성공');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const { mutate: cancelProduct, isLoading: isCancelProduct } = useMutation(
    postCancelProduct,
    {
      onSuccess: res => {
        alert('성공');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const makeRefund = () => {
    const data = {
      orderProductId: props.selectData,
      refundDetail: refundDetail,
    };
    refundProduct(data);
  };
  const makeCancel = () => {
    const data = {
      orderProductId: props.selectData,
      refundDetail: refundDetail,
    };
    cancelProduct(data);
  };

  return (
    <ClaimDiv>
      {props.orderstatus === 'deliveryCompleted' ? (
        <div>
          <h1>환불하기</h1>
        </div>
      ) : (
        <h1>취소요청</h1>
      )}

      {props.orderstatus === 'deliveryCompleted' ? (
        <Button
          text="환불"
          color="#3288E5"
          margin="auto auto 20px"
          width="150px"
          onClick={makeRefund}
        ></Button>
      ) : (
        <Button
          text="확인"
          color="#3288E5"
          margin="auto auto 20px"
          width="150px"
          onClick={makeCancel}
        ></Button>
      )}
    </ClaimDiv>
  );
}
