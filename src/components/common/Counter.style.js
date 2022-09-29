import styled from 'styled-components';

const CounterDiv = styled.div`
  width: 100%;
  height: 30px;
`;

const CounterButton = styled.button`
  width: 30px;
  height: 30px;
  color: #8b8b97;
  font-size: 0.8rem;
  opacity: 0.25;
`;

const CounterNumber = styled.input`
  width: 30px;
  height: 26px;
  text-align: center;
`;

export { CounterDiv, CounterButton, CounterNumber };