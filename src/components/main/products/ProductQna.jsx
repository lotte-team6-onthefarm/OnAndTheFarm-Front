import React, { useState } from 'react';
import { getQnaList, postAddQna } from '../../../apis/user/qna';
import { Button } from '../../common/Button';
import { useMutation, useQuery } from 'react-query';
import RatingInputComp from '../../common/Rating';
import QnaItemComp from '../qna/QnaItem';
import {
  ProductQnaDiv,
  QnaAddDiv,
  QnaAddButtonDiv,
  QnaListDiv,
} from './ProductQna.style';

export default function ProductQnaComp(props) {
  const productId = props.productDetailId
  const [productQna, setProductQna] = useState('');
  const [productQnaList, setProductQnaList] = useState([]);
  const test = () => {
    let data = {}
    data.productId = productId
    data.productQnaContent = productQna

    addQna(data)
  }

  const { mutate: addQna, isLoading: isAddQnaLoading } = useMutation(
    postAddQna,
    {
      onSuccess: res => {
        alert('질문이 추가되었습니다');
      },
      onError: () => {
        console.log('에러');
      },
    }, 
  );
  const {
    isLoading: isGetQnaList,
    // refetch: getCartistRefetch,
    data: qnaList,
  } = useQuery('qnaList', () => getQnaList(productId), {
    refetchOnWindowFocus: true,
    onSuccess: res => {
    },
    onError: () => {
      console.log('에러');
    },
  });


  return (
    <ProductQnaDiv>
        <div>
          <h4>문의사항</h4>
          <hr />
        </div>
        {!isGetQnaList && <QnaListDiv>
          {qnaList.map((item, index) => {
            return (
              <QnaItemComp
                key={index}
                id={item.productQnaId}
                url='https://contents.lotteon.com/display/dshoplnk/12905/2/M001402/276873/P75260B86794950F9B3895FCA46D6F5D7ABF08A546585DF0082E2F542351E5B0C/file/dims/optimize'
                name={item.userName}
                content={item.productQnaContent}
                answer={item.productSellerAnswer}
                date={item.productQnaCreatedAt}
              ></QnaItemComp>
            );
          })}
        </QnaListDiv>}
        
        <div style={{ display: 'flex', margin: '20px auto', width: '90%' }}>
          <QnaAddDiv>
            <input value={productQna} onChange={e => setProductQna(e.target.value)}
              style={{ width: '100%', height: '100px', marginRight: '20px' }}
            ></input>
            <QnaAddButtonDiv>
              <Button
                text="문의 작성"
                color="#40AA54"
                width="130px"
                height="30px"
                onClick={test}
              ></Button>
            </QnaAddButtonDiv>
          </QnaAddDiv>
        </div>
      </ProductQnaDiv>
  );
}
