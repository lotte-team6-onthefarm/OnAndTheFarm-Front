import React from 'react';
import { CounterButton, CounterDiv, CounterNumber } from './Counter.style';

export default function Counter(props) {
  return (
    <CounterDiv>
      <CounterButton>-</CounterButton>
      <CounterNumber value="4" />
      <CounterButton>+</CounterButton>
    </CounterDiv>
  );
}