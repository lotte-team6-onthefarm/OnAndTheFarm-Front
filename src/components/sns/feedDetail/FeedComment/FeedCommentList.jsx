import React from 'react';
import { Link } from 'react-router-dom';
import { getGoneTime } from '../../../../utils/commonFunction';
import { FeedCommentListWrapper, FeedListBlock } from './FeedComment.styled';

export default function FeedCommentList(props) {
  const dummy = [
    {
      memberProfileImg:
        'https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg',
      memberName: 'qwdkw21',
      feedCommentCreateAt: '2022.10.21 22:08:05',
      feedCommentContent:
        '우와 정말 맛있어 보여요 ㅎㅎ 저도 양파랑 파프리카 사서 해먹어봐야겠어요 ㅎㅎ',
    },
    {
      memberProfileImg:
        'https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg',
      memberName: 'momsuper_M_M',
      feedCommentCreateAt: '2022.10.20 22:08:05',
      feedCommentContent:
        '얼마만에 보는 피드인가요~ 정말 신나보이고 좋네요! 맛저하세요💛🧡',
    },
    {
      memberProfileImg:
        'https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg',
      memberName: 'o_oEater',
      feedCommentCreateAt: '2022.10.18 22:08:05',
      feedCommentContent:
        '이것이 신혼의 저녁식사인가요~~ 너무 맛있어 보이네요~~~~~ 파프리카 지금바로 구매하러 갑니다💕',
    },
  ];
  return (
    <FeedCommentListWrapper>
      {props.commentList.map((comment, idx) => {
        return (
          <li key={idx}>
            <FeedListBlock>
              <Link to>
                <img src={comment.memberProfileImg} alt="" />
                <span>{comment.memberName}</span>
              </Link>
              <div>{getGoneTime(comment.feedCommentCreateAt)}</div>
            </FeedListBlock>
            <FeedListBlock>
              <p>{comment.feedCommentContent}</p>
            </FeedListBlock>
          </li>
        );
      })}
    </FeedCommentListWrapper>
  );
}
