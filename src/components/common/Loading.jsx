import React from 'react';
import { Background, LoadingText } from './Loading.style';

export default function Loading(props) {
  console.log(props.loading)
  return (
    <Background loading={props.loading}>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
    </Background>
  );
}
