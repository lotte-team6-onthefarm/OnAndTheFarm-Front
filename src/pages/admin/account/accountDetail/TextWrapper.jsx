import React from 'react';
import { AccountDetailTextWrapper } from './AccountDetail.styled';

export default function TextWrapper(props) {
  return (
    <AccountDetailTextWrapper>
      <div className="accountDetailTitle">{props.title}</div>
      <div className="accountDetailContent">{props.content}</div>
    </AccountDetailTextWrapper>
  );
}
