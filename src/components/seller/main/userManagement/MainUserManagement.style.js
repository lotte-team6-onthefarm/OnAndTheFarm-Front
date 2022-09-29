import styled from 'styled-components';

const MainUserWhiteWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.theme.colors.gray};
  margin-bottom: ${props => props.marginBottom};
  box-sizing: border-box;
  cursor: pointer;
  .active {
    background: #fcfcfc;
    box-shadow: 0px 4px 8px -4px rgb(0 0 0 / 25%),
      inset 0px -1px 1px rgb(0 0 0 / 4%),
      inset 0px 2px 0px rgb(255 255 255 / 25%);
  }
`;

const MainUserWhiteBlock = styled.div`
  border-radius: 8px;
  padding: 24px;
  width: '100%';
  height: '100%';
`;
const GrayWrapper = styled.div`
  padding: 10px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.gray};
  display: flex;
  justify-content: space-between;
`;

const GrayInnerWrapper = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  MainUserWhiteWrapper,
  MainUserWhiteBlock,
  GrayWrapper,
  GrayInnerWrapper,
};
