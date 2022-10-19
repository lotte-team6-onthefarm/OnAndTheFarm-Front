import React from 'react';
import { UpdateImageViewWrapper } from '../ProductManagement.style';

export default function UpdateImageView(props) {
  return (
    <UpdateImageViewWrapper>
      <div>
        <img
          src={props.upNowMainImage}
          alt=""
          className="productImagePreview"
        />
        <div>삭제</div>
      </div>
    </UpdateImageViewWrapper>
  );
}
