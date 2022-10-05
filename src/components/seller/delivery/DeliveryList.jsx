import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WhiteWrapper } from '../common/Box.style';
import { UserImgWrapper } from '../common/sellerCommon.style';
import SubTitle from '../common/SubTitle';
import {
  DeliveryButtonWrapper,
  DeliveryDateWrapper,
  DeliveryTableWrapper,
  DeliveryWrapper,
} from './Delivery.style';
import DeliveryState from './deliveryState/DeliveryState';
import { Deliverydatas } from './dummy';
export default function DeliveryList() {
  const shippingCompany = [
    '배송사 선택',
    '롯데택배',
    '대한통운',
    'GS택배',
    '우체국택배',
    'CU택배',
  ];
  // usenavigator
  const navigator = useNavigate();
  // usestate
  const [deliveryState, setDeliveryState] = useState('0'); // 0 : 배송처리 1 : 배송중 2 : 배송완료
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // useeffect
  useEffect(() => {
    // 30일 기간으로 체크하기
    const today = new Date();
    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    let dayString = year + '-' + month + '-' + day;
    setStartDate(dayString);
  }, []);

  // function
  const deliveryStateHandler = num => {
    setDeliveryState(num);
  };

  const startDateHandler = e => {
    setStartDate(e.target.value);
  };

  const endDateHandler = e => {
    if (startDate === '') {
      // 시작일 선택이 안되었을 때
      alert('시작일을 선택해 주세요');
    } else if (new Date(startDate) > new Date(e.target.value)) {
      // 종료일이 시작일보다 빠를 때
      alert('시작일이 종료일보다 이전입니다. 기간을 다시 선택해주세요.');
    } else {
      setEndDate(e.target.value);
      // 데이터 가져오는 api
    }
  };

  const deliveryDetailRouter = id => {
    navigator(`/seller/delivery/${id}`);
  };

  return (
    <WhiteWrapper width="100%">
      <SubTitle color="#FFBC99" title="주문 관리 내역" />
      <DeliveryWrapper>
        <DeliveryButtonWrapper state={deliveryState}>
          <div onClick={() => deliveryStateHandler('0')}>주문 내역</div>
          <div onClick={() => deliveryStateHandler('1')}>배송 중</div>
          <div onClick={() => deliveryStateHandler('2')}>배송 완료</div>
        </DeliveryButtonWrapper>
        <DeliveryDateWrapper>
          <div>조회기간</div>
          <input
            type="date"
            value={startDate}
            onChange={startDateHandler}
          /> ~ <input type="date" value={endDate} onChange={endDateHandler} />
        </DeliveryDateWrapper>
        <DeliveryTableWrapper>
          <thead>
            <tr>
              <th width="30%">상품명/옵션</th>
              <th width="20%">주문번호</th>
              <th width="20%">주문일</th>
              <th width="20%">주문자</th>
              {/* <th width="17%">운송장번호</th>
              <th>배송처리</th> */}
            </tr>
          </thead>
          {Deliverydatas.map((data, idx) => {
            return (
              deliveryState === data.orderState && (
                <tbody key={idx}>
                  <tr>
                    <td
                      className="title"
                      onClick={() => {
                        deliveryDetailRouter(data.id);
                      }}
                    >
                      <img
                        src={require('../../../assets/products/복숭아.png')}
                        alt=""
                      />
                      <div>{data.title}</div>
                      {data.product}/{data.optios}
                    </td>
                    <td className="content">{data.orderNum}</td>
                    <td className="content">{data.orderDate}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <UserImgWrapper
                          src={require('../../../assets/구데타마.png')}
                          alt=""
                          width="30px"
                        ></UserImgWrapper>
                        <div style={{ paddingLeft: '10px' }}>
                          {data.orderUser}
                        </div>
                      </div>
                    </td>
                    {/* <DeliveryState
                      data={data}
                      shippingCompany={shippingCompany}
                    ></DeliveryState> */}
                  </tr>
                </tbody>
              )
            );
          })}
        </DeliveryTableWrapper>
      </DeliveryWrapper>
    </WhiteWrapper>
  );
}
