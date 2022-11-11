import React, { useState } from 'react';
import { useDrag } from 'react-use-gesture';

export default function ProductTagButton(props) {
  const [logoPos, setlogoPos] = useState({ x: props.posX, y: props.posY });

  const bindLogoPos = useDrag((params, temp) => {
    console.log(props.productList[props.productIdx]);
    props.setProductList(
      props.productList.map((item, idx) => {
        if (idx === props.productIdx) {
          return {
            index: item.index,
            imageIndex: item.imageIndex,
            productId: item.productId,
            posX: props.initProductList[props.productIdx].posX+params.offset[0],
            posY: props.initProductList[props.productIdx].posY+params.offset[1],
          };
        } else {
          return {
            index: item.index,
            imageIndex: item.imageIndex,
            productId: item.productId,
            posX: item.posX,
            posY: item.posY,
          };
        }
      }),
    );




    
    // let temlogoPosX = logoPos[params.args[0]].x;
    // let templogoPosY = logoPos[params.args[0]].y;
    // let tempX = initPlus[params.args[0]].x;
    // let tempY = initPlus[params.args[0]].y;
    // setlogoPos(
    //   logoPos.map(item =>
    //     item.id === params.args[0]
    //       ? {
    //           ...item,
    //           x: params.movement[0],
    //           y: params.movement[1],
    //         }
    //       : item,
    //   ),
    // );
    // params.offset = [0, 0];
    // params.movement = [0, 0];
    // setInitPlus(initPlus.map(
    //   item => item.id === params.args[0]
    //   ? {...item, x: (logoPos[params.args[0]].x), y: (logoPos[params.args[0]].y)}
    //   : item
    // ))
    // console.log(params.offset[0])
    // console.log(params.offset[1])
    // setlogoPos({
    //   x: params.offset[0] + 100,
    //   y: params.offset[1],
    // });
    // params.offset=[0,0]
  });

  const isMove = flag => {
    props.setIsMove(flag);
  };

  return (
    <div
      {...bindLogoPos()}
      style={{
        top: `${props.posY}px`,
        left: `${props.posX}px`,
      }}
      onMouseEnter={() => isMove(true)}
      onMouseLeave={() => isMove(false)}
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
}
