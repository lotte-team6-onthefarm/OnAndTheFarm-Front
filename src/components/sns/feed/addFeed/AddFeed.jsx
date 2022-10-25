import React, { useState } from 'react';
import { UserMaxWrapper } from '../../../../styles/theme';
import {
  AddFeedBlock,
  AddFeedNavbar,
  AddFeedWrapper,
  TagWrapper,
} from './AddFeed.styled';
import AddImageUpload from './AddImageUpload';
import Logo from '../../../../assets/logo_green.png';
import { LogoImg } from '../../../main/MainNavbar.style';
import { Link } from 'react-router-dom';
import { HorizontalLine } from '../../../common/HorizontalLine.style';
import { GreenButton } from '../../../common/Button.style';

export default function AddFeed() {
  const [tags, setTags] = useState([]);
  const [inputTag, setInputTag] = useState('');

  // ================================ hash tag 추가
  const onKeyPress = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      addHashTag();
    }
  };

  const addHashTag = () => {
    setTags(tags => [...tags, inputTag]);
    setInputTag(''); // 추가 후 초기화
  };
  // ================================

  // const mainUrl = () => {
  //   navigate('/');
  // };
  return (
    <>
      <AddFeedNavbar>
        <Link to="/">
          <LogoImg src={Logo} alt="onandthefarmlogo" />
        </Link>
        <GreenButton>올리기</GreenButton>
      </AddFeedNavbar>
      <UserMaxWrapper>
        <AddFeedWrapper>
          <AddFeedBlock>
            <h2>피드 업로드</h2>
            <AddImageUpload></AddImageUpload>
            <textarea placeholder="피드에 대해 설명해주세요"></textarea>
            <TagWrapper>
              {tags.map((tag, idx) => {
                return (
                  <div className="addTagList" key={idx}>
                    # {tag}
                  </div>
                );
              })}
              <div className="tagInput">
                #
                <input
                  type="text"
                  placeholder="키워드"
                  value={inputTag}
                  onChange={e => setInputTag(e.target.value)}
                  onKeyPress={onKeyPress}
                />
              </div>
            </TagWrapper>
          </AddFeedBlock>
        </AddFeedWrapper>
      </UserMaxWrapper>
    </>
  );
}
