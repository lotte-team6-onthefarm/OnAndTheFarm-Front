import React, { useRef, useState } from 'react';
import { ProductImageWrapper } from '../ProductManagement.style';
import { FiUpload } from 'react-icons/fi';
import { IconBox, IconWrapper } from '../../../common/Icon.style';
import ImagesView from './ImagesView';
import { useEffect } from 'react';
import { MainCarouselSlider } from '../../../../main/main/MainCarousel.style';
import {
  AddFeedCarouselImg,
  AddFeedCarouselImgDiv,
} from '../../../../sns/feed/addFeed/AddFeed.styled';

export default function ProductImage(props) {
  const [detailImagesUrl, setDetailImagesUrl] = useState([]);
  const type = props.type;
  const setImages = props.setImages;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    draggable: false,
    // autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const fileInput = useRef();
  const fileUploadHandler = () => {
    alert('이미지는 이름 순서대로 올라갑니다');
    fileInput.current.click();
  };

  useEffect(() => {
    if (props.upNowMainImage !== undefined) {
      setDetailImagesUrl([props.upNowMainImage, ...detailImagesUrl]);
    }
  }, []);

  // 상품 미리보기
  const handleChange = e => {
    if (e.target.files.length > 10) {
      alert('파일의 최대 개수는 10장입니다');
      return;
    }
    URL.revokeObjectURL(detailImagesUrl);
    for (let i = e.target.files.length - 1; i >= 0; i--) {
      const url = URL.createObjectURL(e.target.files[i]);
      setDetailImagesUrl(detailImagesUrl => [url, ...detailImagesUrl]);
    }
    setImages(e.target.files);
  };
  return (
    <ProductImageWrapper>
      <div className="managementProductTitle">{props.title}</div>
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
              <ImagesView images={detailImagesUrl} />
            ) : detailImagesUrl.length === 1 ? (
              <ImagesView images={detailImagesUrl} />
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
