import React from 'react';
import { useState } from 'react';
import { BlueButton } from '../../common/Button.style';
import { PageCol } from '../../seller/common/Box.style';
import { AddMainDisplayWrapper, ButtonDiv } from './SetMainDisplay.styled';
import banner from '../../../assets/모듈/배너.PNG';
import product from '../../../assets/모듈/상품.PNG';
import miniB from '../../../assets/모듈/미니배너.PNG';
import categoryImg from '../../../assets/모듈/카테고리.PNG';
import sns from '../../../assets/모듈/SNS.PNG';
import farmfluencer from '../../../assets/모듈/팜플루언서.PNG';
import DisplayBlock from './DisplayBlock';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  getTemporaryAll,
  putTemporaryApply,
} from '../../../apis/admin/temporary';
import DisplayOrder from './DisplayOrder';
import { getAllModuleList } from '../../../apis/exhibition/module';

export default function SetMainDisplay(props) {
  const queryClient = useQueryClient();
  const [temporaryModuleList, setTemporaryModuleList] = useState([]);
  const [flag, setFlag] = useState(true);
  const [moveFlag, setMoveFlag] = useState(true);

  const fixMainPage = () => {
    let data = {
      exhibitionTemporaryIds: [],
    };
    for (let index = 0; index < temporaryModuleList.length; index++) {
      data.exhibitionTemporaryIds.push(
        temporaryModuleList[index].exhibitionTemporaryId,
      );
    }
    exhibitionSave(data);
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

  const {
    isLoading: getAllModuleListLoading,
    data: allModules,
    refetch: getAllModuleListRefetch,
  } = useQuery(['getAllModuleList'], getAllModuleList, {
    refetchOnWindowFcous: true,
    keepPreviousData: true,
    onSuccess: res => {},
    onError: {},
  });

  const { mutate: exhibitionSave, isLoading: isputTemporaryApplyLoading } =
    useMutation(putTemporaryApply, {
      onSuccess: res => {
        alert('최종적용 되었습니다.');
        queryClient.invalidateQueries('getTemporaryAll');
      },
      onError: () => {
        console.log('에러');
      },
    });

  return (
    <>
      {!isGetTemporaryAll && !getAllModuleListLoading && (
        <AddMainDisplayWrapper>
          <PageCol width="45%">
            <DisplayBlock
              temporaryModuleList={temporaryModuleList}
              setTemporaryModuleList={setTemporaryModuleList}
              allModules={allModules}
              flag={flag}
              moveFlag={moveFlag}
              setMoveFlag={setMoveFlag}
            />
          </PageCol>
          <PageCol width="50%">
            <DisplayOrder
              temporaryModuleList={temporaryModuleList}
              setTemporaryModuleList={setTemporaryModuleList}
              setFlag={setFlag}
              moveFlag={moveFlag}
              setMoveFlag={setMoveFlag}
              flag={flag}
              setAddMain={props.setAddMain}
            />
            <ButtonDiv>
              <BlueButton
                style={{ margin: '30px 0', width: '100%', height: '50px' }}
                onClick={fixMainPage}
              >
                메인페이지에 적용
              </BlueButton>
            </ButtonDiv>
          </PageCol>
        </AddMainDisplayWrapper>
      )}
    </>
  );
}
