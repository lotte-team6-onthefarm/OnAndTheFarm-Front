import React, { useRef } from 'react';
import { ImageUploadWrapper } from './AddFeed.styled';
import { HiCamera } from 'react-icons/hi';
import { IconBox, IconWrapper } from '../../../seller/common/Icon.style';

export default function AddImageUpload() {
  const fileInput = useRef();
  const fileUploadHandler = () => {
    fileInput.current.click();
  };
  return (
    <ImageUploadWrapper>
      <button
        onClick={() => {
          fileUploadHandler();
        }}
      >
        <IconBox className="feeduploadIcon">
          <HiCamera />
        </IconBox>
        <div className="feeduploadTitle">사진 올리기</div>
        <div className="feeduploaddetail">(*최대 10장까지)</div>
      </button>
    </ImageUploadWrapper>
  );
}
