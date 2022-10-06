import React, { useState } from 'react';
import { WhiteWrapper } from '../../common/Box.style';
import { UserImgWrapper } from '../../common/sellerCommon.style';
import SubTitle from '../../common/SubTitle';
import { SellerTitle } from '../../common/Title.style';
import {
  ProductReviewsTable,
  ReviewBlock,
} from '../productReviews/ProductReviews.style';
import AnswerBox from './AnswerBox';

export default function ProductQnAs() {
  const [selected, setSelected] = useState([]);
  const selectedAddHandler = idx => {
    setSelected([idx, ...selected]);
  };
  const selectedDelHandler = idx => {
    const newSelected = selected.filter(select => select !== idx);
    setSelected(newSelected);
  };
  const datas = [
    {
      name: '손은성',
      review: '과일 최소 주문수량이 어떻게 되죠?',
      productName: '경북 청도 천도복숭아 2kg/1box',
    },
    {
      name: '김명자',
      review: '포도 당도가 어떻게 되나요? 따로 주문하면 따로 배송이 될까요?',
      productName: '국내산 프리미엄 거봉포도 900g',
    },
    {
      name: '박철순',
      review:
        '과일이 정말 신선하네요! 믿고 구매할 수 있는 상품이라 마음에 들어요 ㅎㅎ 하지만 배송이 조금 느려서 아쉬웠어요ㅜ 혹시 배송업체를 바꾸 실 생각은 없으신가요?',
      productName: '경북 청도 천도복숭아 2kg/1box',
    },
  ];
  return (
    <>
      <SellerTitle>QnA 관리</SellerTitle>
      <WhiteWrapper width="100%" marginBottom="10px">
        <SubTitle color="#B5E4CA" title="상품별 QnA" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ProductReviewsTable>
            <thead>
              <tr style={{ fontSize: '13px' }}>
                <th width="5%">NO.</th>
                <th width="70%">QnA</th>
                <th width="25%">상품</th>
              </tr>
            </thead>
            {datas.map((data, idx) => {
              return (
                <tbody
                  key={idx}
                  className={selected.includes(idx) ? 'selectedTbody' : ''}
                >
                  <tr>
                    <td>{idx + 1}</td>
                    <td>
                      <ReviewBlock>
                        <UserImgWrapper
                          src={require('../../../../assets/구데타마.png')}
                          alt=""
                          width="50px"
                        ></UserImgWrapper>
                        <div>
                          <div>{data.name}</div>
                          <div className="review">{data.review}</div>
                        </div>
                        <div className="time">8h</div>
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
                        />
                      </div>
                    </td>
                    <td className="title">
                      <img
                        src={require('../../../../assets/products/복숭아.png')}
                        alt=""
                      />
                      <div>{data.productName}</div>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </ProductReviewsTable>
        </div>
      </WhiteWrapper>
    </>
  );
}
