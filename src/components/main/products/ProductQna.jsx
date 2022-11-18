import React, { useState } from 'react';
import { getQnaList } from '../../../apis/user/qna';
import { Button } from '../../common/Button';
import { useQuery } from 'react-query';
import QnaItemComp from '../qna/QnaItem';
import { ProductQnaDiv, QnaListDiv } from './ProductQna.style';
import Modal from '../../common/Modal';
import MakeQna from '../qna/MakeQna';
import Pagination from '../../common/Pagination';
import { EmptyTable } from '../../seller/main/popularProducts/MainPopularProducts.style';

export default function ProductQnaComp(props) {
  const productId = props.productDetailId;
  const [modal, setModal] = useState(false);
  const [nowPage, setNowPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const {
    isLoading: isGetQnaList,
    refetch: getQnaListRefetch,
    data: qnaList,
  } = useQuery(
    ['getQnaList', nowPage],
    () =>
      getQnaList({
        productId: productId,
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

  const openModal = () => {
    setModal(!modal);
  };
  return (
    <ProductQnaDiv>
      {!isGetQnaList && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h4>
            문의사항<span> {qnaList.totalElementNum.toLocaleString()}</span>{' '}
          </h4>
          <Button
            text="문의 작성"
            color="#40AA54"
            width="130px"
            height="30px"
            onClick={openModal}
            margin="10px"
          ></Button>
        </div>
      )}
      <hr />
      {!isGetQnaList &&
        (qnaList.productQnAResponseList.length === 0 ? (
          <EmptyTable height="100px">
            <h3>현재 등록된 문의가 없습니다.</h3>
          </EmptyTable>
        ) : (
          <QnaListDiv>
            {qnaList.productQnAResponseList.map((item, index) => {
              return (
                <QnaItemComp
                  key={index}
                  id={item.productQnaId}
                  url={item.userProfileImg}
                  name={item.userName}
                  content={item.productQnaContent}
                  answer={item.productSellerAnswer}
                  date={item.productQnaCreatedAt}
                ></QnaItemComp>
              );
            })}
          </QnaListDiv>
        ))}
      {totalPage !== 0 && (
        <Pagination
          nowPage={nowPage + 1}
          totalPage={totalPage}
          setPage={setNowPage}
        ></Pagination>
      )}
      {modal && (
        <Modal closeModal={() => setModal(!modal)} style={{ zIndex: '10' }}>
          <MakeQna id={productId} setModal={setModal}></MakeQna>
        </Modal>
      )}
    </ProductQnaDiv>
  );
}
