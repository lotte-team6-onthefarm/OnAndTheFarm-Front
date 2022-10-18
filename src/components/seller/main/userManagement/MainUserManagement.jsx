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

export default function MainUserManagement(props) {
  const mainData = props.mainData;
  const preMainData = props.preMainData;
  const precentageCal = (before, now) => {
    return ((now - before) / before) * 100;
  };
  const pricePercent = precentageCal(
    preMainData.totalPrice,
    mainData.totalPrice,
  );
  const orderPercent = precentageCal(
    preMainData.totalOrderCount,
    mainData.totalOrderCount,
  );
  const data = {
    customerCount: '24',
    customerPercent: '17.5',
    earn: '25000000',
    earnPercent: '25.5',
  };
  const [menu, setMenu] = useState('1');
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
                <IconTitleBox width="18px">신규 주문 수</IconTitleBox>
              </IconWrapper>
              {orderPercent > 100 && <UpDownBox state="1">↑ 100%</UpDownBox>}
              {orderPercent > 0 && orderPercent < 100 && (
                <UpDownBox state="1">↑ {orderPercent}%</UpDownBox>
              )}
              {orderPercent > -100 && orderPercent < 0 && (
                <UpDownBox state="0">↓ {orderPercent}</UpDownBox>
              )}
              {orderPercent < -100 && <UpDownBox state="1">↓ -100%</UpDownBox>}
            </div>
            <GrayInnerWrapper>{mainData.totalOrderCount}건</GrayInnerWrapper>
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
              {pricePercent >= 100 && <UpDownBox state="1">↑ 100%</UpDownBox>}
              {pricePercent > 0 && pricePercent < 100 && (
                <UpDownBox state="1">↑ {pricePercent}%</UpDownBox>
              )}
              {pricePercent > -100 && pricePercent <= 0 && (
                <UpDownBox state="0">↓ {pricePercent}</UpDownBox>
              )}
              {pricePercent <= -100 && <UpDownBox state="1">↓ -100%</UpDownBox>}
            </div>
            <GrayInnerWrapper>
              {toLocaleString(mainData.totalPrice)}원
            </GrayInnerWrapper>
          </MainUserWhiteBlock>
        </MainUserWhiteWrapper>
      </GrayWrapper>
      <MainBottomGraph
        menu={menu}
        dayOrderCount={mainData.dayOrderCount}
        dayPrices={mainData.dayPrices}
      ></MainBottomGraph>
    </WhiteWrapper>
  );
}
