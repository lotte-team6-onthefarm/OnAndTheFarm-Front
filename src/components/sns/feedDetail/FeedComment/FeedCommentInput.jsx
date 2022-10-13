import React from 'react';
import { useState } from 'react';
import {
  CommentBlock,
  CommentBottom,
  CommentTopP,
  CommentWrapper,
  FeedCommentInputWrapper,
} from './FeedComment.styled';

export default function FeedComment() {
  const [comment, setComment] = useState('');
  const commentHadler = e => {
    setComment(e.target.value);
  };
  return (
    <FeedCommentInputWrapper>
      <section>
        <CommentTopP>
          댓글<span>0</span>
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
                onChange={commentHadler}
              ></input>
              <div>
                <button
                  className={
                    comment.length === 0
                      ? 'comment_button_inactive'
                      : 'comment_button_active'
                  }
                >
                  입력
                </button>
              </div>
            </CommentBlock>
          </CommentWrapper>
        </CommentBottom>
      </section>
    </FeedCommentInputWrapper>
  );
}
