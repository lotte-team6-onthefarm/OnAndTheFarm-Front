import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postRefundProduct } from '../../../apis/user/order';
import { Button } from '../../common/Button';
import { ClaimDiv } from './Claim.style';

export default function ClaimComp(props) {
  const [refundDetail, setRefundDetail] = useState('');

  const queryClient = useQueryClient();
  const { mutate: refundProduct, isLoading: isRefundProduct } = useMutation(
    postRefundProduct,
    {
      onSuccess: res => {
        alert('성공');
        queryClient.invalidateQueries('OrderDetail');
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
  return (
    <ClaimDiv>
      {props.orderStatus === 'deliveryCompleted' && (
        <div>
          <h1>환불하기</h1>
        </div>
      )}
      <div>
        <textarea placeholder="환불 사유를 입력해주세요"></textarea>
      </div>
      {props.orderStatus === 'deliveryCompleted' && (
        <Button
          text="환불"
          color="#3288E5"
          width="150px"
          onClick={makeRefund}
        ></Button>
      )}
    </ClaimDiv>
  );
}
