import styled from 'styled-components';

const StyledBoxDiv = styled.div`
  width: 400px;
  margin: 10px auto;
  padding: 50px 0;
  justify-content: center;
  text-align: center;
`;

const StyledRowDiv = styled.div`
  display: flex;
  width: 100%;
  margin: 20px auto;
  justify-content: ${props => props.position};
`;

const StyledFind = styled.a`
  margin-right: 15px;
`;

export { StyledBoxDiv, StyledRowDiv, StyledFind };
