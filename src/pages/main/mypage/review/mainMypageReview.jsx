import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getAddReviewList } from '../../../../apis/user/review';
import { ReviewContentDiv } from './mainMypageReview.style';
import ReviewInput from '../../../../components/main/mypage/ReviewInput';
import { EmptyTable } from '../../../../components/seller/main/popularProducts/MainPopularProducts.style';
import {
  ProductReviewsTable,
  ReviewBlock,
} from '../../../../components/seller/products/productReviews/ProductReviews.style';
import Pagination from '../../../../components/common/Pagination';

export default function MainMypageReview() {
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const {
    isLoading: AddReviewListLoading,
    refetch: getAddReviewListRefetch,
    isFetching: AddReviewListFetching,
    data: reviewList,
  } = useQuery(
    ['AddReviewList', nowPage],
    () =>
      getAddReviewList({
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

  return (
    <div>
      <ReviewContentDiv>
        {!AddReviewListLoading && (
          <>
            {reviewList.productReviewResponseList.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록가능한 리뷰가 없습니다.</h3>
              </EmptyTable>
            ) : (
              !AddReviewListFetching && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <ProductReviewsTable>
                    <thead>
                      <tr style={{ fontSize: '13px' }}>
                        <th width="5%">NO.</th>
                        <th width="10%">상품이미지</th>
                        <th width="25%">상품이름</th>
                        <th width="10%">주문날짜</th>
                        <th width="50%">리뷰작성</th>
                      </tr>
                    </thead>
                    {reviewList.productReviewResponseList.map((data, idx) => {
                      return (
                        <tbody key={idx}>
                          <tr>
                            <td>{idx + 1}</td>
                            <td className="productReviewsTableImg">
                              <img src={data.productMainImgSrc} alt="" />
                            </td>
                            <td>
                              <ReviewBlock>{data.productName}</ReviewBlock>
                            </td>
                            <td>{data.ordersDate}</td>
                            <td style={{ display: 'flex' }}>
                              <ReviewInput
                                placeholder="나의리뷰"
                                id="review"
                                type="text"
                                orderProductId={data.orderProductId}
                              />
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </ProductReviewsTable>
                </div>
              )
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
