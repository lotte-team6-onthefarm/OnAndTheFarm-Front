import React, { useRef } from 'react';
import { ProductImageWrapper } from '../ProductManagement.style';
import { FiUpload } from 'react-icons/fi';
import { IconBox, IconWrapper } from '../../../common/Icon.style';

export default function ProductImage(props) {
  const type = props.type;
  const setImages = props.setImages;
  const fileInput = useRef();
  const fileUploadHandler = () => {
    fileInput.current.click();
  };

  const handleChange = e => {
    setImages(e.target.files);
  };
  return (
    <ProductImageWrapper>
      <div className="title">{props.title}</div>
      <div className="image">
        <button
          onClick={() => {
            fileUploadHandler();
          }}
        >
          <IconWrapper>
            <IconBox>
              <FiUpload />
            </IconBox>
            이미지 업로드
          </IconWrapper>
        </button>
      </div>
      {type === 'main' ? (
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInput}
          onChange={handleChange}
        />
      ) : (
        <input
          type="file"
          style={{ display: 'none' }}
          ref={fileInput}
          multiple="multiple"
          onChange={handleChange}
        />
      )}
    </ProductImageWrapper>
  );
}
