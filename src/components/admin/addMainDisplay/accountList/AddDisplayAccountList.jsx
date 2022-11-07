import React from 'react';
import { WhiteWrapper } from '../../../seller/common/Box.style';

export default function AddDisplayAccountList(props) {
  return (
    <WhiteWrapper
      style={{
        fontSize: '18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      구좌 선택
      <select
        className="addMainDisplaySelect"
        // onChange={handleChange}
        // defaultValue={props.defaultValue}
      >
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </WhiteWrapper>
  );
}
