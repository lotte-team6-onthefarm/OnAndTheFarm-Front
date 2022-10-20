import React, { useEffect, useState } from 'react';
import { CounterButton, CounterDiv, CounterNumber } from './Pagination.style';

export default function Pagination(props) {
  const [number, setNumber] = useState(props.value);

  // function
  const minus = e => {
    if (Number(number) - 1 < 1) {
      alert('숫자는 정수만 입력해주세요');
      setNumber(1);
      return;
    }
    setNumber(Number(number) - 1);
  };
  const plus = e => {
    setNumber(Number(number) + 1);
  };
  const change = e => {
    // 숫자만 입력받기위한 정규식
    let number = Number(e.target.value.replace(/[^0-9]/g, ''));
    // 정수가 아닐경우
    if (e.target.value < 1) {
      alert('숫자는 정수만 입력해주세요');
      setNumber(1);
      return;
    }
    setNumber(number);
  };

  // 숫자 변경시 올려주기
  useEffect(() => {
    props.setPage(number);
  }, [number, props]);
  return (
    <CounterDiv>
      <CounterButton onClick={minus}>
        <span>◀</span>
      </CounterButton>
      <CounterNumber value={1} onChange={change} />
      <CounterNumber value={2} onChange={change} />
      <CounterNumber value={3} onChange={change} />
      <CounterNumber value={4} onChange={change} />
      <CounterNumber value={5} onChange={change} />
      <CounterButton onClick={plus}>
        <span>▶</span>
      </CounterButton>
    </CounterDiv>
  );
}
