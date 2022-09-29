
import React from 'react';
import { CheckboxDiv, CheckboxInput } from './Checkbox.style';

export default function Checkbox(props) {
    return (
      <CheckboxDiv>
        <CheckboxInput id={props.id} type="checkbox" onChange={props.onChange}></CheckboxInput>
      </CheckboxDiv>
    );
  }