import React from 'react';
import {
  BWButtonWrapper,
  GPButtonWrapper,
  GRButtonWrapper,
} from './ColorStatusButton.styled';

function GreenPurpleStatusButton(props) {
  return (
    <GPButtonWrapper fontSize={props.fontSize} status={props.status}>
      {props.text}
    </GPButtonWrapper>
  );
}

function GreenRedStatusButton(props) {
  return (
    <GRButtonWrapper fontSize={props.fontSize} status={props.status}>
      {props.text}
    </GRButtonWrapper>
  );
}

function BlackWhiteStatusButton(props) {
  return (
    <BWButtonWrapper fontSize={props.fontSize} status={props.status}>
      {props.text}
    </BWButtonWrapper>
  );
}

export {
  GreenPurpleStatusButton,
  GreenRedStatusButton,
  BlackWhiteStatusButton,
};
