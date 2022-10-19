import React from 'react';
import { useQuery } from 'react-query';
import { getSellerOrderListDetail } from '../../../../apis/seller/order';
import { GreenButton } from '../../../common/Button.style';
import { HorizontalLine } from '../../../common/HorizontalLine.style';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';
import { ProductDetailDiv } from '../Delivery.style';
import { DeliveryDetailWrapper } from './DeliveryDetail.style';

export default function DeliveryDetail(props) {
  const orderSellerResponses = props.orderSellerResponses;
  const orderSerial = props.orderSellerResponses[0].ordersSerial;

  const {
    data: orderListDetail,
    isLoading: isOrderListDetailLoading,
    refetch: orderListDetailRefetch,
  } = useQuery('sellerOrderListDetail', () =>
    getSellerOrderListDetail(orderSerial),
  );

  const data = {
    orderDate: '2022.09.30',
    orderNum: '202209302231',
    orderUser: 'dmstjd3256',
    product: '준비 샤인 머스캣 1kg',
    quantity: '1box',
    orderState: 'os1',
    waybill: '23123123122',
    userName: '손은성',
    phone: '010-9560-6840',
    address: '서울 관악구 신림동 1234-23 203호',
    requre: '문 앞에 놔둬주세요!',
    total: '1000000',
  };

  return (
    <>
      <WhiteWrapper width="100%">
        <SubTitle color="#FFBC99" title="주문 상세 보기" />

        {!isOrderListDetailLoading && (
          <DeliveryDetailWrapper>
            <div className="detailWrapperleft">{orderSerial}</div>
            <div>
              {orderSellerResponses.map((orderSerialResponse, idx) => {
                return (
                  <ProductDetailDiv key={idx}>
                    <img src={orderSerialResponse.orderProductMainImg} alt="" />
                    <div>
                      <div>{orderSerialResponse.orderProductName}</div>
                      <div>수량 : {orderSerialResponse.orderProductQty} EA</div>
                      <div>
                        가격 :{' '}
                        {orderSerialResponse.orderProductQty *
                          orderSerialResponse.orderProductPrice}
                        원
                      </div>
                    </div>
                  </ProductDetailDiv>
                );
              })}
              {/* 고객 정보 */}
              {/* horizontal line */}
              <HorizontalLine color="#aaa" />
              <div>
                <div>고객 정보</div>
                <div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '150px' }}>수취인 이름</div>
                    <div>{orderListDetail.orderName}</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '150px' }}>전화번호</div>
                    <div>{orderListDetail.orderPhone}</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '150px' }}>배송지 주소</div>
                    <div>{orderListDetail.orderAddress}</div>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div style={{ width: '150px' }}>배송지 요청사항</div>
                    <div>{orderListDetail.orderRequest}</div>
                  </div>
                </div>
              </div>
            </div>
          </DeliveryDetailWrapper>
        )}
      </WhiteWrapper>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}
      >
        <GreenButton onClick={() => {}}>배송처리</GreenButton>
      </div>
    </>
  );
}
