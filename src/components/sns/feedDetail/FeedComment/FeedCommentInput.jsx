import React from 'react';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { postUploadComment } from '../../../../apis/sns/comment';
import { preLoginUrl } from '../../../../recoil';
import {
  CommentBlock,
  CommentBottom,
  CommentTopP,
  CommentWrapper,
  FeedCommentInputWrapper,
} from './FeedComment.styled';

export default function FeedComment(props) {
  const [preUrl, setPreUrl] = useRecoilState(preLoginUrl);
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const queryClient = useQueryClient();
  const commentHadler = e => {
    setComment(e.target.value);
  };

  const { mutate: uploadComment } = useMutation(postUploadComment, {
    onSuccess: () => {
      props.getCommentRefetch();
      props.getFeedDetailRefetch();
      setComment('');
    },
    onError: () => {
      console.log('에러');
    },
  });
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      uploadComment({
        feedId: props.feedId,
        feedCommentContent: comment,
      });
    }
  };
  const uploadBtn = () => {
    // 로그인 페이지 보내주기
    const userToken = localStorage.getItem('token');
    if (userToken === null) {
      // 로그인 안했을 때
      setPreUrl(window.location.href);
      alert('로그인이 필요한 서비스 입니다.');
      navigate('/login');
      return;
    }
    uploadComment({
      feedId: props.feedId,
      feedCommentContent: comment,
    });
  };
  return (
    <FeedCommentInputWrapper>
      <section>
        <CommentTopP>
          댓글<span>{props.feedCommentCount.toLocaleString()}</span>
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
                onKeyPress={onKeyPress}
                onChange={commentHadler}
              ></input>
              <div>
                {comment.length === 0 ? (
                  <button className={'comment_button_inactive'}>입력</button>
                ) : (
                  <button
                    className={'comment_button_active'}
                    onClick={uploadBtn}
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
