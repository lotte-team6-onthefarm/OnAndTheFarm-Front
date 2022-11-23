import React, { useEffect, useState } from 'react';
import { WhiteWrapper } from '../../seller/common/Box.style';
import Block from './Block';
import { AddDisplayBlockWrapper } from './DisplayBlock.styled';

export default function DisplayBlock(props) {
  const [temp, setTemp] = useState([]);
  const [dragItem, setDragItem] = useState(0);
  const [dropItem, setDropItem] = useState(0);
  const [flag, setFlag] = useState(false);
  let allModuleList = {};
  let tempModule = { moduleImgSrc: '', moduleName: '' };

  for (let index = 0; index < props.allModules.length; index++) {
    tempModule.moduleImgSrc = props.allModules[index].moduleImgSrc;
    tempModule.moduleName = props.allModules[index].moduleContent;
    allModuleList[props.allModules[index].moduleName] = tempModule;
    tempModule = { moduleImgSrc: '', moduleName: '' };
  }

  useEffect(() => {
    setTemp(props.temporaryModuleList);
  }, [props.flag, props.temporaryModuleList]);

  const findTemp = id => {
    const card = 1;
    return {
      card,
      index: temp.indexOf(card),
    };
  };

  const moveTemp = drop => {
    console.log(dragItem, '드래그한아이템');
    console.log(drop, '바꿔야하는 아이템');

    // console.log('adkfjasiodfjaio');
    // const { card, index } = findTemp(id);
    let newTemps = temp;
    const tempItem = newTemps[dragItem];
    newTemps.splice(dragItem, 1);
    newTemps.splice(drop, 0, tempItem);
    let tempList = newTemps.map((item, i) => {
      return {
        ...item,
        ['exhibitionTemporaryPriority']: i + 1,
      };
    });

    props.setTemporaryModuleList(tempList);
    props.setMoveFlag(!props.moveFlag);
    // newTemps = newTemps.splice(index, 1).splice(toIndex, 0, card);
    // setTemp(newTemps);
  };

  return (
    <WhiteWrapper height="800px">
      <div style={{ fontSize: '18px' }}>메인 페이지 미리보기</div>
      <AddDisplayBlockWrapper>
        {temp.map((block, idx) => {
          return (
            <Block
              key={idx}
              id={idx}
              moveTemp={moveTemp}
              findTemp={findTemp}
              setDragItem={setDragItem}
              setDropItem={setDropItem}
              block={block}
              flag={flag}
              setFlag={setFlag}
              allModuleList={allModuleList}
            ></Block>
          );
        })}
      </AddDisplayBlockWrapper>
    </WhiteWrapper>
  );
}
