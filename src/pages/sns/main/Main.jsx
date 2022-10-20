import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import FeedWriter from '../../../components/sns/feed/FeedWriter';
import {
  SnsMainWrapper,
  SelectWrapper,
  FeedActionList,
  FeedCardWrapper,
  FeedDetailWrapper,
  FeedItemDescription,
  FeedItemImg,
  FeedItemWrapper,
  FeedWriterWrapper,
} from './Main.styled';

import SNS_1 from '../../../assets/sns/요리1.jpg';
import SNS_2 from '../../../assets/sns/요리2.jpg';
import SNS_3 from '../../../assets/sns/요리3.jpg';
import SNS_4 from '../../../assets/sns/요리4.jpg';
import SNS_5 from '../../../assets/sns/요리5.jpg';
import SNS_6 from '../../../assets/sns/요리6.jpg';
import SNS_7 from '../../../assets/sns/요리7.jpg';
import SNS_8 from '../../../assets/sns/요리8.jpg';

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
        '너무 맛있는 스테이크와 야채볶음~ 오늘 저녁도 맛있게 먹어보아요💛🧡',
    },
    {
      id: 'dmstje22',
      url: SNS_2,
      profileUrl:
        'https://d2v80xjmx68n4w.cloudfront.net/gigs/JaqkS1637331647.jpg',
      content: '다양한 야채와 함께 먹는 푸짐한 밥상~ 남편이 차린 한상💝',
    },
    {
      id: 'dmswl2258',
      url: SNS_3,
      profileUrl:
        'https://blog.kakaocdn.net/dn/QXaEz/btrrktbMISn/3MXSu705iYlDP5clzghLf0/img.jpg',
      content: '신선한 청경채와 함께 먹는 오늘의 메뉴 동파육',
    },
    {
      id: 'homecookMom_',
      url: SNS_4,
      profileUrl:
        'https://lh3.googleusercontent.com/u8CYTrECdN-R8VMjbP2B3wf_bFfxo4sH4dYQDYV9v5FpAcAjPhGWRB5cQU41E_WFxBi8iusqTc3rc40jVjY7ffn1OW3xKBAfdJ1Yg0xXMMO8R8Vct1J1=w670-h980-n',
      content: '일주일치 반찬 완성 울 남편과 아이들이 참 좋아해요~🥙🥗',
    },
    {
      id: 'ItsMe',
      url: SNS_5,
      profileUrl:
        'http://img.khan.co.kr/news/2018/12/27/l_2018122801003102200246132.jpg',
      content:
        '가을날씨에는 피크닉~ 신선한 야채와 함께 샌드위치를 만들어 보았어요ㅎㅎ',
    },
    {
      id: 'mommom',
      url: SNS_6,
      profileUrl: 'https://cdn-icons-png.flaticon.com/512/6192/6192662.png',
      content:
        '이웃님들 잘 지내셨나요~ㅎㅎ 야채와 함께 한 건강한 저녁 밥상 입니다~!🥗',
    },
    {
      id: 'seoulCook',
      url: SNS_7,
      profileUrl:
        'https://post-phinf.pstatic.net/MjAyMTExMDhfOCAg/MDAxNjM2MzY1MTc4NjA2.ePjpEBq7MhadBiJ97LuiqIAxAZ-n5RJQ9BheQdlkj44g.s9KmFSJQWvGd0pUOXjjziIifdIrj9QW8fn35sIcnXtgg.JPEG/%EA%B4%B4%EB%A0%A5%EB%AA%AC.jpg?type=w1200',
      content:
        '상큼한 자몽과 귤과 감이 함꼐한 리코타 부리토 치즈 과일 샐러드🌮',
    },
    {
      id: 'fafaCooker_',
      url: SNS_8,
      profileUrl:
        'https://mblogthumb-phinf.pstatic.net/MjAyMDExMjRfOSAg/MDAxNjA2MjA1MDI5MzE1.FqSl8OtJxZxJm1IYKtRXrhFNum6Qfu5wMq7MAiZwhFgg.9RMA4C4GmAp8XFc04eqM6zuRfxrCcU1y7Z8fA2_NA38g.JPEG.sosohan_n/IMG_5374.JPG?type=w800',
      content: '부모님이 차려주신 따뜻한 밥상🖤',
    },
    {
      id: 'wweoood_o_o',
      url: SNS_2,
      profileUrl: 'https://newsimg.sedaily.com/2019/05/22/1VJ8PU7XCR_5.jpg',
      content: '가지가지 맛있는 가지 신선한 야채 건강한 밥상🥦🥒🥬🍓',
    },
  ];
  return (
    <SnsMainWrapper>
      <SelectWrapper>
        <button>최신순</button>
        <button>좋아요순</button>
        <button>조회수순</button>
        <button>팔로우</button>
      </SelectWrapper>
      <FeedDetailWrapper>
        {SNS.map((sns, idx) => (
          <FeedCardWrapper key={idx}>
            {/* 작성자 */}
            <FeedWriterWrapper>
              <Link to>
                <img src={sns.profileUrl} alt="" />
                <span>{sns.id}</span>
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
                  <span>2</span>
                </Link>
                <Link to>
                  <BiBookmark />
                  <span>23</span>
                </Link>
                <Link to>
                  <BiMessageAlt />
                  <span>8</span>
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
    </SnsMainWrapper>
  );
}
