import styled from 'styled-components';

const SelectWrapper = styled.select`
  width: ${props => (props.width ? props.width : '100px')};
  padding: 3px 5px;
  margin-bottom: 10px;
  border: 1px solid ${props => props.theme.colors.snsGray};
  border-radius: 4px;
  :focus {
    outline: none;
  }
`;

export { SelectWrapper };
