import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getSellerReview } from '../../../../apis/seller/review';
import Pagination from '../../../common/Pagination';
import { WhiteWrapper } from '../../common/Box.style';
import ReviewStar from '../../common/reviewStar/ReviewStar';
import { UserImgWrapper } from '../../common/sellerCommon.style';
import SubTitle from '../../common/SubTitle';
import { SellerTitle } from '../../common/Title.style';
import { EmptyTable } from '../../main/popularProducts/MainPopularProducts.style';
import { ProductReviewsTable, ReviewBlock } from './ProductReviews.style';

export default function ProductReviews() {
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const { isLoading: sellerReviewLoading, data: reviews } = useQuery(
    ['sellerReview', nowPage],
    () => getSellerReview(nowPage),
    {
      keepPreviousData: true,
      onSuccess: res => {
        setNowPage(res.pageVo.nowPage);
        setTotalPage(res.pageVo.totalPage);
      },
      onError: () => {
        console.log('error');
      },
    },
  );

  return (
    <>
      <SellerTitle>리뷰 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <SubTitle color="#CABDFF" title="상품별 리뷰" />
        {!sellerReviewLoading && (
          <>
            {reviews.reviewSelectionResponses.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록된 리뷰가 없습니다</h3>
              </EmptyTable>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '60vh',
                }}
              >
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="70%">리뷰</th>
                      <th width="25%">상품</th>
                    </tr>
                  </thead>
                  {reviews.reviewSelectionResponses.map((review, idx) => {
                    return (
                      <tbody key={idx}>
                        <tr>
                          <td>{idx + 1}</td>
                          <td>
                            <ReviewBlock>
                              <UserImgWrapper
                                src={review.userProfileImg}
                                alt=""
                                width="50px"
                                className="productReviewsImg"
                              ></UserImgWrapper>
                              <div>
                                <div>dmstjd3256</div>
                                <div className="review">
                                  {review.reviewContent}
                                </div>
                              </div>
                              <div className="time">
                                <ReviewStar reviewRate={review.reviewRate} />
                              </div>
                            </ReviewBlock>
                          </td>
                          <td className="productReviewsTableImg">
                            <img src={review.productMainImgSrc} alt="" />
                            <div>{review.productName}</div>
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
      </WhiteWrapper>
    </>
  );
}
