import styled from 'styled-components';

const GrayWrapper = styled.div`
  padding: 25px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.gray};
  display: flex;
  justify-content: space-between;
`;

const GrayInnerWrapper = styled.div`
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export { GrayWrapper, GrayInnerWrapper };
