import React from 'react';
import { CounterButton, CounterDiv, CounterNumber } from './Counter.style';

export default function Counter(props) {
  return (
    <CounterDiv>
      <CounterButton>-</CounterButton>
      <CounterNumber value={props.value} />
      <CounterButton>+</CounterButton>
    </CounterDiv>
  );
}
