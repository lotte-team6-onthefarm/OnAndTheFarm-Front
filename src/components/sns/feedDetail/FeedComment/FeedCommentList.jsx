import React from 'react';
import { Link } from 'react-router-dom';
import { getGoneTime } from '../../../../utils/commonFunction';
import { FeedCommentListWrapper, FeedListBlock } from './FeedComment.styled';

export default function FeedCommentList(props) {
  return (
    <FeedCommentListWrapper>
      {props.comment.map((comment, idx) => {
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
