import React from 'react';
import { SearchInputDiv, SearchInput } from './SearchInput.style';
import {
  AiOutlineSearch,
} from 'react-icons/ai';

export default function InputSearch(props) {
  return (
    <SearchInputDiv width={props.width}>
      <SearchInput
        id={props.id}
        value={props.value}
        
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type}
      ></SearchInput>
      <AiOutlineSearch onClick={props.search} />
      
    </SearchInputDiv>
  );
}
