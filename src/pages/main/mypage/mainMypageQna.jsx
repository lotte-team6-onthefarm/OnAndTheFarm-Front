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
import { getMyQnaList } from '../../../apis/user/qna';
import QnaEditInput from '../../../components/main/mypage/QnaEditInput';
import Pagination from '../../../components/common/Pagination';

export default function MainMypageQna() {
  const menuTab = [
    { title: '작성 가능한 리뷰', url: '/mypage/review/addlist' },
    { title: '내가 작성한 리뷰', url: '/mypage/review/myreview' },
    { title: '문의사항', url: '/mypage/review/qna' },
  ];

  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const {
    isLoading: MyQnaListLoading,
    refetch: getMyQnaListRefetch,
    data: qnaList,
  } = useQuery(
    ['MyQnaList', nowPage],
    () =>
    getMyQnaList({
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
      <MenuTabComp menuTab={menuTab}></MenuTabComp>
      <ReviewContentDiv>
        {!MyQnaListLoading && (
          <>
            {qnaList.responses.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>등록된 질문이 없습니다</h3>
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
                      <th width="50%">질문</th>
                    </tr>
                  </thead>
                  {qnaList.responses.map((data, idx) => {
                    return (
                      <tbody key={idx}>
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
                          <td>{data.productQnaCreatedAt}</td>
                          <td style={{ display: 'flex' }}>
                            <QnaEditInput
                              placeholder="나의질문"
                              id={data.productQnaId}
                              type="text"
                              qnaContent={data.productQnaContent}
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
