import React from 'react';
import { Link } from 'react-router-dom';
import { FeedWriterWrapper } from '../../../pages/sns/feed/Feed.styled';

export default function FeedWriter() {
  return (
    <FeedWriterWrapper>
      <Link to>
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAyMDA4MTBfNjAg/MDAxNTk3MDY2ODcxODIx.izwOJKtLZxm-A2UGvmyOAy9bAeXO0GsKghVAQeRMl1Eg.8Vg1CSsX947p0WRZuE1HG2awuxKoPsffCHTNM1DbOYAg.JPEG.7wayjeju/DH-1109.jpg?type=w800"
          alt=""
        />
        <span>icanfly14</span>
      </Link>
      <span className="FeedWriterWrapperSpan" />
      <button>팔로우</button>
    </FeedWriterWrapper>
  );
}
