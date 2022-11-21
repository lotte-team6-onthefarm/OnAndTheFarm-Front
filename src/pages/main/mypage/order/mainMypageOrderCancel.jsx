import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  changeStatusName,
  getNoSecDate,
} from '../../../../utils/commonFunction';
import Pagination from '../../../../components/common/Pagination';
import MenuTabComp from '../../../../components/main/mypage/MenuTabComp';
import { ReviewContentDiv } from './mainMypageOrderDetail.style';
import { EmptyTable } from '../../../../components/seller/main/popularProducts/MainPopularProducts.style';
import { ProductReviewsTable } from '../../../../components/seller/products/productReviews/ProductReviews.style';
import { getCancelOrderList } from '../../../../apis/user/order';

export default function MainMypageOrderCancel() {
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const {
    isLoading: cancelOrderListLoading,
    refetch: getCancelOrderListRefetch,
    data: claimList,
  } = useQuery(
    ['getCancelOrderList', nowPage],
    () =>
      getCancelOrderList({
        page: nowPage,
      }),
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
      onSuccess: res => {
        console.log(res);
        setNowPage(res.currentPageNum);
        setTotalPage(res.totalPageNum);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );

  // hook
  const navigate = useNavigate();
  const moveDetail = id => {
    navigate(`/mypage/orders/detail`, { state: id });
  };

  return (
    <div>
      <ReviewContentDiv>
        {!cancelOrderListLoading && (
          <>
            {claimList.responses.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>주문 취소내역이 없습니다.</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="10%">NO.</th>
                      <th width="10%">사진</th>
                      <th width="10%">상품이름</th>
                      <th width="10%">갯수</th>
                      <th width="10%">가격</th>
                      <th width="10%">상태</th>
                      <th width="15%">날짜</th>
                    </tr>
                  </thead>
                  {claimList.responses.map((data, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr onClick={() => moveDetail(data.orderSerial)}>
                          <td width="5%">{idx + 1}</td>
                          <td width="10%" className="productReviewsTableImg">
                            <img src={data.productImage} alt="" />
                          </td>
                          <td width="10%">{data.productName}</td>
                          <td width="5%">{data.productQty.toLocaleString()}</td>
                          <td width="5%">
                            {data.productPrice.toLocaleString()}원
                          </td>
                          <td width="10%">
                            {changeStatusName(data.productStatus)}
                          </td>
                          <td width="10%">{getNoSecDate(data.orderDate)}</td>
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
