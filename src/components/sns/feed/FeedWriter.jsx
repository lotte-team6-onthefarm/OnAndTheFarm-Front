import React from 'react';
import { Link } from 'react-router-dom';
import { FeedWriterWrapper } from '../../../pages/sns/feed/Feed.styled';

export default function FeedWriter(props) {
  return (
    <FeedWriterWrapper>
      <Link to>
        <img
          src={props.memberProfileImg}
          alt="프로필이미지"
        />
        <span>{props.memberName}</span>
      </Link>
      <span className="FeedWriterWrapperSpan" />
      <button>팔로우</button>
    </FeedWriterWrapper>
  );
}
