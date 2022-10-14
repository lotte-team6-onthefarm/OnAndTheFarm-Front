import React, { useState } from 'react';
import { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { getSellerOrderList } from '../../../apis/seller/order';
import {
  addDays,
  getDate,
  getNoTimeDate,
  getOrderNumber,
} from '../../../utils/commonFunction';
import { WhiteWrapper } from '../common/Box.style';
import { UserImgWrapper } from '../common/sellerCommon.style';
import SubTitle from '../common/SubTitle';
import {
  DeliveryButtonWrapper,
  DeliveryDateWrapper,
  DeliveryTableWrapper,
  DeliveryWrapper,
} from './Delivery.style';
export default function DeliveryList() {
  // usenavigator
  const navigator = useNavigate();
  // usestate
  const [deliveryState, setDeliveryState] = useState('activated'); // 0 : 배송처리 1 : 배송중 2 : 배송완료
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pageNo, setPageNo] = useState(0);

  // useeffect
  useEffect(() => {
    const today = new Date();
    // 30일 기간으로 체크하기
    const formatToday = getDate();
    const formatEnd = addDays(today, 30);
    setStartDate(formatToday);
    setEndDate(formatEnd);
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
      orderListRefetch();
      // getSellerOrderList(e.target.value);
    }
  };

  const {
    data: orderList,
    isLoading: isOrderListLoading,
    refetch: orderListRefetch,
  } = useQuery(
    'sellerOrderList',
    () => getSellerOrderList(startDate, endDate, pageNo),
    {
      refetchOnMount: true,
      enabled: startDate !== '' && endDate !== '',
    },
  );

  const deliveryDetailRouter = id => {
    console.log(id, '부모');
    navigator(`/seller/delivery/${id}`);
  };

  return (
    <WhiteWrapper width="100%">
      <SubTitle color="#FFBC99" title="주문 관리 내역" />
      <DeliveryWrapper>
        <DeliveryButtonWrapper state={deliveryState}>
          <div onClick={() => deliveryStateHandler('activated')}>주문 내역</div>
          <div onClick={() => deliveryStateHandler('deliveryProgress')}>
            배송 중
          </div>
          <div onClick={() => deliveryStateHandler('deliveryCompleted')}>
            배송 완료
          </div>
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
            </tr>
          </thead>
          {!isOrderListLoading && startDate !== '' && endDate !== '' && (
            <>
              {orderList.map((list, idx) => {
                const order = list.orderSellerResponses[0];
                return (
                  deliveryState === order.orderProductStatus && (
                    <tbody key={idx}>
                      <tr>
                        <td
                          className="title"
                          onClick={() => {
                            deliveryDetailRouter(order.ordersSerial);
                          }}
                        >
                          <img
                            src={require('../../../assets/products/복숭아.png')}
                            alt=""
                          />
                          <div>
                            {order.orderProductName} / ({order.orderProductQty}
                            EA)
                            {list.orderSellerResponses.length > 1 && (
                              <span>
                                +{list.orderSellerResponses.length - 1}개
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="content">
                          {getOrderNumber(order.ordersSerial)}
                        </td>
                        <td className="content">
                          {getNoTimeDate(order.ordersDate)}
                        </td>
                        <td>
                          <div
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <UserImgWrapper
                              src={require('../../../assets/구데타마.png')}
                              alt=""
                              width="30px"
                            ></UserImgWrapper>
                            <div style={{ paddingLeft: '10px' }}>
                              {order.userName}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  )
                );
              })}
            </>
          )}
        </DeliveryTableWrapper>
      </DeliveryWrapper>
    </WhiteWrapper>
  );
}
