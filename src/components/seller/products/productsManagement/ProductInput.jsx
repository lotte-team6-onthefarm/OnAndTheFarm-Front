import React from 'react';
import { ProductTextWrapper } from './ProductManagement.style';

export default function ProductInput(props) {
  const setFunction = props.setFunction;
  return (
    <ProductTextWrapper>
      <div className="title">{props.title}</div>
      <input
        placeholder={props.placeholder}
        onChange={e => {
          setFunction(e.target.value);
        }}
      ></input>
    </ProductTextWrapper>
  );
}
