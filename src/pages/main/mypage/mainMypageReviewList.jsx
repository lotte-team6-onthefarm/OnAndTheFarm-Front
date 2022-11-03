import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getAddReviewList, getMyReviewList } from '../../../apis/user/review';
import { Button } from '../../../components/common/Button';
import ReviewInput from '../../../components/main/mypage/ReviewInput';
import MenuTabComp from '../../../components/main/mypage/MenuTabComp';
import { EmptyTable } from '../../../components/seller/main/popularProducts/MainPopularProducts.style';
import {
  ProductReviewsTable,
  ReviewBlock,
} from '../../../components/seller/products/productReviews/ProductReviews.style';
import { ReviewContentDiv, AnswerDiv } from './mainMypageReview.style';
import ReviewEditInput from '../../../components/main/mypage/ReviewEditInput';
import Pagination from '../../../components/common/Pagination';

export default function MainMypageReviewList() {
  const menuTab = [
    { title: '작성 가능한 리뷰', url: '/mypage/review/addlist' },
    { title: '내가 작성한 리뷰', url: '/mypage/review/myreview' },
    { title: '문의사항', url: '/mypage/review/qna' },
  ];

  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const {
    isLoading: MyReviewListLoading,
    refetch: getMyReviewListRefetch,
    data: reviews,
  } = useQuery(
    ['MyReviewList', nowPage],
    () =>
    getMyReviewList({
        page: nowPage,
      }),
    {
      refetchOnWindowFocus: true,
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.pageVo.nowPage);
        setTotalPage(res.pageVo.totalPage);
      },
      onError: () => {
        console.log('에러');
      },
    },
  );


  return (
    <div>
      <MenuTabComp menuTab={menuTab}></MenuTabComp>
      <ReviewContentDiv>
        {!MyReviewListLoading && (
          <>
            {reviews.reviewSelectionResponses.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>등록된 리뷰가 없습니다.</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="10%">상품이미지</th>
                      <th width="25%">상품이름</th>
                      <th width="10%">작성날짜</th>
                      <th width="50%">리뷰내용</th>
                    </tr>
                  </thead>
                  {reviews.reviewSelectionResponses.map((data, idx) => {
                    return (
                      <tbody
                        key={idx}
                      >
                        <tr>
                          <td>{idx + 1}</td>
                          <td className="title">
                            <img src={data.productMainImgSrc} alt="" />
                          </td>
                          <td>
                            <ReviewBlock>
                              <div>
                                <div>{data.productName}</div>
                              </div>
                            </ReviewBlock>
                          </td>
                          <td>{data.reviewCreatedAt}</td>
                          <td style={{display:"flex"}}>
                            <ReviewEditInput
                              placeholder="나의리뷰"
                              id={data.reviewId}
                              type="text"
                              reviewContent={data.reviewContent}
                              reviewRate={data.reviewRate}
                              reviewLikeCount={data.reviewLikeCount}
                              orderProductId={data.orderProductId}
                            />
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
