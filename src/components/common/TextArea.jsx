import React from 'react';
import { StyledTextArea, StyledInputDiv, StyledLabel } from './TextArea.style';

export default function TextArea(props) {
  return (
    <StyledInputDiv>
      <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      <StyledTextArea
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
        disabled={props.disabled}
      ></StyledTextArea>
    </StyledInputDiv>
  );
}
