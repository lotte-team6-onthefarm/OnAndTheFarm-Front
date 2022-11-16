import React from 'react';
import { useQuery } from 'react-query';
import { getDataPickerAll } from '../../../../apis/admin/data';
import { WhiteWrapper } from '../../../seller/common/Box.style';
import { ListTextWrapper } from '../AddMainDisplay.styled';

export default function AddDisplayDataTool(props) {
  const { data: dataTools, isLoading } = useQuery(
    'getDataPickerAll',
    getDataPickerAll,
    {},
  );

  return (
    <WhiteWrapper height="450px">
      <div style={{ fontSize: '18px' }}>데이터 툴</div>
      <div
        style={{
          marginTop: '10px',
          height: '380px',
          overflow: 'auto',
        }}
      >
        {!isLoading &&
          dataTools.map((dataTool, idx) => {
            return (
              <ListTextWrapper
                key={idx}
                style={{
                  marginRight: dataTools.length > 5 ? '10px' : '0px',
                }}
              >
                <div
                  className={
                    props.dataTool === dataTool.dataPickerId
                      ? 'mainTextContentActive'
                      : 'mainTextContent'
                  }
                  onClick={() => {
                    props.setDataTool(dataTool.dataPickerId);
                  }}
                >
                  [{dataTool.dataPickerId}] {dataTool.dataPickerName}
                </div>
              </ListTextWrapper>
            );
          })}
      </div>
    </WhiteWrapper>
  );
}
