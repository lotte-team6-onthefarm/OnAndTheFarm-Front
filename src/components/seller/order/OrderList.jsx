import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSellerOrderClaimList } from '../../../apis/seller/order';
import {
  addDays,
  getDateDotFormat,
  getDateFormat,
} from '../../../utils/commonFunction';
import Modal from '../../common/Modal';
import Pagination from '../../common/Pagination';
import useDidMountEffect from '../../common/useDidMountEffect';
import { WhiteWrapper } from '../common/Box.style';
import { GreenPurpleStatusButton } from '../common/ColorStatusButton';
import { UserImgWrapper } from '../common/sellerCommon.style';
import SubTitle from '../common/SubTitle';
import { DeliveryButtonWrapper } from '../delivery/Delivery.style';
import { EmptyTable } from '../main/popularProducts/MainPopularProducts.style';
import CancleList from './CancleList';

import {
  OrderButtonWrapper,
  OrderDateWrapper,
  OrderTableWrapper,
} from './Order.style';
import OrderState from './orderState/OrderState';

// canceled : 주문취소
// refundRequest : 반품신청
// refundCompleted : 반품확정

export default function OrderList() {
  // 초기 orderState 설정(셀러메인->취소/반품내역)
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    if (id !== undefined) {
      setOrderState(id);
    }
  }, [id]);

  // usestate
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orderState, setOrderState] = useState('canceled');
  const [modal, setModal] = useState(false);
  const [selectData, setSelectData] = useState({});
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  // function
  const orderStateHandler = num => {
    setOrderState(num);
  };

  const startDateHandler = e => {
    if (new Date(endDate) < new Date(e.target.value)) {
      // 종료일이 시작일보다 빠를 때
      alert('시작일이 종료일보다 이후입니다. 기간을 다시 선택해주세요.');
    } else {
      setStartDate(e.target.value);
      // 데이터 가져오는 api
    }
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

  const {
    data: orderClaimListData,
    isLoading: isOrderClaimListLoading,
    refetch: orderClaimListRefetch,
  } = useQuery(
    ['orderClaimList', nowPage],
    () =>
      getSellerOrderClaimList(
        getDateDotFormat(startDate),
        getDateDotFormat(endDate),
        nowPage,
        orderState,
      ),
    {
      keepPreviousData: true,
      refetchOnMount: true,
      enabled: startDate !== '' && endDate !== '',
      onSuccess: res => {
        setNowPage(res.currentPageNum);
        setTotalPage(res.totalPageNum);
      },
    },
  );

  // useeffect
  useEffect(() => {
    const today = new Date();
    // 30일 기간으로 체크하기
    const formatToday = addDays(today, -30);
    const formatEnd = addDays(today, 1);
    setStartDate(getDateFormat(formatToday));
    setEndDate(getDateFormat(formatEnd));
  }, []);

  useDidMountEffect(() => {
    //요일이 바뀔때 마다 refetch
    orderClaimListRefetch();
  }, [startDate, endDate, orderState]);

  return (
    <WhiteWrapper width="100%" minHeight="80vh">
      <SubTitle color="#FFBC99" title="취소/반품 관리 내역" />
      <DeliveryButtonWrapper state={orderState}>
        <div
          className="orderStateButton"
          onClick={() => {
            orderStateHandler('canceled');
          }}
        >
          취소 내역
        </div>
        <div
          className="orderStateButton"
          onClick={() => {
            orderStateHandler('refundRequest');
          }}
        >
          반품 내역
        </div>
      </DeliveryButtonWrapper>
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
        {!isOrderClaimListLoading && startDate !== '' && endDate !== '' && (
          <>
            {orderClaimListData.responses.length === 0 ? (
              <EmptyTable height="50vh">
                <h3>신청된 취소/반품 내역이 없습니다</h3>
              </EmptyTable>
            ) : (
              <OrderTableWrapper>
                <thead>
                  <tr>
                    <th width="40%">상품명/옵션</th>
                    <th width="20%">취소/반품 상태</th>
                    <th width="20%">주문일</th>
                    <th width="20%">주문자</th>
                  </tr>
                </thead>

                {orderClaimListData.responses.map((data, idx) => {
                  return orderState === 'canceled' ? (
                    <CancleList data={data} key={idx} />
                  ) : (
                    <tbody
                      key={idx}
                      onClick={() => {
                        setSelectData(data);
                        setModal(!modal);
                      }}
                      className="refundTBody"
                    >
                      <tr>
                        <td className="title">
                          <img src={data.orderProductMainImg} alt="" />
                          <div>{data.title}</div>
                          {data.orderProductName} / ({data.orderProductQty}EA)
                        </td>
                        <td className="content">
                          <GreenPurpleStatusButton
                            // canceled : 주문취소
                            // refundRequest : 반품신청
                            // refundCompleted : 반품확정
                            fontSize="15px"
                            text={
                              (data.orderProductStatus === 'canceled' &&
                                '취소요청') ||
                              (data.orderProductStatus === 'refundRequest' &&
                                '반품신청') ||
                              (data.orderProductStatus === 'refundCompleted' &&
                                '반품확정')
                            }
                            status={
                              (data.orderProductStatus === 'canceled' && 1) ||
                              (data.orderProductStatus === 'refundRequest' &&
                                2) ||
                              (data.orderProductStatus === 'refundCompleted' &&
                                3)
                            }
                          />
                        </td>
                        <td className="content">{data.ordersDate}</td>
                        <td>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            <UserImgWrapper
                              src={data.userProfile}
                              alt=""
                              width="30px"
                            ></UserImgWrapper>
                            <div style={{ paddingLeft: '10px' }}>
                              {data.userName}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </OrderTableWrapper>
            )}
          </>
        )}
      </div>

      {/* modal */}
      {modal && (
        <Modal closeModal={() => setModal(!modal)}>
          <OrderState
            selectData={selectData}
            closeModal={() => setModal(!modal)}
          />
        </Modal>
      )}
      {totalPage !== 0 && (
        <Pagination
          nowPage={nowPage + 1}
          totalPage={totalPage}
          setPage={setNowPage}
        ></Pagination>
      )}
    </WhiteWrapper>
  );
}
