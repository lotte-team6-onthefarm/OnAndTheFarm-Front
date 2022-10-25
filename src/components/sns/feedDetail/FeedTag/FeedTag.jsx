import React from 'react';
import { FeedTagWrapper } from './FeedTag.styled';

export default function FeedTag(props) {
  const clickTag = (e) => {
    console.log(e.target.id)
  }
  return (
    <FeedTagWrapper>
      {props.feedTag.map((tagData, idx) => (
        <button key={idx} id={tagData.feedTagId} onClick={clickTag}>#{tagData.feedTagName}</button>
      ))}
    </FeedTagWrapper>
  );
}
