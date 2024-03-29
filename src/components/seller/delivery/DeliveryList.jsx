import React, { useState } from 'react';
import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getSellerOrderList,
  postSellerDeliveryDone,
  postSellerDeliveryStart,
} from '../../../apis/seller/order';
import {
  addDays,
  getDate,
  getNoSecDate,
  getOrderNumber,
  getDateFormat,
  getDateDotFormat,
} from '../../../utils/commonFunction';
import { GreenButton, WhiteButtonNoHover } from '../../common/Button.style';
import Modal from '../../common/Modal';
import SelectBox from '../../common/SelectBox';
import { WhiteWrapper } from '../common/Box.style';
import { UserImgWrapper } from '../common/sellerCommon.style';
import SubTitle from '../common/SubTitle';
import {
  DeliveryButtonWrapper,
  DeliveryDateWrapper,
  DeliveryTableWrapper,
  DeliveryWrapper,
  ProductDetailDiv,
} from './Delivery.style';
import DeliveryDetail from './deliveryDetail/DeliveryDetail';
import { EmptyTable } from '../main/popularProducts/MainPopularProducts.style';
import useDidMountEffect from '../../common/useDidMountEffect';
import Pagination from '../../common/Pagination';
import WaybillList from './WaybillList';
export default function DeliveryList() {
  const param = useParams();
  const id = param.id;
  useEffect(() => {
    if (id !== undefined) {
      setDeliveryState(id);
    }
  }, [id]);
  // usenavigator
  const navigator = useNavigate();
  const queryClient = useQueryClient();

  // usestate
  const [deliveryState, setDeliveryState] = useState('activated'); // 0 : 배송처리 1 : 배송중 2 : 배송완료
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [today, setToday] = useState('');
  const [endDay, setEndDay] = useState('');
  const [selectData, setSelectData] = useState([]);
  const [deliveryCompany, setDeliveryCompany] = useState([]);
  const [waybillNumber, setWaybillNumber] = useState([]);
  const [modal, setModal] = useState(false);
  // pagenation
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [isPush, setIsPush] = useState(true);

  // useeffect
  useEffect(() => {
    // 30일 기간으로 체크하기
    const today = addDays(getDate(), 1);
    setToday(today);
    const start = addDays(today, -30);
    setEndDay(today);
    setStartDate(getDateFormat(start));
    setEndDate(getDateFormat(today));
  }, []);

  // function
  const deliveryStateHandler = num => {
    setDeliveryState(num);
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
      alert('종료일이 시작일보다 이전입니다. 기간을 다시 선택해주세요.');
    } else {
      setEndDate(e.target.value);
    }
  };

  const startDeliveryBtn = (orderSerial, idx) => {
    if (waybillNumber[idx] === '') {
      alert('운송장 번호를 입력해주세요');
      return;
    }
    deliveryStart({
      orderDeliveryCompany: deliveryCompany[idx],
      orderSerial: orderSerial,
      orderDeliveryWaybillNumber: waybillNumber[idx],
    });
    setWaybillNumber(
      waybillNumber.filter((num, numIdx) => {
        return idx !== numIdx;
      }),
    );
    setDeliveryCompany(
      deliveryCompany.filter((num, numIdx) => {
        return idx !== numIdx;
      }),
    );
  };
  const {
    data: orderList,
    isLoading: isOrderListLoading,
    refetch: orderListRefetch,
  } = useQuery(
    ['sellerOrderList', nowPage],
    () =>
      getSellerOrderList(
        getDateDotFormat(startDate),
        getDateDotFormat(endDate),
        nowPage,
        deliveryState,
      ),
    {
      refetchOnMount: true,
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.currentPageNum);
        setTotalPage(res.totalPageNum);
        if (isPush) {
          for (let i = 0; i < res.responses.length; i++) {
            deliveryCompany.push('롯데택배');
            waybillNumber.push('');
          }
          setIsPush(false);
        }
      },
      enabled: startDate !== '' && endDate !== '',
    },
  );
  // 배송 처리
  const { mutate: deliveryStart, isLoading: isDelivertStartLoading } =
    useMutation(postSellerDeliveryStart, {
      onSuccess: res => {
        queryClient.invalidateQueries('sellerOrderList');
      },
      onError: () => {
        console.log('에러');
      },
    });

  // 배송 완료 처리
  const { mutate: deliveryDone, isLoading: isDeliveryDoneLoading } =
    useMutation(postSellerDeliveryDone, {
      onSuccess: res => {
        queryClient.invalidateQueries('sellerOrderList');
      },
      onError: () => {
        console.log('에러');
      },
    });

  useDidMountEffect(() => {
    //요일이랑 선택값이 바뀔때 마다 refetch
    orderListRefetch();
  }, [startDate, endDate, deliveryState]);

  return (
    <WhiteWrapper width="100%" minHeight="80vh">
      <SubTitle color="#FFBC99" title="주문 관리 내역" />
      <DeliveryWrapper>
        <DeliveryButtonWrapper state={deliveryState}>
          <div
            className="deliveryStateButton"
            onClick={() => {
              deliveryStateHandler('activated');
            }}
          >
            주문 내역
          </div>
          <div
            className="deliveryStateButton"
            onClick={() => {
              deliveryStateHandler('deliveryProgress');
            }}
          >
            배송 중
          </div>
          <div
            className="deliveryStateButton"
            onClick={() => {
              deliveryStateHandler('deliveryCompleted');
            }}
          >
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
        {!isOrderListLoading && startDate !== '' && endDate !== '' && (
          <>
            {orderList.responses.length === 0 ? (
              <EmptyTable height="50vh">
                <h3>처리 할 주문 내역이 없습니다</h3>
              </EmptyTable>
            ) : (
              <DeliveryTableWrapper>
                <thead>
                  <tr>
                    <th width="15%">주문번호/시각</th>
                    <th width="45%">상품명/옵션</th>
                    <th width="20%">운송장번호</th>
                    <th width="10%">배송처리</th>
                  </tr>
                </thead>
                {orderList.responses.map((list, idx) => {
                  const order = list.orderSellerResponses[0];
                  const orderSellerResponses = list.orderSellerResponses;
                  return (
                    deliveryState === order.orderProductStatus && (
                      <tbody key={idx}>
                        <tr>
                          <td className="content">
                            {getOrderNumber(order.ordersSerial)}
                            <div>{getNoSecDate(order.ordersDate)}</div>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              <UserImgWrapper
                                src={order.userProfile}
                                alt=""
                                width="30px"
                              ></UserImgWrapper>
                              <div style={{ paddingLeft: '10px' }}>
                                {order.userName}
                              </div>
                            </div>
                          </td>
                          <td>
                            {orderSellerResponses.map(
                              (orderSerialResponse, idx) => {
                                return (
                                  <ProductDetailDiv
                                    key={idx}
                                    onClick={() => {
                                      setSelectData(orderSellerResponses);
                                      setModal(!modal);
                                    }}
                                  >
                                    <img
                                      src={
                                        orderSerialResponse.orderProductMainImg
                                      }
                                      alt=""
                                    />
                                    <div>
                                      <div>
                                        {orderSerialResponse.orderProductName}
                                      </div>
                                      <div>
                                        수량 :
                                        {orderSerialResponse.orderProductQty} EA
                                      </div>
                                      <div>
                                        가격 :
                                        {orderSerialResponse.orderProductQty *
                                          orderSerialResponse.orderProductPrice}
                                        원
                                      </div>
                                    </div>
                                  </ProductDetailDiv>
                                );
                              },
                            )}
                          </td>
                          <WaybillList
                            idx={idx}
                            orderProductDeliveryWaybillNumber={
                              order.orderProductDeliveryWaybillNumber
                            }
                            deliveryCompany={deliveryCompany}
                            setDeliveryCompany={setDeliveryCompany}
                            waybillNumber={waybillNumber}
                            setWaybillNumber={setWaybillNumber}
                            orderProductDeliveryCompany={
                              order.orderProductDeliveryCompany
                            }
                          />
                          <td>
                            <div>
                              {order.orderProductStatus === 'activated' && (
                                <GreenButton
                                  height="40px"
                                  onClick={() => {
                                    startDeliveryBtn(order.ordersSerial, idx);
                                  }}
                                >
                                  배송처리
                                </GreenButton>
                              )}
                              {order.orderProductStatus ===
                                'deliveryProgress' && (
                                <GreenButton
                                  height="40px"
                                  onClick={() => {
                                    deliveryDone(order.ordersSerial);
                                  }}
                                >
                                  배송완료
                                </GreenButton>
                              )}
                              {order.orderProductStatus ===
                                'deliveryCompleted' && (
                                <WhiteButtonNoHover height="40px">
                                  배송완료
                                </WhiteButtonNoHover>
                              )}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    )
                  );
                })}
              </DeliveryTableWrapper>
            )}
          </>
        )}
      </DeliveryWrapper>
      {modal && (
        <Modal closeModal={() => setModal(!modal)}>
          <DeliveryDetail
            closeModal={() => setModal(!modal)}
            orderSellerResponses={selectData}
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
