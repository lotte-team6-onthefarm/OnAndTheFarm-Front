import styled from 'styled-components';

const Background = styled.div`
display: ${props => props.loading? "block" : "none"};
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.1);
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;
export { Background, LoadingText };
