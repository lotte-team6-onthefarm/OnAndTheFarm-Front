import React from 'react';
import { useState } from 'react';
import { BlackButton, BlueButton } from '../../common/Button.style';
import { PageCol } from '../../seller/common/Box.style';
import { AddMainDisplayWrapper } from './SetMainDisplay.styled';
import banner from '../../../assets/모듈/배너.JPG';
import product from '../../../assets/모듈/상품.JPG';
import miniB from '../../../assets/모듈/미니배너.JPG';
import categoryImg from '../../../assets/모듈/카테고리.JPG';
import sns from '../../../assets/모듈/SNS.JPG';
import AddDisplayBlock from '../addMainDisplay/block/AddDisplayBlock';
import AddDisplayDataTool from '../addMainDisplay/dataTool/AddDisplayDataTool';
import AddDisplayCategory from '../addMainDisplay/category/AddDisplayCategory';
import AddDisplayAccountList from '../addMainDisplay/accountList/AddDisplayAccountList';
import AddDisplayDatasList from '../addMainDisplay/datasList/AddDisplayDatasList';
import AddDisplayDataList from '../addMainDisplay/dataList/AddDisplayDataList';
import AddDisplayOrganize from '../addMainDisplay/organize/AddDisplayOrganize';
import DisplayBlock from './DisplayBlock';
import { useQuery } from 'react-query';
import { getTemporaryAll } from '../../../apis/admin/temporary';
import DisplayOrder from './DisplayOrder';

export default function SetMainDisplay() {
  const [temporaryModuleList, setTemporaryModuleList] = useState([]);
  const [flag, setFlag] = useState(true);
  const blocks = {
    banner: { moduleImgSrc: banner, moduleName: '배너 블록' },
    miniBanner: { moduleImgSrc: miniB, moduleName: '미니배너 블록' },
    product: { moduleImgSrc: product, moduleName: '상품 블록' },
    category: { moduleImgSrc: categoryImg, moduleName: '카테고리 블록' },
    sns: { moduleImgSrc: sns, moduleName: 'SNS 블록' },
  };

  const fixMainPage = () => {
    console.log(temporaryModuleList);
  };

  const {
    isLoading: isGetTemporaryAll,
    refetch: getTemporaryAllRefetch,
    data: temporaryList,
  } = useQuery('getTemporaryAll', getTemporaryAll, {
    onSuccess: res => {
      setTemporaryModuleList(res);
    },
    onError: () => {
      console.log('에러');
    },
  });
  return (
    <>
      {!isGetTemporaryAll && (
        <AddMainDisplayWrapper>
          <PageCol width="45%">
            <DisplayBlock
              blocks={blocks}
              temporaryModuleList={temporaryModuleList}
              flag={flag}
            />
          </PageCol>
          <PageCol width="50%">
            <DisplayOrder
              temporaryModuleList={temporaryModuleList}
              setTemporaryModuleList={setTemporaryModuleList}
              setFlag={setFlag}
              flag={flag}
            />
            <BlueButton style={{ margin: '30px 20px' }} onClick={fixMainPage}>
              메인페이지에 적용
            </BlueButton>
          </PageCol>
        </AddMainDisplayWrapper>
      )}
    </>
  );
}
