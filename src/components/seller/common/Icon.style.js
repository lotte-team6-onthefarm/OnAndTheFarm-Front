import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.width};
  margin-right: 5px;
`;

const IconTitleBox = styled.div`
  font-size: ${props => props.width};
`;

export { IconWrapper, IconBox, IconTitleBox };
