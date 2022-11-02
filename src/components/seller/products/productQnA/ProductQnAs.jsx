import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getSellerQna } from '../../../../apis/seller/qna';
import { getGoneTime } from '../../../../utils/commonFunction';
import Pagination from '../../../common/Pagination';
import { WhiteWrapper } from '../../common/Box.style';
import { GreenRedStatusButton } from '../../common/ColorStatusButton';
import { UserImgWrapper } from '../../common/sellerCommon.style';
import SubTitle from '../../common/SubTitle';
import { SellerTitle } from '../../common/Title.style';
import { EmptyTable } from '../../main/popularProducts/MainPopularProducts.style';
import {
  ProductReviewsTable,
  ReviewBlock,
} from '../productReviews/ProductReviews.style';
import AnswerBox from './AnswerBox';

export default function ProductQnAs() {
  const [selected, setSelected] = useState([]);
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const selectedAddHandler = idx => {
    setSelected([idx, ...selected]);
  };
  const selectedDelHandler = idx => {
    const newSelected = selected.filter(select => select !== idx);
    setSelected(newSelected);
  };
  const {
    isLoading: sellerQnALoading,
    // refetch: sellerMainProduct,
    data: qnas,
  } = useQuery(['sellerQnA', nowPage], () => getSellerQna(nowPage), {
    keepPreviousData: true,
    onSuccess: res => {
      setNowPage(res.currentPageNum);
      setTotalPage(res.totalPageNum);
    },
    onError: () => {
      console.log('error');
    },
  });
  console.log(qnas, 'asdasd');
  return (
    <>
      <SellerTitle>QnA 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px" minHeight="80vh">
        <SubTitle color="#B5E4CA" title="상품별 QnA" />
        {!sellerQnALoading && (
          <>
            {qnas.sellerProductQnaResponseList.length === 0 ? (
              <EmptyTable height="60vh">
                <h3>현재 등록된 QnA가 없습니다.</h3>
              </EmptyTable>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ProductReviewsTable>
                  <thead>
                    <tr style={{ fontSize: '13px' }}>
                      <th width="5%">NO.</th>
                      <th width="8%">상태</th>
                      <th width="62%">QnA</th>
                      <th width="25%">상품</th>
                    </tr>
                  </thead>
                  {qnas.sellerProductQnaResponseList.map((qna, idx) => {
                    return (
                      <tbody
                        key={idx}
                        className={
                          selected.includes(idx) ? 'selectedTbody' : ''
                        }
                      >
                        <tr>
                          <td>{idx + 1}</td>
                          <td>
                            <GreenRedStatusButton
                              text={
                                qna.productQnaStatus === 'completed'
                                  ? '답변완료'
                                  : '답변대기중'
                              }
                              status={
                                qna.productQnaStatus === 'completed' ? 1 : 2
                              }
                              fontSize="12px"
                            ></GreenRedStatusButton>
                          </td>
                          <td>
                            <ReviewBlock>
                              <div className="productQnAsdiv">
                                <div>{qna.userName}</div>
                                <div className="review">
                                  {qna.productQnaContent}
                                </div>
                              </div>
                              <div className="time">
                                {getGoneTime(qna.productQnaCreatedAt)}
                              </div>
                            </ReviewBlock>
                            <div
                              className={
                                selected.includes(idx) ? 'selected' : 'answer'
                              }
                            >
                              <AnswerBox
                                idx={idx}
                                selectedAddHandler={selectedAddHandler}
                                selectedDelHandler={selectedDelHandler}
                                qna={qna}
                              />
                            </div>
                          </td>
                          <td className="title">
                            <img src={qna.productImg} alt="" />
                            <div>{qna.productName}</div>
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
        <Pagination
          nowPage={nowPage + 1}
          totalPage={totalPage}
          setPage={setNowPage}
        ></Pagination>
      </WhiteWrapper>
    </>
  );
}
