import styled from 'styled-components';

const StyledBoxDiv = styled.div`
  display: flex;
  align-items: center;
  height: 60vh;
  div {
    width: 400px;
    margin: 10px auto;
    justify-content: center;
    text-align: center;
  }
`;

const SocialLoginButton = styled.button`
  color: #fff;
  width: ${props => (props.width ? props.width : 'fit-content')};
  height: ${props => (props.height ? props.height : '50px')};
  margin: 5px 0;
  background-color: ${props => props.color};
  font-size: 1.2rem;
  border-radius: 4px;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  span {
    text-align: center;
  }
`;

export { StyledBoxDiv, SocialLoginButton };
