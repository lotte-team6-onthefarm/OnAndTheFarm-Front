import React from 'react';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';
import { GrayInnerWrapper, GrayWrapper } from './MainUserManagement.style';
import { BiUser } from 'react-icons/bi';
import { VscGraphLine } from 'react-icons/vsc';
import { IconBox, IconTitleBox, IconWrapper } from '../../common/Icon.style';
import { UpDownBox } from '../../common/sellerCommon.style';

export default function MainUserManagement() {
  const data = {
    customerCount: '1024',
    customerPercent: '17.5',
    earn: '25000000',
    earnPercent: '25.5',
  };
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#FFBC99" title="회원 관리" />
      <GrayWrapper>
        <WhiteWrapper width="48%" height="100%">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconWrapper>
              <IconBox width="25px">
                <BiUser />
              </IconBox>
              <IconTitleBox width="20px">고객 수</IconTitleBox>
            </IconWrapper>
            <UpDownBox state="0">↓ {data.customerPercent}%</UpDownBox>
          </div>
          <GrayInnerWrapper>{data.customerCount}명</GrayInnerWrapper>
        </WhiteWrapper>
        <WhiteWrapper width="48%" height="100%">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconWrapper>
              <IconBox width="25px">
                <VscGraphLine />
              </IconBox>
              <IconTitleBox width="20px">수익</IconTitleBox>
            </IconWrapper>
            <UpDownBox>↑ {data.earnPercent}%</UpDownBox>
          </div>
          <GrayInnerWrapper>{data.earn}원</GrayInnerWrapper>
        </WhiteWrapper>
      </GrayWrapper>
    </WhiteWrapper>
  );
}
