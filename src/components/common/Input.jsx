import React from 'react';
import { StyledInput, StyledInputDiv, StyledLabel } from './Input.style';

export default function Input(props) {
  return (
    <StyledInputDiv>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledInput
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
      ></StyledInput>
    </StyledInputDiv>
  );
}
