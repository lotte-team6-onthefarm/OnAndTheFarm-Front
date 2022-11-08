import styled from 'styled-components';

const StyledButton = styled.button`
  color: #fff;
  width: ${props => (props.width ? props.width : 'fit-content')};
  height: ${props => (props.height ? props.height : '40px')};
  margin: ${props => (props.margin ? props.margin : 'auto')};
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

const WhiteButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.gray};
  color: black;
  :hover {
    border: solid 1px black;
  }
`;

const BlackButton = styled(StyledButton)`
  background-color: #000000;
`;

const GrayButton = styled(StyledButton)`
  background-color: #707070;
`;

const WhiteButtonNoHover = styled(StyledButton)`
  background-color: ${props => props.theme.colors.white};
  border: solid 1px ${props => props.theme.colors.gray};
  color: black;
  cursor: default;
`;

export {
  StyledButton,
  GreenButton,
  BlueButton,
  WhiteButton,
  WhiteButtonNoHover,
  BlackButton,
  GrayButton,
};
