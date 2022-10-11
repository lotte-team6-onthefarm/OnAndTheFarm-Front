import React, { useEffect } from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useLocation, useNavigate } from "react-router"
import { Button } from '../../../components/common/Button';
import {
  PreOrderContentDiv,
  PreOrderListDiv,
  PreOrderPriceDiv,
  PreOrderListHeader,
  PreOrderItems,
  PreOrderPriceHeader,
  PreOrderPriceRow,
  PreOrderPriceTotal,
} from './mainOrder.style';
import ProductListComp from '../../../components/main/products/ProductList';
import Input from '../../../components/common/Input';
import { postMakeOrder } from '../../../apis/user/order';

export default function MainOrder() {
  const { state } = useLocation();
  const [preOrderList, setPreOrderList] = useState(state);
  const [totalPrice, setTotalPrice] = useState(0);

  const [recieverName, setRecieverName] = useState('');
  const [recieverAddress, setRecieverAddress] = useState('');
  const [recieverPhone, setRecieverPhone] = useState('');
  const [recieverRequest, setRecieverRequest] = useState('');


  const test = () => {
    let productList = []
    for (let index = 0; index < preOrderList.length; index++) {
      productList.push({productId:preOrderList[index].productId, productQty:preOrderList[index].cartQty})
    }
    const data = {
      "orderRecipientName":recieverName,
    "orderAddress":recieverAddress,
    "orderPhone":recieverPhone,
    "orderRequest":recieverRequest,
    "productList": productList
    }
    console.log(data)
    makeOrder(data)
  }
  useEffect(() => {
    let tempPrice = 0
    for (let index = 0; index < preOrderList.length; index++) {
      tempPrice = tempPrice + preOrderList[index].productPrice * preOrderList[index].cartQty
    }
    setTotalPrice(tempPrice)
  }, []);
  const navigate = useNavigate();

  const { mutate: makeOrder, isLoading: isMakeOrderLoading } = useMutation(
    postMakeOrder,
    {
      onSuccess: res => {
        alert('주문완료되었습니다')
        navigate(`/order/success`, { state: "주문완료" });
      },
      onError: () => {
        console.log('에러');
      },
    },
  );
  
  return (
    <PreOrderContentDiv>
      <PreOrderListDiv>
        
        <PreOrderListHeader>
        <p className="subject">주문/결제</p>
        <hr />
        <Input
          value={recieverName}
          onChange={e => setRecieverName(e.target.value)}
          label="받는분"
          placeholder="홍길동"
          id="name"
          type="text"
        />
        <Input
          value={recieverAddress}
          onChange={e => setRecieverAddress(e.target.value)}
          label="배송지"
          placeholder="서울시 강남구"
          id="address"
          type="text"
        />
        <Input
          value={recieverPhone}
          onChange={e => setRecieverPhone(e.target.value)}
          label="전화번호"
          placeholder="010-1234-5678"
          id="phone"
          type="text"
        />
        
        </PreOrderListHeader>
        
        <PreOrderListHeader>
        <p className="subject">배송요청사항</p>
        <hr />
        <Input
          value={recieverRequest}
          onChange={e => setRecieverRequest(e.target.value)}
          label="요청사항"
          placeholder="배송 요청사항을 적어주세요"
          id="request"
          type="text"
        />
        </PreOrderListHeader>
        <PreOrderItems>
        <p className="subject">상품 리스트</p>
        <hr />
        {preOrderList.map((cart, index) => {
                return (
                  <ProductListComp
                    key={index}
                    id={index}
                    url={cart.productMainImgSrc}
                    name={cart.productName}
                    number={cart.cartQty}
                    price={cart.productPrice}
                    likeListSize={preOrderList.length}
                  ></ProductListComp>
                );
              })}
        </PreOrderItems>
      </PreOrderListDiv>
      <PreOrderPriceDiv>
        <PreOrderPriceHeader>결제금액</PreOrderPriceHeader>
        <PreOrderPriceRow>
          <p>상품금액</p>
          <p>{totalPrice}원</p>
        </PreOrderPriceRow>
        {/* <PreOrderPriceRow>
          <p>할인금액</p>
          <p>000원</p>
        </PreOrderPriceRow>
        <PreOrderPriceRow>
          <p>배송비</p>
          <p>000원</p>
        </PreOrderPriceRow> */}
        <PreOrderPriceTotal>
          <span>{totalPrice}</span>원
        </PreOrderPriceTotal>
        <Button
          text="주문하기"
          color="#40AA54"
          width="130px"
          margin="0 0 0 150px"
          onClick={test}
        ></Button>
      </PreOrderPriceDiv>
    </PreOrderContentDiv>
  );
}
