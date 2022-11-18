import React from 'react';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { ListTextWrapper } from '../AddMainDisplay.styled';
import { AddDisplayOrganizeWrapper } from './AddDisplayOrganize.styled';

export default function AddDisplayOrganize(props) {
  return (
    <WhiteWrapper
      style={{
        fontSize: '18px',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
        }}
      >
        선택 데이터
      </div>
      <AddDisplayOrganizeWrapper>
        <ListTextWrapper>
          <div className="organizeTextTitle">모듈</div>
          <div className="mainTextContent">{props.block}</div>
        </ListTextWrapper>
        <ListTextWrapper>
          <div className="organizeTextTitle">카테고리</div>
          <div className="mainTextContent">{props.category}</div>
        </ListTextWrapper>
        <ListTextWrapper>
          <div className="organizeTextTitle">데이터 툴 ID</div>
          <div className="mainTextContent">{props.dataTool}</div>
        </ListTextWrapper>
        <ListTextWrapper>
          <div className="organizeTextTitle">구좌 ID</div>
          <div className="mainTextContent">{props.account}</div>
        </ListTextWrapper>
        <ListTextWrapper>
          <div className="organizeTextTitle">아이템 리스트 이름</div>
          <div className="mainTextContent">{props.itemsName}</div>
        </ListTextWrapper>
        <ListTextWrapper>
          <div className="organizeTextTitle">아이템 리스트 설명</div>
          <div className="mainTextContent">{props.itemsDetail}</div>
        </ListTextWrapper>
        <ListTextWrapper>
          <div className="organizeTextTitle">모듈 우선순위</div>
          <div className="mainTextContent">{props.priority}</div>
        </ListTextWrapper>
      </AddDisplayOrganizeWrapper>
    </WhiteWrapper>
  );
}
