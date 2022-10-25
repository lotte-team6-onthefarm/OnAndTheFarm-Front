import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import {
  FeedActionList,
  FeedCardWrapper,
  FeedDetailWrapper,
  FeedItemDescription,
  FeedItemImg,
  FeedItemWrapper,
  FeedWriterWrapper,
} from './Feed.styled';

import SNS_1 from '../../../assets/sns/mysns/myfeed1.png';
import SNS_2 from '../../../assets/sns/mysns/myfeed2.png';
import SNS_3 from '../../../assets/sns/mysns/myfeed3.png';
import SNS_4 from '../../../assets/sns/mysns/myfeed4.png';
import SNS_5 from '../../../assets/sns/mysns/myfeed5.png';

export default function Feed() {
  const navigate = useNavigate();
  const feedDetailNavigator = () => {
    navigate('/sns/detail');
  };

  const SNS = [
    {
      id: 'icanfly14',
      url: SNS_1,
      profileUrl:
        'https://mblogthumb-phinf.pstatic.net/MjAyMDA4MTBfNjAg/MDAxNTk3MDY2ODcxODIx.izwOJKtLZxm-A2UGvmyOAy9bAeXO0GsKghVAQeRMl1Eg.8Vg1CSsX947p0WRZuE1HG2awuxKoPsffCHTNM1DbOYAg.JPEG.7wayjeju/DH-1109.jpg?type=w800',
      content:
        '온앤더팜 기획전 수입 아니에요 ! 국내에서 재배된 과일들입니다 ㅎㅎ 당도 보장이라더니 정말 맛있네요',
      h: 12,
      s: 7,
      c: 5,
    },
    {
      id: 'dmstje22',
      url: SNS_2,
      profileUrl:
        'https://d2v80xjmx68n4w.cloudfront.net/gigs/JaqkS1637331647.jpg',
      content:
        '맛있게 먹은 셀프 김밥과 떡볶이에요 ~~ 모든 채소들은 태그하였습니다 ^^!!',
      h: 2,
      s: 23,
      c: 8,
    },
    {
      id: 'dmswl2258',
      url: SNS_3,
      profileUrl:
        'https://blog.kakaocdn.net/dn/QXaEz/btrrktbMISn/3MXSu705iYlDP5clzghLf0/img.jpg',
      content:
        '무안 햇양파로 오징어 볶음 해먹었어요 ~^^ 아삭아삭 달큰한 맛이 일품이에요',
      h: 10,
      s: 23,
      c: 14,
    },
    {
      id: 'homecookMom_',
      url: SNS_4,
      profileUrl:
        'https://lh3.googleusercontent.com/u8CYTrECdN-R8VMjbP2B3wf_bFfxo4sH4dYQDYV9v5FpAcAjPhGWRB5cQU41E_WFxBi8iusqTc3rc40jVjY7ffn1OW3xKBAfdJ1Yg0xXMMO8R8Vct1J1=w670-h980-n',
      content:
        '날씨가 추워지면 더 찾게되는 보글보글 끓여가며 먹는 감자탕. 온앤더팜에서 구매한 감자가 너무 맛있네요',
      h: 5,
      s: 15,
      c: 8,
    },
    {
      id: 'ItsMe',
      url: SNS_5,
      profileUrl:
        'http://img.khan.co.kr/news/2018/12/27/l_2018122801003102200246132.jpg',
      content: '쉽고 빠르게 ! 고트 치즈 트러플 (Goat cheese truffles)',
      h: 5,
      s: 6,
      c: 5,
    },
  ];

  return (
    <FeedDetailWrapper>
      {/* 작성자 */}
      {SNS.map((sns, idx) => (
        <FeedCardWrapper key={idx}>
          {/* 작성자 */}
          <FeedWriterWrapper>
            <Link to>
              <img
                src="https://cdn-icons-png.flaticon.com/512/6192/6192662.png"
                alt=""
              />
              <span>김성환</span>
            </Link>
            <span className="FeedWriterWrapperSpan" />
            <button>팔로우</button>
          </FeedWriterWrapper>
          {/* 컨텐츠 */}
          <FeedItemWrapper onClick={feedDetailNavigator}>
            <FeedItemImg>
              <img src={sns.url} alt=""></img>
            </FeedItemImg>
            <FeedActionList>
              <Link to>
                <AiOutlineHeart />
                <span>{sns.h}</span>
              </Link>
              <Link to>
                <BiBookmark />
                <span>{sns.s}</span>
              </Link>
              <Link to>
                <BiMessageAlt />
                <span>{sns.c}</span>
              </Link>
            </FeedActionList>
            <FeedItemDescription>
              <div className="card-item-description__content">
                {sns.content}
              </div>
            </FeedItemDescription>
          </FeedItemWrapper>
        </FeedCardWrapper>
      ))}
    </FeedDetailWrapper>
  );
}
