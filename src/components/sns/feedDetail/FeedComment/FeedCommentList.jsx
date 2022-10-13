import React from 'react';
import { Link } from 'react-router-dom';
import { FeedCommentListWrapper, FeedListBlock } from './FeedComment.styled';

export default function FeedCommentList() {
  const lists = [
    {
      id: '벽장꾸미기',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/1600520063_eqM.jpeg?gif=1&w=36',
      content: '벽장 너무 이뻐요',
    },
    {
      id: '침대에 붙은 강아쥐',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/161095046516109734.jpeg?gif=1&w=36&webp=1',
      content: '깔끔하고 멋져요!✨✨',
    },
    {
      id: '웰컴',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/164282128352628231.jpeg?gif=1&w=36&webp=1',
      content: '모던모던하니 포근한 디자인이네요',
    },
    {
      id: '오점무',
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/163153993192811635.jpeg?gif=1&w=36&webp=1',
      content:
        '와.. 색감 좋네요 정말 금손이십니다. 좋은 사진으로 불꽃축제 다녀온 심정으로 감상하고 갑니다~',
    },
  ];
  return (
    <FeedCommentListWrapper>
      {lists.map((list, idx) => {
        return (
          <li key={idx}>
            <FeedListBlock>
              <Link to>
                <img src={list.src} alt=""></img>
                <span>{list.id}</span>
              </Link>
              <div>52분전</div>
            </FeedListBlock>
            <FeedListBlock>
              <p>{list.content}</p>
            </FeedListBlock>
          </li>
        );
      })}
    </FeedCommentListWrapper>
  );
}
