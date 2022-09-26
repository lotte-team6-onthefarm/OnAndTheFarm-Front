import styled from 'styled-components';

const StyledBoxDiv = styled.div`
  width: 400px;
  margin: 10px auto;
  justify-content: center;
  text-align: center;
`;

const StyledRowDiv = styled.div`
  width: 100%;
  margin: 20px auto;
  text-align: ${props => props.position};
`;

const StyledFind = styled.a`
  margin-right: 15px;
`;

export { StyledBoxDiv, StyledRowDiv, StyledFind };
