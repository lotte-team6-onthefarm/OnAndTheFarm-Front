import styled from 'styled-components';

const UpDownBox = styled.div`
  padding: 5px;
  border-radius: 8px;
  font-weight: 500;
  color: ${props =>
    props.state === '0' ? '#FF6A55' : '#83BF6E'}; // - 일때 0 + 일때 1
  background-color: ${props =>
    props.state === '0' ? '#FFE7E4' : '#EAFAE5'}; // - 일때 0 + 일때 1
`;

export { UpDownBox };
