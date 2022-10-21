import React, { useState } from 'react';
import { getQnaList } from '../../../apis/user/qna';
import { Button } from '../../common/Button';
import { useQuery } from 'react-query';
import QnaItemComp from '../qna/QnaItem';
import { ProductQnaDiv, QnaListDiv } from './ProductQna.style';
import Modal from '../../common/Modal';
import MakeQna from '../qna/MakeQna';
import NoneFeed from '../../sns/main/NoneFeed';

export default function ProductQnaComp(props) {
  const productId = props.productDetailId;

  const [modal, setModal] = useState(false);
  const [selectData, setSelectData] = useState('');
  const test = () => {
    setModal(!modal);
  };

  const { isLoading: isGetQnaList, data: qnaList } = useQuery(
    'qnaList',
    () => getQnaList(productId),
    {
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      onSuccess: res => {},
      onError: () => {
        console.log('에러');
      },
    },
  );

  return (
    <ProductQnaDiv>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>문의사항</h4>
        <Button
          text="문의 작성"
          color="#40AA54"
          width="130px"
          height="30px"
          onClick={test}
          margin="10px"
        ></Button>
      </div>
      <hr />
      {!isGetQnaList &&
        (qnaList.length === 0 ? (
          <NoneFeed text="문의가 없습니다" />
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
      {modal && (
        <Modal closeModal={() => setModal(!modal)} style={{ zIndex: '10' }}>
          <MakeQna id={productId} setModal={setModal}></MakeQna>
        </Modal>
      )}
    </ProductQnaDiv>
  );
}
