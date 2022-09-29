import React from 'react';
import { ProductTextWrapper } from './ProductManagement.style';

export default function ProductInput(props) {
  return (
    <ProductTextWrapper>
      <div className="title">{props.title}</div>
      <input placeholder={props.placeholder}></input>
    </ProductTextWrapper>
  );
}
