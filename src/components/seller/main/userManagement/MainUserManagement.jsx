import React, { useState } from 'react';
import { WhiteWrapper } from '../../common/Box.style';
import SubTitle from '../../common/SubTitle';
import {
  GrayInnerWrapper,
  GrayWrapper,
  MainUserWhiteBlock,
  MainUserWhiteWrapper,
} from './MainUserManagement.style';
import { BiUser } from 'react-icons/bi';
import { VscGraphLine } from 'react-icons/vsc';
import { IconBox, IconTitleBox, IconWrapper } from '../../common/Icon.style';
import { UpDownBox } from '../../common/sellerCommon.style';
import { toLocaleString } from '../../../../utils/commonFunction';
import MainBottomGraph from './mainBottom/MainBottomGraph';

export default function MainUserManagement() {
  const data = {
    customerCount: '1024',
    customerPercent: '17.5',
    earn: '25000000',
    earnPercent: '25.5',
  };
  const [menu, setMenu] = useState('0');
  const menuHandler = select => {
    setMenu(select);
  };
  return (
    <WhiteWrapper width="100%" marginBottom="10px">
      <SubTitle color="#FFBC99" title="회원 관리" />
      <GrayWrapper>
        <MainUserWhiteWrapper
          width="50%"
          onClick={() => {
            menuHandler('0');
          }}
        >
          <MainUserWhiteBlock className={menu === '0' ? 'active' : ''}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconWrapper>
                <IconBox width="20px">
                  <BiUser />
                </IconBox>
                <IconTitleBox width="18px">구매 고객 수</IconTitleBox>
              </IconWrapper>
              <UpDownBox state="0">↓ {data.customerPercent}%</UpDownBox>
            </div>
            <GrayInnerWrapper>{data.customerCount}명</GrayInnerWrapper>
          </MainUserWhiteBlock>
        </MainUserWhiteWrapper>
        <MainUserWhiteWrapper
          width="50%"
          onClick={() => {
            menuHandler('1');
          }}
          className={menu === '1' ? 'active' : ''}
        >
          <MainUserWhiteBlock className={menu === '1' ? 'active' : ''}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconWrapper>
                <IconBox width="20px">
                  <VscGraphLine />
                </IconBox>
                <IconTitleBox width="18px">수익</IconTitleBox>
              </IconWrapper>
              <UpDownBox>↑ {data.earnPercent}%</UpDownBox>
            </div>
            <GrayInnerWrapper>{toLocaleString(data.earn)}원</GrayInnerWrapper>
          </MainUserWhiteBlock>
        </MainUserWhiteWrapper>
      </GrayWrapper>
      <MainBottomGraph menu={menu}></MainBottomGraph>
    </WhiteWrapper>
  );
}
