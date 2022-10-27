import React from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { putDeleteComment } from '../../../../apis/sns/comment';
import { getGoneTime } from '../../../../utils/commonFunction';
import { FeedCommentListWrapper, FeedListBlock } from './FeedComment.styled';

export default function FeedCommentList(props) {
  const { mutate: deleteCommnet, isLoading: isDeleteCommnetLoading } =
    useMutation(putDeleteComment, {
      onSuccess: res => {
        alert('댓글이 삭제되었습니다');
      },
      onError: () => {
        console.log('에러');
      },
    });
  return (
    <FeedCommentListWrapper>
      {props.commentList !== null &&
        props.commentList.map((comment, idx) => {
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
                <div>
                  <p>{comment.feedCommentContent}</p>
                </div>
                {comment.isModifiable && (
                  <div
                    onClick={() =>
                      deleteCommnet({
                        feedCommentId: comment.feedCommentId,
                      })
                    }
                  >
                    삭제
                  </div>
                )}
              </FeedListBlock>
            </li>
          );
        })}
    </FeedCommentListWrapper>
  );
}
