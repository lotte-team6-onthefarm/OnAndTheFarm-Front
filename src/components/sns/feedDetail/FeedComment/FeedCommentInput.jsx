import React from 'react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postUploadComment } from '../../../../apis/sns/comment';
import {
  CommentBlock,
  CommentBottom,
  CommentTopP,
  CommentWrapper,
  FeedCommentInputWrapper,
} from './FeedComment.styled';

export default function FeedComment(props) {
  const [comment, setComment] = useState('');
  const queryClient = useQueryClient();
  const commentHadler = e => {
    setComment(e.target.value);
  };

  const { mutate: uploadComment } = useMutation(postUploadComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('Comment');
      setComment('');
    },
    onError: () => {
      console.log('에러');
    },
  });
  return (
    <FeedCommentInputWrapper>
      <section>
        <CommentTopP>
          댓글<span>{props.feedCommentCount}</span>
          {/* 댓글<span>{props.comment.length}</span> */}
        </CommentTopP>
        <CommentBottom>
          <img
            src="https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=36&webp=1"
            alt=""
          />
          <CommentWrapper
            className={
              comment.length === 0
                ? 'comment_input_outline_inactive'
                : 'comment_input_outline_active'
            }
          >
            <CommentBlock>
              <input
                placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
                value={comment}
                onChange={commentHadler}
              ></input>
              <div>
                {comment.length === 0 ? (
                  <button className={'comment_button_inactive'}>입력</button>
                ) : (
                  <button
                    className={'comment_button_active'}
                    onClick={() => {
                      uploadComment({
                        feedId: props.feedId,
                        feedCommentContent: comment,
                      });
                    }}
                  >
                    입력
                  </button>
                )}
              </div>
            </CommentBlock>
          </CommentWrapper>
        </CommentBottom>
      </section>
    </FeedCommentInputWrapper>
  );
}
