import styled from 'styled-components';

const Background = styled.div`
  // 전체 배경
`;
const MainWrapper = styled.div`
  min-height: 100vh;
  height: auto;
  background-color: ${props => props.theme.colors.gray};
  display: flex;
`;

const RightWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  padding: 50px 0;
  width: 1200px;
  margin: 0 auto;
`;

const PageRow = styled.div`
  /* border: solid 1px red; */
  max-width: 1200px;
  display: flex;
`;

const PageCol = styled.div`
  width: ${props => props.width};
  padding-right: ${props => props.paddingRight};
`;

const WhiteWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: white;
  border-radius: 8px;
  margin-bottom: ${props => props.marginBottom};
  padding: 24px;
  box-sizing: border-box;
`;
export {
  Background,
  MainWrapper,
  RightWrapper,
  PageRow,
  PageCol,
  WhiteWrapper,
};
