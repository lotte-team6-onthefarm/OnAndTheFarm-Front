import React, { useRef, useState } from 'react';
import { ProductImageWrapper } from '../ProductManagement.style';
import { FiUpload } from 'react-icons/fi';
import { IconBox, IconWrapper } from '../../../common/Icon.style';
import { useEffect } from 'react';
import UpdateImagesView from './UpdateImagesView';
import { MainCarouselSlider } from '../../../../main/main/MainCarousel.style';
import {
  AddFeedCarouselImg,
  AddFeedCarouselImgDiv,
} from '../../../../sns/feed/addFeed/AddFeed.styled';

export default function UpdateProductImage(props) {
  const [detailImagesUrl, setDetailImagesUrl] = useState([]);
  const type = props.type;
  const setImages = props.setImages;
  const fileInput = useRef();
  const fileUploadHandler = () => {
    fileInput.current.click();
  };
  useEffect(() => {
    if (props.productMainImages !== undefined) {
      setDetailImagesUrl([props.productMainImages]);
    } else if (
      props.productImages !== undefined &&
      props.productImages.length > 0
    ) {
      setDetailImagesUrl(
        props.productImages.map(productImage => {
          return productImage.productImgSrc;
        }),
      );
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
  // delete Image
  const deleteImg = () => {
    props.setImages('');
    setDetailImagesUrl([]);
  };
  // Carousel setting
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    draggable: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ProductImageWrapper>
      <div>
        <div className="managementProductTitle">{props.title}</div>
        <div className="deleteImage" onClick={deleteImg}>
          모든 이미지 삭제하기
        </div>
      </div>
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
            {props.productMainImages !== undefined ? (
              <UpdateImagesView
                images={[
                  { productImgId: 0, productImgSrc: detailImagesUrl[0] },
                ]}
                deleteImg={deleteImg}
              />
            ) : detailImagesUrl.length === 1 ? (
              <UpdateImagesView
                images={[{ productImgSrc: detailImagesUrl[0] }]}
                deleteImg={deleteImg}
              />
            ) : (
              <MainCarouselSlider {...settings} style={{ width: '300px' }}>
                {detailImagesUrl.map((image, idx) => {
                  return (
                    <AddFeedCarouselImgDiv height="260px" key={idx}>
                      <AddFeedCarouselImg src={image} alt="" />
                    </AddFeedCarouselImgDiv>
                  );
                })}
              </MainCarouselSlider>
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
