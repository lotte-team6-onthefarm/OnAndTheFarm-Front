import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { MdBookmark } from 'react-icons/md';
import { HiOutlineShare } from 'react-icons/hi';

import { SideButtonWrapper } from '../../../pages/sns/feedDetail/FeedDetail.styled';
import { useMutation } from 'react-query';
import { putUpFeedShareCount } from '../../../apis/sns/content';

export default function SideButton(props) {
  const icons = {
    heart: <AiOutlineHeart />,
    fillHeart: <AiFillHeart />,
    scrap: <BiBookmark />,
    fillScrap: <MdBookmark />,
    comment: <BiMessageAlt />,
    share: <HiOutlineShare />,
  };
  const { mutate: feedShare } = useMutation(putUpFeedShareCount, {
    onSuccess: res => {
      alert('피드 공유하기');
      props.getFeedDetailRefetch();
    },
    onError: () => {
      console.log('에러');
    },
  });
  const clip = () => {
    // 주소 복사하기
    let url = '';
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const handle = () => {
    clip()
    // if (navigator.share) {
    //     navigator.share({
    //         title: '기록하며 성장하기',
    //         text: 'Hello World',
    //         url: 'https://shinsangeun.github.io',
    //     });
    // }else{
    //     alert("공유하기가 지원되지 않는 환경 입니다.")
    // }
    feedShare({
      "feedId":props.id
  })
  }

  const buttonClick = () => {
    if (props.status !== undefined && props.status === false) {
      props.buttonClick({ feedId: props.feedId });
    } else if (props.status !== undefined && props.status === true) {
      props.buttonUnClick({ feedId: props.feedId });
    }
    if (props.icon === 'comment') {
      props.buttonClick();
    } else if (props.icon === 'share') {
      handle()
    }
  };
  return (
    <SideButtonWrapper status={props.status} onClick={buttonClick}>
      <span>
        <span>
          {props.icon === 'heart' && props.status === true ? (
            <span className="fillIcons">{icons['fillHeart']}</span>
          ) : props.icon === 'scrap' && props.status === true ? (
            <span className="fillIcons">{icons['fillScrap']}</span>
          ) : (
            icons[props.icon]
          )}
        </span>
      </span>
      <span>{props.count}</span>
    </SideButtonWrapper>
  );
}
