import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WhiteWrapper } from '../common/Box.style';
import { UserImgWrapper } from '../common/sellerCommon.style';
import SubTitle from '../common/SubTitle';
import { ReviewBlock } from '../products/productReviews/ProductReviews.style';
import { Orderdatas } from './dummy';
import {
  OrderButtonWrapper,
  OrderDateWrapper,
  OrderStatusTd,
  OrderTableWrapper,
} from './Order.style';
export default function OrderList() {
  // usenavigator
  const navigator = useNavigate();
  // usestate
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

  return (
    <WhiteWrapper width="100%">
      <SubTitle color="#FFBC99" title="취소/반품 관리 내역" />
      <div>
        <OrderButtonWrapper />
        <OrderDateWrapper>
          <div>조회기간</div>
          <input
            type="date"
            value={startDate}
            onChange={startDateHandler}
          /> ~ <input type="date" value={endDate} onChange={endDateHandler} />
        </OrderDateWrapper>
        <OrderTableWrapper>
          <thead>
            <tr>
              <th width="40%">상품명/옵션</th>
              <th width="20%">취소/반품 상태</th>
              <th width="20%">주문일</th>
              <th width="20%">주문자</th>
            </tr>
          </thead>
          {Orderdatas.map((data, idx) => {
            return (
              <tbody key={idx}>
                <tr>
                  <td className="title" onClick={() => {}}>
                    <img
                      src={require('../../../assets/products/복숭아.png')}
                      alt=""
                    />
                    <div>{data.title}</div>
                    {data.product}/{data.optios}
                  </td>
                  <td className="content">
                    <OrderStatusTd status={data.orderState}>
                      {data.orderState === 'os1' ? '취소요청' : '반품요청'}
                    </OrderStatusTd>
                  </td>
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
                </tr>
              </tbody>
            );
          })}
        </OrderTableWrapper>
      </div>
    </WhiteWrapper>
  );
}
