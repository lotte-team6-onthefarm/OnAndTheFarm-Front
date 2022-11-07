import React from 'react';
import { useState } from 'react';
import { BlackButton } from '../../common/Button.style';
import { PageCol } from '../../seller/common/Box.style';
import { AddMainDisplayWrapper } from './AddMainDisplay.styled';
import AddDisplayBlock from './block/AddDisplayBlock';
import AddDisplayDataTool from './dataTool/AddDisplayDataTool';
import AddDisplayCategory from './category/AddDisplayCategory';
import AddDisplayAccountList from './accountList/AddDisplayAccountList';
import AddDisplayDatasList from './datasList/AddDisplayDatasList';
import AddDisplayDataList from './dataList/AddDisplayDataList';
import AddDisplayOrganize from './organize/AddDisplayOrganize';
import banner from '../../../assets/모듈/배너.JPG';
import product from '../../../assets/모듈/상품.JPG';
import miniB from '../../../assets/모듈/미니배너.JPG';
import categoryImg from '../../../assets/모듈/카테고리.JPG';
import sns from '../../../assets/모듈/SNS.JPG';

export default function AddMainDisplay() {
  const [category, setCategory] = useState('배너');
  // 블록 리스트
  const blocks = [
    { moduleImgSrc: banner, moduleName: '배너 블록' },
    { moduleImgSrc: miniB, moduleName: '미니배너 블록' },
    { moduleImgSrc: product, moduleName: '상품 블록' },
    { moduleImgSrc: categoryImg, moduleName: '카테고리 블록' },
    { moduleImgSrc: sns, moduleName: 'SNS 블록' },
  ];
  // 구좌들
  const options = [
    { name: '이름1', value: 1 },
    { name: '이름2', value: 2 },
    { name: '이름3', value: 3 },
    { name: '이름4', value: 4 },
    { name: '이름5', value: 5 },
    { name: '이름3', value: 6 },
    { name: '이름4', value: 7 },
    { name: '이름5', value: 8 },
  ];
  // 소재들
  const datas = [1, 2, 3, 4, 5];
  // 소재 리스트들
  const lists = [1, 2, 3, 4, 5, 6, 7, 8];
  // 데이터 툴
  const dataTools = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <AddMainDisplayWrapper>
        <PageCol width="70%">
          <AddDisplayBlock blocks={blocks} />
        </PageCol>
        <PageCol width="28%">
          <AddDisplayDataTool dataTools={dataTools} />
        </PageCol>
      </AddMainDisplayWrapper>
      <AddMainDisplayWrapper>
        <PageCol width="100%">
          <AddDisplayCategory category={category} setCategory={setCategory} />
          <AddDisplayAccountList options={options}></AddDisplayAccountList>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <AddDisplayDatasList lists={lists} />
            <AddDisplayDataList datas={datas} />
          </div>
          <AddDisplayOrganize />
          <div className="addMainDisplayButton">
            <BlackButton style={{ marginTop: '30px' }}>등록하기</BlackButton>
          </div>
        </PageCol>
      </AddMainDisplayWrapper>
    </>
  );
}
