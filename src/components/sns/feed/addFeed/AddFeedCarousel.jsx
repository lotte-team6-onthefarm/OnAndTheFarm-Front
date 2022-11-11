import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import ProductTagButton from '../../../common/ProductTagButton';
import { MainCarouselSlider } from '../../../main/main/MainCarousel.style';
import { AddFeedCarouselImg, AddFeedCarouselImgDiv } from './AddFeed.styled';

export default function AddFeedCarousel(props) {
  const [logoPos, setlogoPos] = useState([
    { id: 0, x: 100, y: 0 },
    { id: 1, x: 200, y: 100 },
  ]);
  const [initPlus, setInitPlus] = useState([
    { id: 0, x: 100, y: 0 },
    { id: 1, x: 200, y: 100 },
  ]);

  const bindLogoPos = useDrag((params, temp) => {
    console.log(params);
    // console.log(temp)
    // console.log(logoPos);
    // setlogoPos(
    //   logoPos.map((item, idx) => {
    //     if(idx === params.args[0]){
    //       return {
    //         x: params.offset[0],
    //         y: params.offset[1],
    //       }
    //     }
    //   })
    // )
    let temlogoPosX = logoPos[params.args[0]].x;
    let templogoPosY = logoPos[params.args[0]].y;
    let tempX = initPlus[params.args[0]].x;
    let tempY = initPlus[params.args[0]].y;
    setlogoPos(
      logoPos.map(item =>
        item.id === params.args[0]
          ? {
              ...item,
              x: params.movement[0] + tempX,
              y: params.movement[1] + tempY,
            }
          : item,
      ),
    );
    params.offset = [0, 0];
    params.movement = [0, 0];
    // setInitPlus(initPlus.map(
    //   item => item.id === params.args[0]
    //   ? {...item, x: (logoPos[params.args[0]].x), y: (logoPos[params.args[0]].y)}
    //   : item
    // ))
    // setlogoPos({
    //   x: params.offset[0] + 100,
    //   y: params.offset[1],
    // });
    // params.offset=[0,0]
  });

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
              // if (props.images.length === 1) {
              //   console.log(e.nativeEvent.layerX, 'xxxxx');
              // } else if (
              //   e.nativeEvent.offsetX + 550 * (idx + 1) >
              //     e.nativeEvent.layerX &&
              //   e.nativeEvent.layerX > e.nativeEvent.offsetX - 550 * (idx + 1)
              // ) {
              //   console.log(e.nativeEvent.layerX + 550 * (idx + 1), 'ifxxxxx');
              // } else {
              //   console.log(e.nativeEvent.offsetX, 'elsexxxxx');
              // }
              // if (
              //   e.nativeEvent.offsetY + 5 > e.nativeEvent.layerY &&
              //   e.nativeEvent.layerY > e.nativeEvent.offsetY - 5
              // ) {
              //   console.log(e.nativeEvent.offsetY, 'iftttttt');
              // } else {
              //   console.log(e.nativeEvent.layerY, 'elsettttt');
              // }
              // console.log(
              //   e,
              //   idx,
              //   e.nativeEvent.offsetX,
              //   e.nativeEvent.layerX,
              //   e.nativeEvent.offsetY,
              //   e.nativeEvent.layerY,
              // );
              props.setModal(true);
            }}
          >
            <AddFeedCarouselImg src={image} />
            {props.productList.map((plusButton, idxx) => {
              if (plusButton.imageIndex === idx) {
                return (
                  <ProductTagButton
                    key={idxx}
                    posX={plusButton.posX}
                    posY={plusButton.posY}
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
