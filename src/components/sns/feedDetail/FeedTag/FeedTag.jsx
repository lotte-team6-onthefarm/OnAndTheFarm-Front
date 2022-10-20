import React from 'react';
import { FeedTagWrapper } from './FeedTag.styled';

export default function FeedTag(props) {
  return (
    <FeedTagWrapper>
      {props.feedTag.map((tagData, idx) => (
        <button key={idx}>#{tagData.feedTagName}</button>
      ))}
    </FeedTagWrapper>
  );
}
