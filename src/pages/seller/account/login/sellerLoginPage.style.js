import styled from 'styled-components';

const StyledBoxWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${props => props.theme.colors.gray};
`;
const StyledBoxDiv = styled.div`
  padding: 100px 50px;
  background-color: white;
  width: 400px;
  margin: auto;
  justify-content: center;
  text-align: center;
  border: 1px solid #d6dbe2;
`;

const StyledRowDiv = styled.div`
  width: 100%;
  margin-top: 25px;
  text-align: ${props => props.position};
`;

const StyledFind = styled.a`
  cursor: pointer;
  color: black;
  margin-right: 15px;
  :visited {
    text-decoration: none;
  }
`;

export { StyledBoxWrapper, StyledBoxDiv, StyledRowDiv, StyledFind };
