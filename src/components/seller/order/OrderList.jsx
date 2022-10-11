import React, { useEffect, useState } from 'react';
import Modal from '../../common/Modal';
import { WhiteWrapper } from '../common/Box.style';
import { GreenPurpleStatusButton } from '../common/ColorStatusButton';
import { UserImgWrapper } from '../common/sellerCommon.style';
import SubTitle from '../common/SubTitle';
import { Orderdatas } from './dummy';
import {
  OrderButtonWrapper,
  OrderDateWrapper,
  OrderTableWrapper,
} from './Order.style';
import OrderState from './orderState/OrderState';
export default function OrderList() {
  // usestate
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [modal, setModal] = useState(false);
  const [selectData, setSelectData] = useState({});

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
              <tbody
                key={idx}
                onClick={() => {
                  setSelectData(data);
                  setModal(!modal);
                }}
              >
                <tr>
                  <td className="title">
                    <img
                      src={require('../../../assets/products/복숭아.png')}
                      alt=""
                    />
                    <div>{data.title}</div>
                    {data.product}/{data.optios}
                  </td>
                  <td className="content">
                    <GreenPurpleStatusButton
                      fontSize="15px"
                      text={data.orderState === 'os1' ? '취소요청' : '반품요청'}
                      status={data.orderState}
                    />
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
      {/* modal */}
      {modal && (
        <Modal closeModal={() => setModal(!modal)}>
          <OrderState data={selectData} closeModal={() => setModal(!modal)} />
        </Modal>
      )}
    </WhiteWrapper>
  );
}
