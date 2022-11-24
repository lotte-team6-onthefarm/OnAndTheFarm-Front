import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {
  putTemporaryDelete,
  putTemporaryUpdate,
} from '../../../apis/admin/temporary';
import { AccountDetailTextWrapper } from '../../../pages/admin/account/accountDetail/AccountDetail.styled';
import { BlackButton, WhiteButton } from '../../common/Button.style';
import { WhiteWrapper } from '../../seller/common/Box.style';
import { ListTextWrapper } from './SetMainDisplay.styled';

export default function DisplayOrder(props) {
  const [tempBlockList, setTempBlockList] = useState([]);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const preview = () => {
    let temp = props.temporaryModuleList;
    temp = temp.sort(function (a, b) {
      return (
        Number(a.exhibitionTemporaryPriority) -
        Number(b.exhibitionTemporaryPriority)
      );
    });
    props.setTemporaryModuleList(temp);
    let tempList = temp;
    tempList = temp.sort(function (a, b) {
      return (
        Number(a.exhibitionTemporaryPriority) -
        Number(b.exhibitionTemporaryPriority)
      );
    });
    let tempOrder = tempList.map((item, i) => {
      return {
        ...item,
        ['exhibitionTemporaryPriority']: i + 1,
      };
    });
    props.setTemporaryModuleList(tempOrder);
    props.setFlag(!props.flag);
  };

  const testOnChange = (event, idx) => {
    let tempList = tempBlockList.map((item, i) => {
      if (idx === i) {
        return {
          ...item,
          ['exhibitionTemporaryPriority']: Number(event.target.value),
        };
      } else {
        return item;
      }
    });
    setTempBlockList(tempList);
    let newArr = props.temporaryModuleList.map((item, i) => {
      if (idx === i) {
        return {
          ...item,
          ['exhibitionTemporaryPriority']: Number(event.target.value),
        };
      } else {
        return item;
      }
    });
    props.setTemporaryModuleList(newArr);
  };

  const deleteModule = idx => {
    temporaryDelete({
      exhibitionTemporaryId: tempBlockList[idx].exhibitionTemporaryId,
    });
  };

  const saveTemp = () => {
    let tmepOrder = {
      exhibitionTemporaryPriorityUpdateFormRequests: [],
    };
    for (let index = 0; index < tempBlockList.length; index++) {
      tmepOrder.exhibitionTemporaryPriorityUpdateFormRequests.push({
        exhibitionTemporaryId: tempBlockList[index].exhibitionTemporaryId,
        exhibitionTemporaryPriority:
          tempBlockList[index].exhibitionTemporaryPriority,
      });
    }
    temporaryUpdate(tmepOrder);
  };

  useEffect(() => {
    setTempBlockList(props.temporaryModuleList);
  }, [props.flag, props.temporaryModuleList, props.moveFlag]);

  const { mutate: temporaryDelete, isLoading: isPutTemporaryDeleteLoading } =
    useMutation(putTemporaryDelete, {
      onSuccess: res => {
        alert('묘듈이 삭제되었습니다.');
        queryClient.invalidateQueries('getTemporaryAll');
      },
      onError: () => {
        console.log('에러');
      },
    });

  const { mutate: temporaryUpdate, isLoading: isputTemporaryUpdateLoading } =
    useMutation(putTemporaryUpdate, {
      onSuccess: res => {
        alert('묘듈이 임시저장 되었습니다.');
        queryClient.invalidateQueries('getTemporaryAll');
      },
      onError: () => {
        console.log('에러');
      },
    });

  return (
    <WhiteWrapper width="90%" height="720px">
      <ListTextWrapper>
        <div className="mainTextTitle">전시 순서</div>
      </ListTextWrapper>
      <ListTextWrapper>
        <div className="mainTextTitle">방법</div>
        <div className="mainTextContent">모듈의 순서를 정하고 적용 클릭</div>
      </ListTextWrapper>
      <div style={{ height: '500px', overflow: 'auto' }}>
        {tempBlockList.map((module, idx) => {
          return (
            <AccountDetailTextWrapper key={idx}>
              <div className="accountDetailTitle">모듈이름</div>
              <div className="accountItemContent">
                {module.exhibitionTemporaryModuleName}
              </div>
              <div
                className="accountDetailTitle"
                style={{ marginLeft: '20px' }}
              >
                전시순서
              </div>
              <input
                className="accountItemContentInput"
                value={module.exhibitionTemporaryPriority}
                onChange={event => testOnChange(event, idx)}
              />
              <WhiteButton onClick={() => deleteModule(idx)}>X</WhiteButton>
            </AccountDetailTextWrapper>
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <BlackButton style={{ margin: '30px 20px' }} onClick={preview}>
          미리보기
        </BlackButton>
        <BlackButton style={{ margin: '30px 20px' }} onClick={saveTemp}>
          순서저장
        </BlackButton>
        <BlackButton
          style={{ margin: '30px 20px' }}
          onClick={() =>
            navigate('/admin/display/add', { state: props.timeButton })
          }
        >
          전시추가
        </BlackButton>
      </div>
    </WhiteWrapper>
  );
}
