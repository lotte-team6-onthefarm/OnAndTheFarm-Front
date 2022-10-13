import React from 'react';
import { Link } from 'react-router-dom';
import { FeedWriterWrapper } from '../../../pages/sns/feed/Feed.styled';

export default function FeedWriter() {
  return (
    <FeedWriterWrapper>
      <Link to>
        <img
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/166227517469087324.jpeg?gif=1&w=36&h=36&c=c&webp=1"
          alt=""
        />
        <span>icanfly14</span>
      </Link>
      <span className="FeedWriterWrapperSpan" />
      <button>팔로우</button>
    </FeedWriterWrapper>
  );
}
