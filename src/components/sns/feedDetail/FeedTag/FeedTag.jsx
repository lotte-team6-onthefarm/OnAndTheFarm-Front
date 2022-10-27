import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedTagWrapper } from './FeedTag.styled';

export default function FeedTag(props) {
  const navigate = useNavigate();
  const clickTag = e => {
    console.log(e.target.id);
    navigate(`/sns/main?search=${e.target.id}`);
  };
  return (
    <FeedTagWrapper>
      {props.feedTag !== null &&
        props.feedTag.map((tagData, idx) => (
          <button key={idx} id={tagData.feedTagName} onClick={clickTag}>
            #{tagData.feedTagName}
          </button>
        ))}
    </FeedTagWrapper>
  );
}
