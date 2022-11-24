import React, { useState } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { MainCarouselSlider } from '../../main/main/MainCarousel.style';
import { CarouselImg, CarouselImgDiv, ProgressiveImageDiv, SpinnerDiv } from './FeedCarousel.styled';

export default function FeedCarousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [plusButtonDisplay, setPlusButtonDisplay] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: false,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const chageImg = e => {
    props.changeFeedImg(props.images[e].feedImageId);
  };

  const mouseOn = product => {
    props.setProductInfo(product);
    props.setTooltip(true);
  };

  const imageIn = () => {
    setPlusButtonDisplay(true);
  };
  const imageOut = () => {
    if (!props.tooltip) {
      setPlusButtonDisplay(false);
    }
  };

  return (
    <MainCarouselSlider
      {...settings}
      afterChange={chageImg}

      // beforeChange={(currentSlide, nextSlide) => {
      //   setCurrentIndex(nextSlide);
      // }}
    >
      {props.originImages.map((image, idx) => {
        return (
          <CarouselImgDiv
            height={props.height}
            key={idx}
            onMouseEnter={imageIn}
            onMouseLeave={imageOut}
          >
            <ProgressiveImage
              src={image.feedImageSrc}
              placeholder={props.images[idx].feedImageSrc}
            >
              {(src, loading) => (
                <ProgressiveImageDiv>
                  <CarouselImg
                    style={{ filter: loading ? 'blur(3px)' : '' }}
                    src={src}
                    alt="an image"
                  />
                  {loading && <SpinnerDiv></SpinnerDiv>}
                  
                </ProgressiveImageDiv>
              )}
            </ProgressiveImage>

            {plusButtonDisplay &&
              props.feedImageProductList.map((plusButton, idxx) => {
                if (plusButton.feedImageId === image.feedImageId) {
                  return (
                    <div
                      className="tooltip"
                      key={idxx}
                      // {...bindLogoPos(idx)}
                      style={{
                        top: `${plusButton.posY}px`,
                        left: `${plusButton.posX}px`,
                      }}
                      onMouseEnter={() => mouseOn(plusButton)}
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="Vfsdi jCTZa css-18se8ix"
                      >
                        <circle cx="12" cy="12" r="12" fill="#16B51E"></circle>
                        <path
                          stroke="#FFF"
                          strokeLinecap="square"
                          strokeWidth="2"
                          d="M12 16V8m-4 4h8"
                        ></path>
                      </svg>
                    </div>
                  );
                } else {
                  return <div key={idxx}></div>;
                }
              })}
          </CarouselImgDiv>
        );
      })}
    </MainCarouselSlider>
  );
}
