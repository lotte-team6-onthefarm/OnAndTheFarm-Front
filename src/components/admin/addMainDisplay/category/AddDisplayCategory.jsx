import React from 'react';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { ProductStatusWrapper } from '../../../seller/products/productsManagement/ProductManagement.style';

export default function AddDisplayCategory(props) {
  return (
    <WhiteWrapper
      style={{
        fontSize: '18px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      카테고리 선택
      <ProductStatusWrapper width="257px">
        <div className="statusBtn" style={{ marginLeft: '20px' }}>
          <div
            className={props.category === '배너' ? 'statusBtnactive' : ''}
            onClick={() => {
              props.setCategory('배너');
            }}
          >
            배너
          </div>
          <div
            className={props.category === '상품' ? 'statusBtnactive' : ''}
            onClick={() => {
              props.setCategory('상품');
            }}
          >
            상품
          </div>
          <div
            className={props.category === 'SNS' ? 'statusBtnactive' : ''}
            onClick={() => {
              props.setCategory('SNS');
            }}
          >
            SNS
          </div>
          <div
            className={props.category === '카테고리' ? 'statusBtnactive' : ''}
            onClick={() => {
              props.setCategory('카테고리');
            }}
          >
            카테고리
          </div>
        </div>
      </ProductStatusWrapper>
    </WhiteWrapper>
  );
}
