import React, { useRef, useState } from 'react';
import { ProductImageWrapper } from '../ProductManagement.style';
import { FiUpload } from 'react-icons/fi';
import { IconBox, IconWrapper } from '../../../common/Icon.style';
import ImagesView from './ImagesView';
import { useEffect } from 'react';
import UpdateImagesView from './UpdateImagesView';
import { useQueryClient } from 'react-query';

export default function UpdateProductImage(props) {
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
    } else if (
      props.productImages !== undefined &&
      props.productImages.length > 0
    ) {
      setDetailImagesUrl(props.productImages);
    }
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

  // dddd
  const deleteImg = idx => {
    // let temp = [...detailImagesUrl];
    // props.setProductImages(
    //   props.productImages.filter(product => product.productImgId !== idx),
    // );
    console.log(idx, 'aateastae');
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
              <UpdateImagesView
                images={[
                  { productImgId: 0, productImgSrc: detailImagesUrl[0] },
                ]}
                deleteImg={deleteImg}
              />
            ) : (
              <UpdateImagesView
                images={detailImagesUrl}
                deleteImg={deleteImg}
              />
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
