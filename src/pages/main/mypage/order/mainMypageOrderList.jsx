import React, { useState } from 'react';
import { useQuery } from 'react-query';
import MenuTabComp from '../../../../components/main/mypage/MenuTabComp';
import { EmptyTable } from '../../../../components/seller/main/popularProducts/MainPopularProducts.style';
import { ProductReviewsTable } from '../../../../components/seller/products/productReviews/ProductReviews.style';

import { getMyOrderList } from '../../../../apis/user/order';
import OrderItemComp from '../../../../components/main/mypage/OrderItem';
import { useNavigate } from 'react-router-dom';
import { changeStatusName, getNoSecDate } from '../../../../utils/commonFunction';
import Pagination from '../../../../components/common/Pagination';
import { ReviewContentDiv } from './mainMypageOrderDetail.style';

export default function MainMypageOrderList() {
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const {
    isLoading: isGetMyOrderList,
    refetch: getMyOrderListRefetch,
    data: orderList,
  } = useQuery(
    ['getMyOrderList', nowPage],
    () =>
      getMyOrderList({
        page: nowPage,
      }),
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.currentPageNum);
        setTotalPage(res.totalPageNum);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  const navigate = useNavigate();
  const moveDetail = id => {
    navigate(`/mypage/orders/detail`, { state: id });
  };

  return (
    <div>
      <ReviewContentDiv>
        {!isGetMyOrderList && (
          <>
            {orderList.responses.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>주문 내역이 없습니다.</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="10%">NO.</th>
                      <th width="15%">주문날짜</th>
                      <th width="10%">주문번호</th>
                      <th width="10%">가격</th>
                      <th width="10%">상태</th>
                      <th width="55%">상품리스트</th>
                    </tr>
                  </thead>
                  {orderList.responses.map((data, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr onClick={() => moveDetail(data.ordersSerial)}>
                          <td width="5%">{idx + 1}</td>
                          <td width="10%">{getNoSecDate(data.orderDate)}</td>
                          <td width="10%">{data.ordersSerial}</td>
                          <td width="10%">{data.orderTotalPrice.toLocaleString()}</td>
                          <td width="10%">
                            {changeStatusName(data.orderStatus)}
                          </td>
                          <td>
                            {data.orderUserResponses.map((item, index) => {
                              return (
                                <OrderItemComp
                                  key={index}
                                  orderProductId={item.orderProductId}
                                  productName={item.orderProductName}
                                  orderProductMainImg={item.orderProductMainImg}
                                  orderProductPrice={item.orderProductPrice}
                                  orderProductQty={item.orderProductQty}
                                  productId={item.productId}
                                  orderProductStatus={item.orderProductStatus}
                                ></OrderItemComp>
                              );
                            })}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </ProductReviewsTable>
              </div>
            )}
          </>
        )}
        {totalPage !== 0 && (
        <Pagination
          nowPage={nowPage + 1}
          totalPage={totalPage}
          setPage={setNowPage}
        ></Pagination>
      )}
      </ReviewContentDiv>
    </div>
  );
}
