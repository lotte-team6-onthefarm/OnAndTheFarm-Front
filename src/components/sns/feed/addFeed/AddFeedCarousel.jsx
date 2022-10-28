import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';
import { MainCarouselSlider } from '../../../main/main/MainCarousel.style';
import { AddFeedCarouselImg, AddFeedCarouselImgDiv } from './AddFeed.styled';

export default function AddFeedCarousel(props) {
  const [logoPos, setlogoPos] = useState([
    { id:0, x: 100, y: 0 },
    { id:1, x: 200, y: 100 },
  ]);
  const [initPlus, setInitPlus] = useState([
    { id:0, x: 100, y: 0 },
    { id:1, x: 200, y: 100 },
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
    let temlogoPosX = logoPos[params.args[0]].x
    let templogoPosY = logoPos[params.args[0]].y
    let tempX = initPlus[params.args[0]].x
    let tempY = initPlus[params.args[0]].y
    setlogoPos(logoPos.map(
      item => item.id === params.args[0]
      ? {...item, x: (params.movement[0]+tempX), y: (params.movement[1]+tempY)}
      : item
    ))
    params.offset=[0,0]
    params.movement=[0,0]
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
          <AddFeedCarouselImgDiv height={props.height} key={idx}>
            <AddFeedCarouselImg
              src={image}
              onClick={e => {
                props.productSelect(idx);
                props.setModal(true);
                console.log(e.nativeEvent.osaffsetX, e.nativeEvent.offsetY);
              }}
            />
            {logoPos.map((plusButton, idx) => {
              return (
                <div
                  key={idx}
                  {...bindLogoPos(idx)}
                  style={{
                    top: `${plusButton.y}px`,
                    left: `${plusButton.x}px`,
                  }}
                >
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="Vfsdi jCTZa css-18se8ix"
                  >
                    <circle cx="12" cy="12" r="12" fill="currentColor"></circle>
                    <path
                      stroke="#FFF"
                      strokeLinecap="square"
                      strokeWidth="2"
                      d="M12 16V8m-4 4h8"
                    ></path>
                  </svg>
                </div>
              );
            })}
          </AddFeedCarouselImgDiv>
        );
      })}
    </MainCarouselSlider>
  );
}
