import React, { useRef, useState } from 'react';
import { ProductImageWrapper } from '../ProductManagement.style';
import { FiUpload } from 'react-icons/fi';
import { IconBox, IconWrapper } from '../../../common/Icon.style';
import ImagesView from './ImagesView';
import UpdateImageView from './UpdateImageView';
import { useEffect } from 'react';

export default function ProductImage(props) {
  const [detailImagesUrl, setDetailImagesUrl] = useState([]);
  const type = props.type;
  const setImages = props.setImages;
  const fileInput = useRef();
  const fileUploadHandler = () => {
    fileInput.current.click();
  };

  useEffect(() => {
    if (props.upNowMainImage !== undefined) {
      setDetailImagesUrl([props.upNowMainImage, ...detailImagesUrl]);
    }
    console.log('들어오오오오', props.upNowMainImage);
  }, []);

  // 상품 미리보기
  const handleChange = e => {
    URL.revokeObjectURL(detailImagesUrl);
    for (let i = 0; i < e.target.files.length; i++) {
      const url = URL.createObjectURL(e.target.files[i]);
      setDetailImagesUrl(detailImagesUrl => [url, ...detailImagesUrl]);
    }
    setImages(e.target.files);
  };
  return (
    <ProductImageWrapper>
      <div className="title">{props.title}</div>
      <div className="image">
        {detailImagesUrl.length === 0 ? (
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
        ) : (
          <>
            {props.upNowMainImage !== undefined ? (
              // <UpdateImageView upNowMainImage={props.upNowMainImage} />
              <ImagesView images={detailImagesUrl} />
            ) : (
              <ImagesView images={detailImagesUrl} />
            )}
          </>
        )}
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
