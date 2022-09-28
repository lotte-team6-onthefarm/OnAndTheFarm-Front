import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WhiteWrapper } from '../common/Box.style';
import SubTitle from '../common/SubTitle';
import {
  DeliveryButtonWrapper,
  DeliveryDateWrapper,
  DeliveryTableWrapper,
  DeliveryWrapper,
} from './Delivery.style';
import DeliveryState from './deliveryState/DeliveryState';
export default function DeliveryList() {
  // dummy data
  const datas = [
    {
      orderDate: '2022.09.30',
      orderNum: '12324143131',
      orderUser: 'dmstjd3256',
      product: '준비 샤인 머스캣 1kg',
      optios: '1box',
      id: '1',
      orderState: '0',
      waybill: '23123123122',
    },
    {
      orderDate: '2022.09.30',
      orderNum: '12324143131',
      orderUser: 'dmstjd3256',
      product: '배송중 샤인 머스캣 1kg',
      optios: '5box',
      id: '2',
      orderState: '1',
      waybill: '123124123122',
    },
    {
      orderDate: '2022.09.30',
      orderNum: '12324143131',
      orderUser: 'dmstjd3256',
      product: '완료 샤인 머스캣 1kg',
      optios: '1box',
      id: '3',
      orderState: '2',
      waybill: '21421312322',
    },
    {
      orderDate: '2022.09.30',
      orderNum: '12324143131',
      orderUser: 'dmstjd3256',
      product: '준비 샤인 머스캣 1kg',
      optios: '2box',
      id: '4',
      orderState: '0',
      waybill: '1232143142',
    },
  ];
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
  const [waybillNumber, setWaybillNumber] = useState('');

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

  const waybillHandler = num => {
    setWaybillNumber(num);
  };

  const deliveryDetailRouter = id => {
    navigator(`/seller/delivery/${id}`);
  };

  return (
    <WhiteWrapper width="100%">
      <SubTitle color="#FFBC99" title="주문/배송 관리 내역" />
      <DeliveryWrapper>
        <DeliveryButtonWrapper state={deliveryState}>
          <div onClick={() => deliveryStateHandler('0')}>배송 처리</div>
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
          <table width="100%">
            <thead>
              <tr>
                <th width="20%">상품명/옵션</th>
                <th width="17%">주문일</th>
                <th width="17%">주문번호</th>
                <th width="17%">주문자</th>
                <th width="17%">운송장번호</th>
                <th>배송처리</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, idx) => {
                return (
                  deliveryState === data.orderState && (
                    <tr key={idx}>
                      <td
                        onClick={() => {
                          deliveryDetailRouter(data.id);
                        }}
                      >
                        {data.product}/{data.optios}
                      </td>
                      <td>{data.orderDate}</td>
                      <td>{data.orderNum}</td>
                      <td>{data.orderUser}</td>
                      <DeliveryState
                        data={data}
                        shippingCompany={shippingCompany}
                      ></DeliveryState>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </DeliveryTableWrapper>
      </DeliveryWrapper>
    </WhiteWrapper>
  );
}
