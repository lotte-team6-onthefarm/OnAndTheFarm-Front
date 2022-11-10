import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ReviewContentDiv } from './mainMypageOrderDetail.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { getOrderDetail } from '../../../../apis/user/order';
import Input from '../../../../components/common/Input';
import {
  PreOrderItems,
  PreOrderListDiv,
  PreOrderListHeader,
} from '../../order/mainOrder.style';
import ClaimComp from '../../../../components/main/mypage/Claim';
import OrderProductComp from '../../../../components/main/mypage/OrderProductComp';
import Modal from '../../../../components/common/Modal';

export default function MainMypageOrderDetail() {
  const { state } = useLocation();
  const [orderId, setOrderId] = useState(state);

  const [totalPrice, setTotalPrice] = useState(0);
  const [recieverName, setRecieverName] = useState('');
  const [recieverAddress, setRecieverAddress] = useState('');
  const [recieverPhone, setRecieverPhone] = useState('');
  const [recieverRequest, setRecieverRequest] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [deliveryCompany, setDeliveryCompany] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const [modal, setModal] = useState(false);
  const [selectData, setSelectData] = useState('');

  const {
    isLoading: OrderDetailLoading,
    // refetch: getOrderDetailRefetch,
    data: order,
  } = useQuery('OrderDetail', () => getOrderDetail(orderId), {
    onSuccess: res => {
      setTotalPrice(res.orderTotalPrice);
      setRecieverName(res.orderName);
      setRecieverAddress(res.orderAddress);
      setRecieverPhone(res.orderPhone);
      setRecieverRequest(res.orderRequest);
      setOrderStatus(res.orderStatus);
      setOrderDate(res.orderDate);
      setDeliveryNumber(
        res.orderProductDeliveryWaybillNumber === null
          ? ''
          : res.orderProductDeliveryWaybillNumber,
      );
      setDeliveryCompany(
        res.orderProductDeliveryCompany === null
          ? ''
          : res.orderProductDeliveryCompany,
      );
      setDeliveryDate(
        res.orderProductDeliveryDate === null
          ? ''
          : res.orderProductDeliveryDate,
      );
    },
    onError: () => {
      console.log('error');
    },
  });

  const modalChange = () => {
    setModal(!modal);
  };

  return (
    <div>
      <ReviewContentDiv>
        {!OrderDetailLoading && (
          <PreOrderListDiv>
            <PreOrderListHeader>
              <p className="subject">수취인정보</p>
              <hr />
              <Input
                value={recieverName}
                onChange={e => setRecieverName(e.target.value)}
                label="받는분"
                placeholder="홍길동"
                id="name"
                type="text"
                disabled={true}
              />
              <Input
                value={recieverAddress}
                onChange={e => setRecieverAddress(e.target.value)}
                label="배송지"
                placeholder="서울시 강남구"
                id="address"
                type="text"
                disabled={true}
              />
              <Input
                value={recieverPhone}
                onChange={e => setRecieverPhone(e.target.value)}
                label="전화번호"
                placeholder="010-1234-5678"
                id="phone"
                type="text"
                disabled={true}
              />
            </PreOrderListHeader>

            <PreOrderListHeader>
              <p className="subject">배송정보</p>
              <hr />
              <Input
                value={recieverRequest}
                onChange={e => setRecieverRequest(e.target.value)}
                label="요청사항"
                placeholder="배송 요청사항을 적어주세요"
                id="request"
                type="text"
                disabled={true}
              />
              <Input
                value={orderStatus}
                onChange={e => setRecieverRequest(e.target.value)}
                label="주문상태"
                placeholder="배송 요청사항을 적어주세요"
                id="request"
                type="text"
                disabled={true}
              />
              <Input
                value={orderDate}
                onChange={e => setRecieverRequest(e.target.value)}
                label="주문날짜"
                placeholder="배송 요청사항을 적어주세요"
                id="request"
                type="text"
                disabled={true}
              />
              <Input
                value={totalPrice}
                onChange={e => setRecieverRequest(e.target.value)}
                label="총금액"
                placeholder="배송 요청사항을 적어주세요"
                id="request"
                type="text"
                disabled={true}
              />
              <Input
                value={deliveryNumber}
                onChange={e => setRecieverRequest(e.target.value)}
                label="운송장번호"
                placeholder="운송장번호"
                id="request"
                type="text"
                disabled={true}
              />
              <Input
                value={deliveryCompany}
                onChange={e => setRecieverRequest(e.target.value)}
                label="운송회사"
                placeholder="운송회사"
                id="request"
                type="text"
                disabled={true}
              />
              <Input
                value={deliveryDate}
                onChange={e => setRecieverRequest(e.target.value)}
                label="운송날짜"
                placeholder="운송날짜"
                id="request"
                type="text"
                disabled={true}
              />
            </PreOrderListHeader>
            <PreOrderItems>
              <p className="subject">상품 리스트</p>
              <hr />
              {order.orderProducts.map((product, index) => {
                return (
                  <OrderProductComp
                    key={index}
                    id={product.orderProductId}
                    url={product.productImg}
                    name={product.productName}
                    number={product.productQty}
                    price={product.productPrice}
                    status={product.orderProductStatus}
                    orderstatus={order.orderStatus}
                    modalChange={modalChange}
                    setSelectData={setSelectData}
                  ></OrderProductComp>
                );
              })}
            </PreOrderItems>
          </PreOrderListDiv>
        )}
        {/* modal */}
        {modal && (
          <Modal closeModal={() => setModal(!modal)}>
            <ClaimComp
              orderStatus={orderStatus}
              selectData={selectData}
            ></ClaimComp>
          </Modal>
        )}
      </ReviewContentDiv>
    </div>
  );
}
