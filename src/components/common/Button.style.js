import styled from 'styled-components';

const StyledButton = styled.button`
  color: #fff;
  width: ${props => props.width?props.width:'fit-content'};
  height: 40px;
  margin: ${props => props.margin?props.margin:'auto'};
  background-color: ${props => props.color};
  padding: 8px 20px;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
`;


const GreenButton = styled(StyledButton)`
background-color: ${props => props.theme.colors.green};
`;

const BlueButton = styled(StyledButton)`
background-color: ${props => props.theme.colors.blue};
`;

export { StyledButton, GreenButton, BlueButton };
