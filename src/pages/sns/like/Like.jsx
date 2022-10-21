import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  FeedLikeWrapper,
  LikeCardWrapper,
  LikeImgBlock,
  LikeImgWrapper,
  LikeItemDescription,
} from './Like.styled';
import like1 from '../../../assets/sns/mysns/like1.png';
import like2 from '../../../assets/sns/mysns/like2.png';
import like3 from '../../../assets/sns/mysns/like3.png';
import like4 from '../../../assets/sns/mysns/like4.png';
import like5 from '../../../assets/sns/mysns/like5.png';
export default function Like() {
  const datas = [
    {
      name: '전북정읍 황종운',
      title: '고품질 완숙 찰 토마토 2.5kg',
      p: '24',
      price: '18,900',
      s: '3.5',
      r: '3',
      img: like1,
    },
    {
      name: '충북영동 이명숙',
      title: '새콤달콤의 조화 !  GAP 천홍 꼬마사과 1kg(15과~19과)',
      p: '15',
      price: '16,900',
      s: '5',
      r: '64',
      img: like2,
    },
    {
      name: '충북영동 김상진',
      title: '달콤 촉촉 황토방 숙성 반건시 540g(270g*2팩)/810g(270g*3팩)',
      p: '20',
      price: '15,900',
      s: '5',
      r: '17',
      img: like3,
    },
    {
      name: '경북경산 박수병',
      title: '저탄소GAP굴직한 샤인머스켓1.3kg(2송이)',
      p: '17',
      price: '24,800',
      s: '5',
      r: '78',
      img: like4,
    },
    {
      name: '전남무안 임영종',
      title: '30년 농꾼의 무안 햇자색양파 5kg',
      p: '14',
      price: '12,900',
      s: '4',
      r: '7',
      img: like5,
    },
  ];
  return (
    <FeedLikeWrapper>
      {datas.map((data, idx) => {
        return (
          <LikeCardWrapper>
            <LikeImgWrapper>
              <LikeImgBlock>
                <img src={data.img} alt="" />
              </LikeImgBlock>
            </LikeImgWrapper>
            <LikeItemDescription>
              <h1>
                <span>{data.name}</span>
                <span>{data.title}</span>
              </h1>
              <span className="production-item-price">
                <span>{data.p}%</span>
                <span>{data.price}원</span>
              </span>
              <p className="production-item-stats">
                <div className="production-item-stats--icon">
                  <AiFillStar />
                </div>
                <strong>{data.s}</strong>
                <span>리뷰{data.r}</span>
              </p>
            </LikeItemDescription>
          </LikeCardWrapper>
        );
      })}
    </FeedLikeWrapper>
  );
}
