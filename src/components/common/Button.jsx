import React from 'react';
import { StyledButton } from './Button.style';

function Button(props) {
  return (
    <StyledButton width={props.width} height={props.height} fontColor={props.fontColor} color={props.color} margin={props.margin} onClick={props.onClick}>{props.text}</StyledButton>
  );
}

function GreenButton(props) {
  return (
    <GreenButton width="100px">ㅁㅇㄹㅁㄴㄹㅁ</GreenButton>
  );
}

function BlueButton(props) {
  return (
    <BlueButton width="100px">{props.text}</BlueButton>
  );
}

export { Button, GreenButton, BlueButton };