import React from 'react';
import { SubTitleBox, SubTitleText, SubTitleWrapper } from './Title.style';

export default function SubTitle(props) {
  return (
    <SubTitleWrapper>
      <SubTitleBox color={props.color} />
      <SubTitleText>{props.title}</SubTitleText>
    </SubTitleWrapper>
  );
}
