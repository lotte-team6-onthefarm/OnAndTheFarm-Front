import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiBookmark, BiMessageAlt } from 'react-icons/bi';
import { MdBookmark } from 'react-icons/md';
import { HiOutlineShare } from 'react-icons/hi';

import { SideButtonWrapper } from '../../../pages/sns/feedDetail/FeedDetail.styled';

export default function SideButton(props) {
  const icons = {
    heart: <AiOutlineHeart />,
    fillHeart: <AiFillHeart />,
    scrap: <BiBookmark />,
    fillScrap: <MdBookmark />,
    comment: <BiMessageAlt />,
    share: <HiOutlineShare />,
  };
  const buttonClick = () => {
    if (props.status !== undefined && props.status === false) {
      props.buttonClick({ feedId: props.feedId });
      props.setStatus(!props.status);
    } else if (props.status !== undefined && props.status === true) {
      props.buttonUnClick({ feedId: props.feedId });
      props.setStatus(!props.status);
    }
    if(props.icon==="comment"){
      props.buttonClick()
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
