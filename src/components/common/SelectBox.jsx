import React from 'react';
import { SelectWrapper } from './SelectBox.styled';

export default function SelectBox(props) {
  const handleChange = e => {
    props.setSelectData(e.target.value);
  };
  return (
    <SelectWrapper
      onChange={handleChange}
      defaultValue={props.defaultValue}
      width={props.width}
    >
      {props.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectWrapper>
  );
}
