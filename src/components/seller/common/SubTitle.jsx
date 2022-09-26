import React from 'react';
import { SubTitleBox, SubTitleText, SubTitleWrapper } from './Title.style';

export default function SubTitle(props) {
  console.log(props.color);
  return (
    <SubTitleWrapper>
      <SubTitleBox color={props.color} />
      <SubTitleText>{props.title}</SubTitleText>
    </SubTitleWrapper>
  );
}
