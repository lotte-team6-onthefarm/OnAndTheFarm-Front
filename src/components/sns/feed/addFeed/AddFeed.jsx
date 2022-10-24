import React, { useState } from 'react';
import { UserMaxWrapper } from '../../../../styles/theme';
import { AddFeedBlock, AddFeedWrapper, TagWrapper } from './AddFeed.styled';
import AddImageUpload from './AddImageUpload';

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

  return (
    <UserMaxWrapper>
      <AddFeedWrapper>
        <AddFeedBlock>
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
  );
}
