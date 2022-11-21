import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from '../../common/Button';
import { changeStatusName } from '../../../utils/commonFunction';
import {
  CartItem,
  CartItemImg,
  CartItemContent,
  CartItemDetail,
  CartItemNumber,
  CartItemPrice,
} from './OrderProductComp.style';
import { postCancelProduct } from '../../../apis/user/order';
import { useMutation, useQueryClient } from 'react-query';

export default function OrderProductComp(props) {
  const [quantity, setQuantity] = useState(props.number);
  const queryClient = useQueryClient();
  const { mutate: cancelProduct, isLoading: isCancelProduct } = useMutation(
    postCancelProduct,
    {
      onSuccess: res => {
        alert('주문 취소가 완료되었습니다');
        queryClient.invalidateQueries('OrderDetail');
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  const buttonClick = () => {
    props.modalChange();
    props.setSelectData(props.id);
  };

  const makeCancel = () => {
    if (window.confirm('정말 취소하시겠습니까?')) {
      const data = {
        orderProductId: props.id,
      };
      cancelProduct(data);
    } else {
    }
  };

  return (
    <CartItem>
      <CartItemImg width="70px" height="70px" src={props.url} alt="" />
      <CartItemContent>
        <CartItemDetail>
          <p>{props.name}</p>
        </CartItemDetail>
        <CartItemNumber>{quantity.toLocaleString()}개</CartItemNumber>
        <CartItemPrice>
          <p>{props.price.toLocaleString()}</p>
        </CartItemPrice>
        <CartItemPrice>
          <p>{changeStatusName(props.status)}</p>
        </CartItemPrice>
        <CartItemPrice>
          {props.status === 'deliveryCompleted' &&
          props.orderstatus === 'deliveryCompleted' ? (
            <Button
              text="환불요청"
              color="#3288E5"
              margin="auto auto 20px"
              width="150px"
              onClick={buttonClick}
            ></Button>
          ) : (
            ''
          )}
          {props.status === 'activated' &&
          (props.orderstatus === 'deliveryProgress' ||
            props.orderstatus === 'activated') ? (
            <Button
              text="주문취소"
              color="#3288E5"
              margin="auto auto 20px"
              width="150px"
              onClick={makeCancel}
            ></Button>
          ) : (
            ''
          )}
        </CartItemPrice>
      </CartItemContent>
    </CartItem>
  );
}
