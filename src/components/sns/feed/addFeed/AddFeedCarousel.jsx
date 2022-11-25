import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import ProductTagButton from '../../../common/ProductTagButton';
import { MainCarouselSlider } from '../../../main/main/MainCarousel.style';
import { AddFeedCarouselImg, AddFeedCarouselImgDiv } from './AddFeed.styled';

export default function AddFeedCarousel(props) {
  const [isMove, setIsMove] = useState(false); 

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

  return (
    <MainCarouselSlider {...settings}>
      {props.images.map((image, idx) => {
        return (
          <AddFeedCarouselImgDiv
            height={props.height}
            key={idx}
            onClick={e => {
              props.productSelect(
                idx,
                props.images.length === 1
                  ? e.nativeEvent.layerX
                  : e.nativeEvent.offsetX + 550 * (idx + 1) > e.nativeEvent.layerX &&
                    e.nativeEvent.layerX > e.nativeEvent.offsetX - 550 * (idx + 1)
                  ? e.nativeEvent.layerX + 550 * (idx + 1)
                  : e.nativeEvent.offsetX,
                e.nativeEvent.offsetY + 5 > e.nativeEvent.layerY &&
                  e.nativeEvent.layerY > e.nativeEvent.offsetY - 5
                  ? e.nativeEvent.offsetY
                  : e.nativeEvent.layerY,
              );
              if(!isMove){
                props.setModal(true);
              }
            }}
          >
            
            <AddFeedCarouselImg src={image} />
            {props.productList.map((plusButton, idxx) => {
              if (plusButton.imageIndex === idx && !(props.deletedList.includes(plusButton.index))) {
                return (
                  <ProductTagButton
                    key={idxx}
                    posX={plusButton.posX}
                    posY={plusButton.posY}
                    setIsMove={setIsMove}
                    productIdx={plusButton.index}
                    productList={props.productList}
                    initProductList={props.initProductList}
                    setProductList={props.setProductList}
                    setTooltip={props.setTooltip}
                    setSelectedProduct={props.setSelectedProduct}
                    selectProductInfo={props.selectProductInfo}
                    idxx={idxx}
                    setSelectedList={props.setSelectedList}
                  ></ProductTagButton>
                );
              } else {
                return <div key={idxx}></div>;
              }
            })}
          </AddFeedCarouselImgDiv>
        );
      })}
    </MainCarouselSlider>
  );
}
